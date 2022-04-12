import {Fragment} from 'react'
import Products from '../components/Products'
import axios from 'axios'

function Home(props) {

  const {products} = props

  return (
    <Fragment>
      <Products data={products}></Products>
    </Fragment>
  )
}

export async function getStaticProps() {

  const response = await axios.get('https://fakestoreapi.com/products');
  const products = response.data;

  return {
      props: {
          products
      }
  }
}

export default Home
