import Navbar from '../components/Home/Navbar/Navbar'
import '../style/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
