import '@/styles/globals.scss'
import '@/styles/product-table.css'
import '@/styles/globals.css'
import '@/styles/book-list.css'

import '@/node_modules/bootstrap/scss/bootstrap.scss'
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
