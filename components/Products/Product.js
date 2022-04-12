import { Fragment } from 'react'
import Link from 'next/link'

const Product = (props) => {

    const { id, title, price, description, image } = props

    return (
        <Fragment>
            <Link href={`/product/${id}`}>

                <div className='max-w-xs border rounded-md overflow-hidden hover:shadow-md cursor-pointer'>
                    <img className='h-56 w-full object-cover' src={image} />
                    <div className='py-2 px-2'>
                        <h1 className='truncate text-base font-medium'>{title}</h1>
                        <p className='text-gray-400 text-sm truncate'>{description}</p>
                        <div className='flex h-full justify-between py-3'>
                            <div>
                                <h3>{price}</h3>
                            </div>
                            <div>
                                <button className='text-white text-sm bg-green-700 rounded-2xl px-3 py-1'>Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default Product;