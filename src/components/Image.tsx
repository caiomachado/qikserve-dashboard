import { ComponentProps } from "react";

type Props = ComponentProps<'img'>;

const Image = (props: Props) => {
    return <img {...props} />;
}

export default Image;