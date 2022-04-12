import { Fragment } from 'react'
import Product from './Product'

const Products = ({ data }) => {

    return (
        <Fragment>
            <section className='px-8 grid grid-cols-4 place-items-center gap-x-2 gap-y-8 min-h-screen py-10'>
                {data.map((product) => (
                    <Product key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image} />
                ))}

            </section>

        </Fragment>
    )
}



export default Products