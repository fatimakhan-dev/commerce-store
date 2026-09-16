import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { cartItems } from '../lib/mockData'

export default function CartPage() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discount = 6.99
    const total = subtotal - discount

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Cart</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Your digital cart</h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_380px]">
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
                            <div className="h-24 w-full rounded-2xl bg-gradient-to-br from-brand-100 to-violet-100 sm:w-24" />
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                                        <p className="text-sm text-slate-500">Seller: {item.seller}</p>
                                    </div>
                                    <button type="button" className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-rose-500">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3 rounded-full border border-slate-200 px-2 py-1.5">
                                        <button type="button" className="rounded-full p-1 hover:bg-slate-100"><Minus className="h-4 w-4" /></button>
                                        <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                                        <button type="button" className="rounded-full p-1 hover:bg-slate-100"><Plus className="h-4 w-4" /></button>
                                    </div>
                                    <div className="text-xl font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                    <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Discount</span><span>-${discount.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Tax</span><span>$0.00</span></div>
                        <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900"><span>Total</span><span>${total.toFixed(2)}</span></div>
                    </div>
                    <div className="mt-6 space-y-3">
                        <Link to="/checkout" className="block rounded-2xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700">Proceed to Checkout</Link>
                        <Link to="/shop" className="block rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700">Continue Shopping</Link>
                    </div>
                </aside>
            </div>
        </div>
    )
}
