import NavBar from "../component/NavBar";
import Layout from "../component/Layout";


export default function App({ Component, pageProps }){
    return (
        <Layout>
            <NavBar />
            <Component {...pageProps} />
            <span>hello</span>
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