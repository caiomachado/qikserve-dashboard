import { useState } from 'react';
import { MenuItem } from "../models";
import { Pencil } from 'lucide-react';

type Props = {
    menuItem: MenuItem;
    handleClick: (item: MenuItem) => void;
    isActive: boolean;
}

export const ListItem = ({ menuItem, handleClick, isActive }: Props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <li className={isActive ? 'active' : ''} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="name-wrapper">
                {!!menuItem?.images?.length && (
                    <img src={menuItem?.images?.[0]?.image} alt="Menu item image" />
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