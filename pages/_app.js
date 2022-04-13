import { useState, Fragment } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Router from 'next/router'
import '../styles/globals.css'
import Layout from '../components/layout'
import LoadingSpinner from '../components/LoadingSpinner'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  Router.onRouteChangeStart = () => {
    setLoading(true)
  }

  Router.onRouteChangeComplete = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      {!loading ? (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      ) : <LoadingSpinner />}

    </Fragment>
  )
}

export default MyApp
