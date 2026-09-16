import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const metrics = [
    { label: 'Total users', value: '28.4K' },
    { label: 'Total sellers', value: '1,246' },
    { label: 'Total revenue', value: '$480K' },
    { label: 'Pending products', value: '34' },
]

const sales = [
    { month: 'Jan', sales: 320 },
    { month: 'Feb', sales: 440 },
    { month: 'Mar', sales: 390 },
    { month: 'Apr', sales: 520 },
    { month: 'May', sales: 640 },
    { month: 'Jun', sales: 780 },
]

export default function AdminPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Admin</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Platform overview</h1>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                        <p className="text-sm text-slate-500">{metric.label}</p>
                        <p className="mt-4 text-3xl font-black text-slate-900">{metric.value}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <h2 className="text-xl font-bold text-slate-900">Revenue analytics</h2>
                <div className="mt-6 h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sales}>
                            <defs>
                                <linearGradient id="adminSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.08} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid stroke="#e2e8f0" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Area type="monotone" dataKey="sales" stroke="#4f46e5" fill="url(#adminSales)" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
