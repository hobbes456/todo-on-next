import s from "./Header.module.scss";

const Header = () => {
    return (
        <form 
            className={s.header}
            action="#"
            method="post"
            onSubmit={() => {}}>
            <h1 className={s.header__title}>todos</h1>
            <input className={s.header__input} type="text" placeholder="What needs to be done?" autoFocus=""/>
        </form>
    );
}

export default Header;