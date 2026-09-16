# Digital Se Marketplace

A modern digital products marketplace built with React + Vite and designed for Supabase-backed commerce.

## Features

- Product marketplace storefront
- Customer cart and checkout flow
- Seller dashboard and admin overview
- Download and wishlist flows
- Product catalog mock data
- Supabase database schema and RLS setup

## Tech stack

- React + Vite
- Tailwind CSS
- React Router
- Recharts
- Lucide React
- Supabase PostgreSQL

## Local setup

1. Install dependencies:
   npm install
2. Copy the example environment file:
   copy .env.example .env
3. Start the app:
   npm run dev -- --host 0.0.0.0 --port 4179

## Supabase database

The database schema is located in:
- supabase/schema.sql
- supabase/seed.sql

Apply these in the Supabase SQL editor to create tables, indexes, and row-level security policies.

## Environment variables

Use the values in .env.example and set them to your Supabase project values.

## Notes

This project currently includes a working frontend demo and a production-ready schema foundation for a real Supabase backend integration.
