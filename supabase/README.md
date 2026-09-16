# Supabase setup

## 1. Create a new Supabase project

- Go to https://supabase.com
- Create a new project
- Copy the project URL and anon key

## 2. Apply the schema

Run the contents of `schema.sql` in the Supabase SQL editor.

Then run `seed.sql` to add default categories and settings.

## 3. Configure storage buckets

Create two buckets:

- `product-images` (public)
- `product-files` (private)

Set the private bucket to restricted access.

## 4. Environment variables

Add these values to your `.env`:

VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

## 5. Row Level Security

This schema includes RLS policies for profiles, sellers, products, orders, wishlist, reviews, and notifications.

## 6. Next steps

Connect the frontend to Supabase Auth and use the generated tables for real product, order, review, and download flows.
