import { Fragment } from 'react'


const Products = ({data}) => {
   
    return (
        <Fragment>
            <section className='px-8 grid grid-cols-5 gap-3 min-h-screen'>
                {data.map((product) => (
                    <div className='max-w-xs border rounded-md overflow-hidden shadow-md'>
                        <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                        <div className='py-2 px-2'>
                            <h1>Product title</h1>
                            <p className='text-gray-400 text-sm'>Space for a small product description</p>
                            <div className='flex justify-between py-3'>
                                <div>
                                    <h3>$36.99</h3>
                                </div>
                                <div>
                                    <button className='text-white text-sm bg-green-700 rounded-2xl px-3 py-1'>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </Fragment>
    )
}



export default Products