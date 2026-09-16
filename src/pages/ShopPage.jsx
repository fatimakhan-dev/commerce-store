import { SlidersHorizontal, Search, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function ShopPage({ onAddToCart, wishlist, onToggleWishlist }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Marketplace</p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">Shop digital products</h1>
                </div>
                <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-soft">
                    <Search className="h-4 w-4 text-slate-400" />
                    <input
                        placeholder="Search product name, keyword, seller..."
                        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                        <SlidersHorizontal className="h-4 w-4 text-slate-500" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-sm font-semibold text-slate-800">Category</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                {categories.map((category) => (
                                    <label key={category} className="flex items-center gap-2">
                                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                                        {category}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-semibold text-slate-800">Price range</h3>
                            <input type="range" min="0" max="50" className="w-full accent-brand-600" />
                            <div className="mt-2 flex justify-between text-xs text-slate-500">
                                <span>$0</span>
                                <span>$50+</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 text-sm font-semibold text-slate-800">Rating</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                {[5, 4, 3].map((rating) => (
                                    <label key={rating} className="flex items-center gap-2">
                                        <input type="radio" name="rating" className="h-4 w-4" />
                                        {rating}+ stars
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                <div>
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-sm text-slate-600">Showing {products.length} products</div>
                        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-soft">
                            Sort by: Recommended
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} isWishlisted={wishlist.includes(product.id)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
