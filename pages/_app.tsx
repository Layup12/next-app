import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { Layout } from "@components/Layout";

import "@styles/globals.scss";

const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </Layout>
    );
}
