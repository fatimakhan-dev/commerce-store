create extension if not exists "uuid-ossp";

create type public.user_role as enum ('CUSTOMER', 'SELLER', 'ADMIN');
create type public.order_status as enum ('PENDING', 'PAID', 'PROCESSING', 'DELIVERED', 'CANCELLED');
create type public.product_status as enum ('DRAFT', 'PENDING_REVIEW', 'APPROVED', 'REJECTED', 'ARCHIVED');
create type public.payment_status as enum ('PENDING', 'AUTHORIZED', 'PAID', 'FAILED', 'REFUNDED');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique,
  avatar_url text,
  role public.user_role not null default 'CUSTOMER',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sellers (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  store_name text not null,
  bio text,
  website text,
  approved boolean not null default false,
  commission_rate numeric(5,2) not null default 10.00,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  description text,
  parent_id uuid references public.categories(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default uuid_generate_v4(),
  seller_id uuid not null references public.sellers(id) on delete cascade,
  category_id uuid references public.categories(id) on delete set null,
  title text not null,
  slug text not null unique,
  description text not null,
  short_description text,
  price numeric(10,2) not null default 0,
  discount_price numeric(10,2),
  thumbnail_url text,
  status public.product_status not null default 'DRAFT',
  is_featured boolean not null default false,
  file_format text,
  file_size text,
  compatibility text,
  license text,
  tags text[] default '{}',
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.product_files (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references public.products(id) on delete cascade,
  file_name text not null,
  storage_path text not null,
  mime_type text,
  size_bytes bigint,
  is_private boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  status public.order_status not null default 'PENDING',
  subtotal numeric(10,2) not null default 0,
  discount numeric(10,2) not null default 0,
  tax numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  currency text not null default 'USD',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  quantity integer not null default 1,
  price numeric(10,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders(id) on delete cascade,
  provider text not null default 'mock_gateway',
  provider_payment_id text,
  amount numeric(10,2) not null,
  status public.payment_status not null default 'PENDING',
  created_at timestamptz not null default now()
);

create table if not exists public.downloads (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  order_id uuid not null references public.orders(id) on delete cascade,
  signed_url text,
  downloaded_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  review text,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.wishlists (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

create table if not exists public.coupons (
  id uuid primary key default uuid_generate_v4(),
  code text not null unique,
  discount_type text not null check (discount_type in ('percentage', 'fixed')),
  amount numeric(10,2) not null,
  expiry_date timestamptz,
  usage_limit integer,
  minimum_purchase numeric(10,2) default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.coupon_usage (
  id uuid primary key default uuid_generate_v4(),
  coupon_id uuid not null references public.coupons(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  order_id uuid references public.orders(id) on delete set null,
  used_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.seller_payouts (
  id uuid primary key default uuid_generate_v4(),
  seller_id uuid not null references public.sellers(id) on delete cascade,
  amount numeric(10,2) not null,
  status text not null default 'PENDING',
  payout_date timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.platform_settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create index if not exists idx_products_seller on public.products(seller_id);
create index if not exists idx_products_category on public.products(category_id);
create index if not exists idx_orders_user on public.orders(user_id);
create index if not exists idx_order_items_order on public.order_items(order_id);
create index if not exists idx_reviews_product on public.reviews(product_id);
create index if not exists idx_downloads_user_product on public.downloads(user_id, product_id);
create index if not exists idx_notifications_user on public.notifications(user_id);

alter table public.profiles enable row level security;
alter table public.sellers enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_files enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payments enable row level security;
alter table public.downloads enable row level security;
alter table public.reviews enable row level security;
alter table public.wishlists enable row level security;
alter table public.coupons enable row level security;
alter table public.coupon_usage enable row level security;
alter table public.notifications enable row level security;
alter table public.seller_payouts enable row level security;
alter table public.platform_settings enable row level security;

create policy "Users can view their own profile" on public.profiles
for select using (auth.uid() = id);

create policy "Users can update their own profile" on public.profiles
for update using (auth.uid() = id);

create policy "Sellers can view their own record" on public.sellers
for select using (auth.uid() = user_id);

create policy "Public can view products" on public.products
for select using (true);

create policy "Sellers can manage their own products" on public.products
for all using (
  seller_id in (
    select id from public.sellers where user_id = auth.uid()
  )
) with check (
  seller_id in (
    select id from public.sellers where user_id = auth.uid()
  )
);

create policy "Users can view their own orders" on public.orders
for select using (auth.uid() = user_id);

create policy "Users can create their own orders" on public.orders
for insert with check (auth.uid() = user_id);

create policy "Users can view their own wishlist" on public.wishlists
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can view their own reviews" on public.reviews
for select using (auth.uid() = user_id);

create policy "Users can submit reviews" on public.reviews
for insert with check (auth.uid() = user_id);

create policy "Public can read categories" on public.categories
for select using (true);

create policy "Public can read coupons" on public.coupons
for select using (true);

create policy "System can manage platform settings" on public.platform_settings
for all using (true) with check (true);

create function public.handle_new_user() returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, role)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email, 'CUSTOMER')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at before update on public.profiles
for each row execute procedure public.update_updated_at();

create trigger update_sellers_updated_at before update on public.sellers
for each row execute procedure public.update_updated_at();

create trigger update_products_updated_at before update on public.products
for each row execute procedure public.update_updated_at();

create trigger update_orders_updated_at before update on public.orders
for each row execute procedure public.update_updated_at();
