import type { AppProps } from 'next/app'
import '../styles/main.scss'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="h-screen overflow-x-hidden w-screen overflow-y-auto text-primary bg-secondary">
      <Component {...pageProps} />
    </main>
  )
}
