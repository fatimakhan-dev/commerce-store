import { Link } from 'react-router-dom'

export default function CheckoutPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Checkout</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Complete your purchase</h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                    <h2 className="text-xl font-bold text-slate-900">Billing details</h2>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="Full name" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="you@example.com" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-slate-700">Country</label>
                            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900">Payment</h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {['Stripe', 'PayPal', 'Bank transfer'].map((option) => (
                                <button key={option} type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700">{option}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                    <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                        <div className="flex items-center justify-between">
                            <span>Modern Resume Template</span>
                            <span>$4.99</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>AI Automation Masterclass</span>
                            <span>$29.99</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200 pt-4 text-slate-800">
                            <span>Subtotal</span>
                            <span>$34.98</span>
                        </div>
                        <div className="flex justify-between"><span>Discount</span><span>-$6.99</span></div>
                        <div className="flex justify-between"><span>Tax</span><span>$0.00</span></div>
                        <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900"><span>Total</span><span>$27.99</span></div>
                    </div>

                    <Link to="/payment-success" className="mt-8 block rounded-2xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700">Pay now</Link>
                </aside>
            </div>
        </div>
    )
}
