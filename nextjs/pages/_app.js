import NavBar from "../component/NavBar";


export default function App({ Component, pageProps }){
    return (
        <>
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
        </>
    )
}