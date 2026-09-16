import { BarChart3, DollarSign, ShoppingCart, Users, ArrowUpRight } from 'lucide-react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { dashboardStats, salesChart } from '../lib/mockData'

export default function DashboardPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Seller dashboard</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">Overview</h1>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((stat) => (
                    <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">{stat.label}</span>
                            <div className="rounded-full bg-brand-100 p-2 text-brand-700"><ArrowUpRight className="h-4 w-4" /></div>
                        </div>
                        <div className="mt-5 text-3xl font-black text-slate-900">{stat.value}</div>
                        <div className="mt-2 text-sm font-medium text-emerald-600">{stat.change}</div>
                    </div>
                ))}
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-[1.8fr_1fr]">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">Sales performance</h2>
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">+22.4%</span>
                    </div>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesChart}>
                                <defs>
                                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#5a63eb" stopOpacity={0.6} />
                                        <stop offset="95%" stopColor="#5a63eb" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                <YAxis tickLine={false} axisLine={false} />
                                <Tooltip />
                                <Area type="monotone" dataKey="sales" stroke="#5a63eb" fill="url(#salesGradient)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">Earnings</h3>
                            <DollarSign className="h-5 w-5 text-brand-600" />
                        </div>
                        <div className="mt-4 text-3xl font-black text-slate-900">$24,850</div>
                        <p className="mt-2 text-sm text-slate-500">Net profit +8.1% from last month</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">Orders</h3>
                            <ShoppingCart className="h-5 w-5 text-brand-600" />
                        </div>
                        <div className="mt-4 text-3xl font-black text-slate-900">1,850</div>
                        <p className="mt-2 text-sm text-slate-500">Payouts processed weekly</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">Customers</h3>
                            <Users className="h-5 w-5 text-brand-600" />
                        </div>
                        <div className="mt-4 text-3xl font-black text-slate-900">4,960</div>
                        <p className="mt-2 text-sm text-slate-500">Returning shoppers this quarter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
