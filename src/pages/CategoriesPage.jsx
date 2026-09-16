import { Link } from 'react-router-dom'
import { categories } from '../data/products'

export default function CategoriesPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Categories</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Explore by topic</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {categories.map((category, index) => (
                    <Link key={category} to="/shop" className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-violet-100 text-lg font-bold text-brand-700">
                            {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{category}</h3>
                        <p className="mt-3 text-sm text-slate-500">Discover top-selling resources, templates, and growth tools.</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
