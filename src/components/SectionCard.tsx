import type { ReactNode } from 'react'

type SectionCardProps = {
  title: string
  children: ReactNode
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <div className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  )
}
