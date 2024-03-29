import MenuItemComponents from "./MenuItemComponents";
import "./MenuList.css";
import { useState } from "react";

const MenuTypeComponents = (props) => {

    const [isSelected, setSelected] = useState(false);

    const listSelectHandler = () => {
        setSelected(!isSelected);
    }

    const categoryItems = props.data.map((item) => (
        <MenuItemComponents
            menuSrc={item[0]}
            alt={item[1]}
            price={item[2]}
            dishName={item[3]}
            key={item[3]}
            spicy={item[4]}
            veg={item[5]}
        />
    ));

    const secondaryHeader = (
        <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
            {props.text}
        </h3>
    );

    return (
        <article className="MenuItemContainer">
            <div className={isSelected ? "MenuItemListSelected" : "MenuItemList"}>
                <h2 className="MenuItemType" onClick={listSelectHandler}>
                    {props.menuType}
                </h2>
            </div>
            {props.bool ? secondaryHeader : <div></div>}
            <section className={isSelected ? "categoryItems" : "categoryItemsDefault"}>
                {categoryItems}
            </section>
        </article>
    );
};

export default MenuTypeComponents;