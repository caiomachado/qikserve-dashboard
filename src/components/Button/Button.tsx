import { ComponentProps } from 'react';
import './button.css';

type Props = {
    variant: 'primary' | 'secondary';
} & ComponentProps<'button'>

export const Button = ({ variant, children, ...rest }: Props) => {
    return <button {...rest} className={`btn ${variant}`}>{children}</button>
}