import styles from "../styles/components/Header.module.scss";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header className={styles.header}>
            <span>Logo</span>
            <Navbar />
        </header>
    );
};
