import '../styles/globals.css'
import SiteMetadata from '@/components/seo/SiteMetadata';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteMetadata />
      <Component {...pageProps} />
    </>
  )
}
