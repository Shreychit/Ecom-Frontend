import React from 'react'
import Header from './header'
import Footer from './footer'
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                {children}
            </main>

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App',
    description: 'mern stack project',
    keywords: 'mern,react,node,mongodb',
    author: 'shreyas'
};

export default Layout