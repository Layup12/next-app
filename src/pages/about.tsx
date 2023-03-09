import Image from "next/image";

import { getTime } from "@pages/api/services/time";
import { getAssets } from "@pages/api/services/assets";
import { Assets } from "./api/assets";

import styles from "../styles/pages/About.module.scss";

interface IAbout {
    time: string;
    assets: Assets;
}

export default function About({ time, assets: { image, background } }: IAbout) {
    return (
        <div className={styles.root}>
            <h1>About app</h1>
            <span>{time}</span>

            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={image} alt="" width={300} height={300} quality={10} />
                <Image className={styles.image} src={image} alt="" width={300} height={300} quality={30} />
                <Image className={styles.image} src={image} alt="" width={300} height={300} quality={100} />
            </div>

            <Image className={styles.image} src={background} alt="" width={500} height={500} />
        </div>
    );
}

export async function getStaticProps() {
    const time = await getTime();
    const assets = await getAssets();

    if (!time || !assets) {
        return {
            notFound: true,
        };
    }

    return {
        props: { time, assets },
        revalidate: 10,
    };
}
