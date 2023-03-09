import { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "@styles/components/Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = ({ children, className, ...props }) => {
    return (
        <button className={cn(styles.root, className)} {...props}>
            {children}
        </button>
    );
};
