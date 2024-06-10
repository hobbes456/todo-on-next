import Link from "next/link";

import s from "./LinkButton.module.scss";

const linkButton = ({item, onClick}) => {
    return (
        <Link 
            className={s.link}
            href={item.href}
            onClick={onClick}
        >{item.text}</Link>
    )
}

export default linkButton;