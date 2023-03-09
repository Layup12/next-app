import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { headConfig, HeadConfigEnum } from "@config/head";

export const AppHead: FC = () => {
    const { route } = useRouter();

    const { title, description } = getMeta(route);

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};

function getMeta(route: string) {
    return isExistEnumValue(route) ? headConfig[route] : headConfig.default;
}

function isExistEnumValue(str: string): str is HeadConfigEnum {
    return Object.values(HeadConfigEnum).includes(str as HeadConfigEnum);
}
