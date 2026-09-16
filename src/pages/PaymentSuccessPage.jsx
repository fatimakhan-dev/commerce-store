import { CheckCircle2, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PaymentSuccessPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 text-center shadow-soft sm:p-12">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-glow">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h1 className="mt-8 text-4xl font-black text-slate-900">Payment successful</h1>
                <p className="mt-4 text-lg text-slate-600">Your order has been created and digital files are ready to download.</p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link to="/downloads" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                        <Download className="h-4 w-4" />
                        Download Now
                    </Link>
                    <Link to="/shop" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}
