import { FC, PropsWithChildren } from "react";

import { AppHead } from "./AppHead";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayout extends PropsWithChildren {}

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <AppHead />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
