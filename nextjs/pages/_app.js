import Layout from "../component/Layout";


export default function App({ Component, pageProps }){
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
            nav {
                background: #fff;
            }

            a {
                text-decoration: none;
                padding: 0 4px;
            }
            
            .active {
                color: #000;
                font-weight: bold;
            }
            `}</style>
        </Layout>
    )
}