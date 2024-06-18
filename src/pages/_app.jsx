import { Provider } from "react-redux";
import store from "@/store/store";

import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <main>
                <Component {...pageProps} />
            </main>
        </Provider>
    )
}

export default App;