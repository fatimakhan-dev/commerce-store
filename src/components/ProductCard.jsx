import { Heart, ShoppingCart, Star } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted = false }) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute right-4 top-4 rounded-full border border-white/80 bg-white/80 p-2 text-slate-700 backdrop-blur transition hover:text-rose-500"
                    aria-label="Add to wishlist"
                >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
                {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-2.5 py-1 text-xs font-medium text-white">{product.badge}</span>
                )}
            </div>

            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{product.category}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1">{product.seller}</span>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                </div>

                <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-900">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                        )}
                    </div>
                </div>

                <div className="flex gap-3">
                    <button type="button" className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-600">
                        View Product
                    </button>
                    <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    )
}
