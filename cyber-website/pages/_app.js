// CSS is imported via Layout component Head section
// No need to import here as it's loaded via CDN and public assets

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}