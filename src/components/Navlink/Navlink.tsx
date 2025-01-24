import { NavLinkProps } from "@/interfaces"
import Link from "next/link"
import styles from './navlink.module.scss';

function Navlink({ href, type, children, size, icon }: NavLinkProps) {

    return (
        <Link
            href={href}
            className={`${styles.navlink} ${styles[size]} ${styles[type]}`}>
            {children}{icon && icon}
        </Link>
    )
}

export default Navlink