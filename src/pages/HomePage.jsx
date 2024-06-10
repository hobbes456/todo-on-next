import { useState, useEffect } from "react";
import Head from "next/head";

import AppLoader from "@/components/common/AppLoader";
import Todo from "@/components/pages/Todo";
import Information from "@/components/common/Information";

import s from "@/styles/HomePage.module.scss";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(!isLoading), 300);
    }, []);
    
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="todo"/>
                <meta name="description" content="Simple toDo app"/>
                <meta http-equiv="Permissions-Policy" content="interest-cohort=()"/>
                <title>todos app</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            {isLoading ? 
                <AppLoader/> :
                <div className={s.main}>
                    <Todo/>
                    <Information/>
                </div>}
        </>
    );
}

export default HomePage;