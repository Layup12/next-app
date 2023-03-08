import Link from "next/link";

import styles from "../styles/components/Navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.link} href="/">
                Home
            </Link>
            <Link className={styles.link} href="/about">
                About
            </Link>
            <Link className={styles.link} href="/users">
                Users
            </Link>
            <Link className={styles.link} href="/posts">
                Posts
            </Link>
        </nav>
    );
};
