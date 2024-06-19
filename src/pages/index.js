import Head from "next/head";

import AppMain from "@/components/pages/AppMain";

const HomePage = () => {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="keywords" content="todo" />
                <meta name="description" content="Simple toDo app" />
                <meta
                    http-equiv="Permissions-Policy"
                    content="interest-cohort=()"
                />
                <title>todos app</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <AppMain />
        </>
    );
};

export default HomePage;
