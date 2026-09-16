import { ArrowRight, BookOpen, CheckCircle2, Sparkles, TrendingUp, Star, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, reviews } from '../data/products'

const categories = [
    { name: 'Templates', count: '320 items' },
    { name: 'AI Prompts', count: '160 items' },
    { name: 'Courses', count: '95 items' },
    { name: 'E-books', count: '140 items' },
    { name: 'Software', count: '77 items' },
    { name: 'Design Assets', count: '220 items' },
]

export default function HomePage({ onAddToCart, wishlist, onToggleWishlist }) {
    return (
        <div>
            <section className="bg-[radial-gradient(circle_at_top_left,_rgba(90,99,235,0.18),_transparent_30%),linear-gradient(135deg,#eff6ff,#f8fafc_35%,#eef2ff)]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-brand-700 shadow-soft">
                            <Sparkles className="h-4 w-4" />
                            New arrivals this week
                        </div>
                        <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Discover Digital Products That Work for You
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-slate-600">
                            Shop premium templates, ebooks, AI prompts, courses, tools and digital resources.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700">
                                Explore Products
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/sell" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-200 hover:text-brand-700">
                                Start Selling
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Instant downloads</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Secure checkout</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Trusted creators</div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-brand-200/60 blur-3xl" />
                        <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white p-4 shadow-glow">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                                alt="Marketplace showcase"
                                className="h-[520px] w-full rounded-[24px] object-cover"
                            />
                            <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/90 p-4 shadow-soft backdrop-blur">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-slate-500">Best Seller</p>
                                        <h3 className="text-lg font-bold text-slate-900">AI Automation Masterclass</h3>
                                    </div>
                                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">$29.99</div>
                                </div>
                                <div className="mt-3 flex items-center gap-2 text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-700">4.9</span>
                                    <span className="text-xs text-slate-500">(2,100 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-2xl bg-slate-50 p-5">
                            <BookOpen className="mb-3 h-6 w-6 text-brand-600" />
                            <p className="text-2xl font-bold text-slate-900">2000+</p>
                            <p className="text-sm text-slate-500">Digital products</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-5">
                            <TrendingUp className="mb-3 h-6 w-6 text-brand-600" />
                            <p className="text-2xl font-bold text-slate-900">96%</p>
                            <p className="text-sm text-slate-500">Satisfaction rate</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-5">
                            <ShoppingBag className="mb-3 h-6 w-6 text-brand-600" />
                            <p className="text-2xl font-bold text-slate-900">3.2k</p>
                            <p className="text-sm text-slate-500">Monthly sales</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-5">
                            <Star className="mb-3 h-6 w-6 text-brand-600" />
                            <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                            <p className="text-sm text-slate-500">Average rating</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Featured</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Popular products</h2>
                    </div>
                    <Link to="/shop" className="text-sm font-semibold text-brand-600">View all</Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {products.slice(0, 3).map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} isWishlisted={wishlist.includes(product.id)} />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Browse</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Top categories</h2>
                    </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {categories.map((category, index) => (
                        <div key={category.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-violet-100 text-lg font-bold text-brand-700">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                            <p className="mt-2 text-sm text-slate-500">{category.count}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Reviews</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Customer love</h2>
                    </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div key={review.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                            <div className="mb-4 flex items-center gap-1 text-amber-500">
                                {Array.from({ length: review.rating }).map((_, idx) => (
                                    <Star key={idx} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-600">“{review.text}”</p>
                            <div className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-800">{review.name}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
