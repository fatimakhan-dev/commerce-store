import { Link, NavLink } from 'react-router-dom'
import { Heart, ShoppingCart, Search, Menu, User, Sparkles } from 'lucide-react'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/categories', label: 'Categories' },
    { to: '/sell', label: 'Sell' },
]

export default function Layout({ children, cartCount = 0, wishlistCount = 0 }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-lg font-black tracking-tight text-slate-900">Digital Se</p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden flex-1 items-center justify-center px-4 md:flex">
                        <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                            <Search className="h-4 w-4 text-slate-400" />
                            <input
                                aria-label="Search products"
                                placeholder="Search templates, ebooks, prompts..."
                                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button type="button" className="hidden rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-brand-200 hover:text-brand-600 sm:inline-flex">
                            <Heart className="h-4 w-4" />
                            {wishlistCount > 0 && <span className="ml-2 text-xs font-semibold">{wishlistCount}</span>}
                        </button>
                        <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800">
                            <ShoppingCart className="h-4 w-4" />
                            Cart
                            {cartCount > 0 && <span className="rounded-full bg-brand-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{cartCount}</span>}
                        </Link>
                        <Link to="/login" className="hidden rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:border-brand-200 hover:text-brand-600 md:inline-flex">
                            <User className="h-4 w-4" />
                        </Link>
                        <button type="button" className="inline-flex rounded-full border border-slate-200 p-2 md:hidden" aria-label="Menu">
                            <Menu className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </header>

            <main>{children}</main>

            <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-bold text-white">Digital Se</span>
                        </div>
                        <p className="text-sm leading-6 text-slate-400">Premium digital products, templates, prompts, and learning resources for creators and businesses.</p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Marketplace</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Templates</li>
                            <li>E-books</li>
                            <li>Courses</li>
                            <li>AI Prompts</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>About</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Newsletter</h3>
                        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-3">
                            <input className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none" placeholder="Email address" />
                            <button type="button" className="mt-3 w-full rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
