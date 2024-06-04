import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    )
}

export default App;