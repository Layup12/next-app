import { useEffect, useState } from "react";
import Image from "next/image";

import { getAllPhoto, Photo } from "@/services/photo";

import styles from "../styles/pages/Home.module.scss";

const PACK_COUNT = 12;

export default function Home() {
    const [photoList, setPhotoList] = useState<Photo[]>([]);
    const [elementCount, setElementCount] = useState(PACK_COUNT);

    const debounceValue = useDebounce(elementCount);

    useEffect(() => {
        async function effect() {
            const allPhoto = await getAllPhoto();
            allPhoto && setPhotoList(allPhoto);
        }

        effect();
    }, []);

    return (
        <>
            <h1>Home page</h1>

            <input
                className={styles.input}
                type="number"
                onChange={({ target: { value } }) => setElementCount(Number(value))}
            />

            <div className={styles.imageWrapper}>
                {photoList.slice(0, debounceValue).map(({ thumbnailUrl, id }) => (
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

            {elementCount < photoList.length && (
                <button className={styles.button} onClick={() => setElementCount((c) => c + PACK_COUNT)}>
                    Show More
                </button>
            )}
        </>
    );
}

export function useDebounce<T>(value: T, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
