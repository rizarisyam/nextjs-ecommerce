import { useState, useEffect, Fragment } from 'react'
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : <LoadingSpinner />}

    </Fragment>
  )
}

export default MyApp
