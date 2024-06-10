import s from "./Header.module.scss";

const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.header__title}>todos</h1>
            <input className={s.header__input} type="text" placeholder="What needs to be done?" autoFocus=""/>
        </div>
    );
}

export default Header;