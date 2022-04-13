import { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/reducers/cart';

import { useRouter } from 'next/router'
import axios from 'axios';

import { StarIcon, MinusIcon, PlusIcon } from '@heroicons/react/solid'

import { formatCurrency } from '../../helper/formatCurrency'

const ProductDetailPage = (props) => {
    const router = useRouter()
    const { product } = props

    const dispatch = useDispatch()

    const quantity = useSelector((state) => state.cart.quantity)
    const quantityInput = useRef(quantity)


    const addCartHandler = () => {
        dispatch(cartActions.addCart(product))
    }

    const removeCartHandler = () => {
        dispatch(cartActions.removeCart())
    }

    const calculateSubtotal = () => {
        if (quantity < 1) {
            return product.price
        }
        return product.price * quantity
    }

    return (
        <Fragment>
            <main className='grid md:grid-cols-3 gap-8 md:mx-48 my-8'>
                <section>
                    <div className='rounded-2xl h-80 w-80 overflow-hidden'>
                        <img className='w-full h-full object-cover' src={product.image} />
                    </div>
                </section>
                <section className='flex flex-col'>
                    <h1 className='font-semibold'>{product.title}</h1>
                    <div className='flex items-center gap-1'>
                        <StarIcon className='h-5 w-5 text-orange-600' />
                        <span>{product.rating.rate}</span>
                        <span className='text-gray-400 text-sm'>({product.rating.count} ulasan)</span>
                    </div>

                    <div className='border-y border-gray-400 my-4 py-2'>
                        <h1 className='border-b-2 border-black h-full w-fit mt-2'>Detail</h1>
                    </div>

                    <div>
                        <p className='text-gray-700 text-sm'>{product.description}</p>
                    </div>
                </section>

                <section>
                    <div className='border rounded-md max-w-xs p-3 flex flex-col gap-2'>
                        <h1>Atur jumlah dan catatan</h1>
                        <div className='flex border w-fit h-6 rounded-md py-4 px-2 items-center'>
                            <button onClick={removeCartHandler} disabled={quantity < 1}>
                                <MinusIcon className='w-5 h-5' />
                            </button>
                            <input value={quantity} onChange={() => quantity} type="text" className='text-sm w-10 h-4 px-2 border-transparent focus:border-transparent focus:ring-0' />
                            <PlusIcon onClick={addCartHandler} className='w-5 h-5' />
                        </div>

                        <div className='flex justify-between mt-8'>
                            <h3 className='text-gray-600'>Subtotal</h3>
                            <h1>{formatCurrency(product.price * quantity)}</h1>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <button onClick={addCartHandler} className='flex items-center justify-center bg-green-500 text-gray-100 rounded-lg p-2'>
                                <PlusIcon className='w-4 h-4' />
                                <span className='font-semibold'>Keranjang</span>
                            </button>
                            <button className='flex items-center font-semibold text-green-700 justify-center border border-green-500 rounded-lg p-2'>

                                Beli
                            </button>
                        </div>
                    </div>


                </section>
            </main>
        </Fragment>
    )
}


export const getStaticProps = async (context) => {
    const { params } = context
    const productId = params.id;

    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    const productData = response.data;

    return {
        props: {
            product: productData
        }
    }
}

export const getStaticPaths = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    const products = response.data;

    const paths = products.map((product) => ({
        params: { id: product.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export default ProductDetailPage
