import { Download, Calendar, Hash } from 'lucide-react'

const downloads = [
    { id: 'ORD-1048', name: 'AI Automation Masterclass', date: 'Sep 15, 2026', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
    { id: 'ORD-1042', name: 'Modern Resume Template', date: 'Sep 10, 2026', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
]

export default function DownloadsPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Downloads</p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900">My downloads</h1>
            </div>

            <div className="space-y-4">
                {downloads.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
                        <img src={item.image} alt={item.name} className="h-24 w-full rounded-2xl object-cover sm:w-24" />
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                            <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                                <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {item.date}</span>
                                <span className="inline-flex items-center gap-2"><Hash className="h-4 w-4" /> {item.id}</span>
                            </div>
                        </div>
                        <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                            <Download className="h-4 w-4" />
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
