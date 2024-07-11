import React from "react";
import { useState, useEffect } from "react";

import AppLoader from "@components/AppLoader";
import Todo from "@components/Todo";
import Information from "@components/Information";

import s from "./AppMain.module.scss";

const AppMain = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(!isLoading), 300);
    }, []);

    return (
        <>
            {isLoading ? (
                <AppLoader />
            ) : (
                <div className={s.main}>
                    <Todo />
                    <Information />
                </div>
            )}
        </>
    );
};

export default AppMain;
