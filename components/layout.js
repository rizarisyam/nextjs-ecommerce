import { Fragment } from 'react'
import Header from "./UI/Header";
import Footer from './Layout/Footer';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <main >{children}</main>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;