import { Suspense, lazy, ImgHTMLAttributes } from "react";

const Image = lazy(() => import("./Image"));

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const LazyImage = (props: Props) => {
    return (
        <Suspense>
            <Image {...props} />
        </Suspense>
    );
};