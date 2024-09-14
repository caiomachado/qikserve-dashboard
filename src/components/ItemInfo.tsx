import { MenuItem } from "../models"
import { Button } from "./Button/Button";

type Props = {
    selectedItem: MenuItem;
    onCloseInfo: () => void;
    onSaveInfo: () => void;
}

export const ItemInfo = ({ selectedItem, onCloseInfo, onSaveInfo }: Props) => {
    return (
        <div className="item-info">
            <main className="info-wrapper">
                <div className="input-block">
                    <label htmlFor="itemName">Item name</label>
                    <input type="text" name="itemName" defaultValue={selectedItem?.name ?? ''} />
                </div>
                <div className="input-block">
                    <label htmlFor="displayName">Display name</label>
                    <input type="text" name="displayName" defaultValue={selectedItem?.internalName ?? ''} />
                </div>
                <div className="input-block">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" defaultValue={selectedItem?.description ?? ''} />
                </div>
                <div className="input-block">
                    <label htmlFor="price">Price</label>
                    <div className="price-input-wrapper">
                        <input type="number" name="price" min={0} defaultValue={selectedItem?.price ?? 0} />
                        <span>R$</span>
                    </div>
                </div>
            </main>

            <footer>
                <Button variant="secondary" type="button" onClick={onCloseInfo}>CANCEL</Button>
                <Button variant="primary" type="button" onClick={onSaveInfo}>DONE</Button>
            </footer>
        </div>
    )
}