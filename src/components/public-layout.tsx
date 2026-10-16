import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'

// Contact e-mail and responsible entity shown on the public pages (privacy/support).
// Set VITE_CONTACT_EMAIL and VITE_LEGAL_ENTITY at build time; placeholders otherwise.
export const CONTACT_EMAIL: string =
  import.meta.env.VITE_CONTACT_EMAIL || 'contact@example.com'

export const LEGAL_ENTITY: string =
  import.meta.env.VITE_LEGAL_ENTITY || 'Responsible organisation'

export function PublicLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="flex min-h-svh flex-col bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-4">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </div>
          <span className="font-semibold">Field Operations Tracker</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        ) : null}
        <div className="prose-public mt-8 space-y-6 text-foreground/90">
          {children}
        </div>
      </main>

      <footer className="border-t bg-background">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {LEGAL_ENTITY}
          </span>
          <nav className="flex gap-4">
            <Link className="hover:text-foreground" to="/privacidade">
              Privacidade
            </Link>
            <Link className="hover:text-foreground" to="/suporte">
              Suporte
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
