import type { AppProps } from 'next/app'
import '../styles/main.scss'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="h-screen overflow-y-auto w-full text-primary bg-secondary">
      <Component {...pageProps} />
    </main>
  )
}
