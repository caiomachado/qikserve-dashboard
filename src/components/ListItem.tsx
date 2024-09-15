import { memo, useState } from 'react';
import { MenuItem } from "../models";
import { Pencil } from 'lucide-react';
import { LazyImage } from './LazyImage';

type Props = {
    menuItem: MenuItem;
    handleClick: (item: MenuItem) => void;
    isActive: boolean;
}

const Item = ({ menuItem, handleClick, isActive }: Props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <li className={isActive ? 'active' : ''} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="name-wrapper">
                {!!menuItem?.images?.length && (
                    <LazyImage src={menuItem?.images?.[0]?.image} alt="Menu item image" />
                )}

                {menuItem.name}
            </div>

            {isHovering && (
                <button className="edit-button" type="button" onClick={() => handleClick(menuItem)} title="Edit">
                    <Pencil width={16} height={16} color="black" />
                </button>
            )}
        </li>
    )
}

export const ListItem = memo(Item);