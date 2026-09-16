import { Heart, ShoppingCart } from 'lucide-react'

const wishlistItems = [
    { id: 1, name: 'Ultimate AI Prompt Pack', price: '$9.99', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' },
    { id: 2, name: '1000+ Business Canva Templates', price: '$14.99', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' },
]

export default function WishlistPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Saved</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">My wishlist</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
                        <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
                        <div className="p-5">
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                                <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xl font-bold text-slate-900">{item.price}</span>
                                <button type="button" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
                                    <ShoppingCart className="h-4 w-4" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
