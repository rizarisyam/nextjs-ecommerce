import {Fragment} from 'react'
import Header from "./UI/Header";
import Footer from './Layout/Footer';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Header />
            <main >{children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout;