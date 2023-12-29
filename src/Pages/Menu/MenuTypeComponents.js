import "./MenuList.css";
import { useState } from "react";

const MenuTypeComponents = (props) => {

    const [isSelected, setSelected] = useState(false);

    const listSelectHandler = () =>{
        setSelected(!isSelected);
    }

    return (
        <article className={isSelected ? "MenuItemListSelected" :"MenuItemList"}>
            <h2 className="MenuItemType" onClick={listSelectHandler}>
                {props.data}
            </h2>
        </article>
    );
};

export default MenuTypeComponents;