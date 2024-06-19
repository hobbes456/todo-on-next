import { useState, useEffect } from "react";

import AppLoader from "@/components/common/AppLoader";
import Todo from "@/components/common/Todo";
import Information from "@/components/common/Information";

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
