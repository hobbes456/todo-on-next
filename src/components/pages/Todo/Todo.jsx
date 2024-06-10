import Header from "@/components/common/Header";
import Footer from "@/components/pages/Footer";

import s from "./Todo.module.scss";

const Todo = () => {
    return (<div className={s.todo}>
        <Header />
        <div className={s.todo__content}>
            <input id="toggleAll" type="checkbox" />
            <label className={s.todo__toggleAll} htmlFor="toggleAll"/>
            <ul className={s.todo__itemsList}/>
        </div>
        <Footer />
    </div>)
}

export default Todo;