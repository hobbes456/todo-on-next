import StoreProvider from "@/contexts/StoreProvider";

import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
    return (
        <StoreProvider>
            <main>
                <Component {...pageProps} />
            </main>
        </StoreProvider>
    )
}

export default App;