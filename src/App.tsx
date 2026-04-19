import SectionCard from './components/SectionCard'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
            Systems Analyst Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Mateo Romero Contreras</h1>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            Professional portfolio scaffold ready to be populated with final resume and project content.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard title="Experience Placeholder">
            <p>• Systems Analyst</p>
            <p>• QA Intern</p>
          </SectionCard>

          <SectionCard title="Projects Placeholder">
            <p>• Gym Flow project</p>
          </SectionCard>
        </div>
      </div>
    </main>
  )
}

export default App
