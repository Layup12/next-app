import { useEffect, useState } from "react";
import Image from "next/image";

import { getAllPhoto, Photo } from "@services/photo";
import { Button } from "@components/Button";

import styles from "../styles/pages/Home.module.scss";

const PACK_COUNT = 12;

export default function Home() {
    const [photoList, setPhotoList] = useState<Photo[]>([]);
    const [elementCount, setElementCount] = useState(PACK_COUNT);

    useEffect(() => {
        async function effect() {
            const allPhoto = await getAllPhoto();
            allPhoto && setPhotoList(allPhoto);
        }

        effect();
    }, []);

    return (
        <div className={styles.root}>
            <h1>Home page</h1>

            {Boolean(photoList.length) && (
                <div data-testid="image-wrapper" className={styles.imageWrapper}>
                    {photoList.slice(0, elementCount).map(({ thumbnailUrl, id }) => (
                        <Image
                            src={thumbnailUrl}
                            width={150}
                            height={150}
                            alt=""
                            key={id}
                            quality={id % 2 === 0 ? 100 : 10}
                            loading={id % 2 === 0 ? "eager" : "lazy"}
                        />
                    ))}
                </div>
            )}

            <Button
                className={styles.button}
                disabled={elementCount > photoList.length}
                onClick={() => setElementCount((c) => c + PACK_COUNT)}
            >
                Show More
            </Button>
        </div>
    );
}
