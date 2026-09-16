import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
                <div className="bg-gradient-to-br from-slate-900 via-brand-700 to-brand-500 p-10 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Join the platform</p>
                    <h1 className="mt-4 text-4xl font-black">Create your account</h1>
                    <p className="mt-5 text-brand-100">Start buying premium digital products or selling downloads as a creator.</p>
                </div>
                <div className="p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-slate-900">Register</h2>
                    <div className="mt-6 space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                            <input type="text" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="Jane Doe" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="Create a strong password" />
                        </div>
                        <button type="button" className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">Create account</button>
                    </div>
                    <p className="mt-5 text-sm text-slate-600">
                        Already have an account? <Link to="/login" className="font-semibold text-brand-600">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
