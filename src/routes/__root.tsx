import React from 'react'
import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import appCss from '../styles.css?url'
import { Header } from '../components/Header'
import { QueryProvider } from '../integrations/query/provider'
import { queryDevtoolsPlugin } from '../integrations/query/devtools'
import { dbDevtoolsPlugin } from '../integrations/db/devtools'

const devtoolsPlugins = [
  queryDevtoolsPlugin,
  dbDevtoolsPlugin,
]

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Crabwalk' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🦀</div>
        <h1 className="text-2xl font-bold text-white mb-2">404</h1>
        <p className="text-gray-400 mb-4">Page not found</p>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300">
          Go home
        </Link>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryProvider>
          <Header />
          {children}
          <TanStackRouterDevtools />
          {devtoolsPlugins.map((plugin, i) => (
            <React.Fragment key={i}>{plugin.render}</React.Fragment>
          ))}
        </QueryProvider>
        <Scripts />
      </body>
    </html>
  )
}