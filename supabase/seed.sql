insert into public.categories (name, slug, description) values
  ('E-books', 'ebooks', 'Guides, manuals, and educational ebooks'),
  ('Templates', 'templates', 'Editable design and business templates'),
  ('AI Prompts', 'ai-prompts', 'Prompt packs and workflows'),
  ('Courses', 'courses', 'Learning bundles and video classes'),
  ('Software', 'software', 'Apps, tools, and digital systems'),
  ('Graphics', 'graphics', 'Visual assets and design bundles'),
  ('Business', 'business', 'Business resources and playbooks'),
  ('Marketing', 'marketing', 'Growth and campaign assets'),
  ('Education', 'education', 'Learning content for schools and learners'),
  ('Design', 'design', 'Creative and UX design resources'),
  ('Productivity', 'productivity', 'Systems and workflow tools'),
  ('Finance', 'finance', 'Financial planning and accounting resources')
on conflict (name) do nothing;

insert into public.platform_settings (key, value) values
  ('marketplace_name', '{"value":"Digital Se"}'::jsonb),
  ('commission_rate', '{"value":10.0}'::jsonb),
  ('default_currency', '{"value":"USD"}'::jsonb)
on conflict (key) do nothing;
