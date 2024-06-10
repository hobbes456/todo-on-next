import Link from "next/link";

import LinkButton from "@/components/common/LinkButton";
import { buttonsContent } from "@/constants/buttonsContent";

import s from "./Footer.module.scss";

const Footer = () => {
    const handlerClick = () => console.log(1);

    return (
        <div className={s.footer}>
            <p />
            <div className={s.footer__buttons}>
                {buttonsContent.map((item) => {
                    return (<LinkButton
                        item={item}
                        key={item.id}
                        onClick={handlerClick}/>)
                })}
            </div>
            <Link 
                className={s.footer__clearButton} 
                href="#delete-btn"
                onClick={() => {}}
            >Clear Completed</Link>
        </div>
    );
}

export default Footer;