import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "@styles/components/Input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = ({ className, ...props }) => {
    return <input className={cn(styles.root, className)} {...props} />;
};
