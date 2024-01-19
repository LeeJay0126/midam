import { useState } from "react"
import spIcon from "../../Images/Logos/chilly.png";

const HanSang = () => {
    const [isSelected, setSelected] = useState(false);

    const listSelectHandler = () => {
        setSelected(!isSelected);
    }

    return (
        <article className="MenuItemContainer">
            <div className={isSelected ? "MenuItemListSelected" : "MenuItemList"}>
                <h2 className="MenuItemType" onClick={listSelectHandler}>
                    'HANSANG' LUNCH SPECIAL
                </h2>
            </div>
            <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
                Hansang means "a table full of food"
            </h3>
            <h3 className={isSelected ? "HSPlatterPrice" : "hidden"}>
                $27
            </h3>
            <img src={require("../../Images/Menu/Hansang.jpg")} className={isSelected ? "HSPlatter" : "hidden"} alt="midam platter" />
            <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
                Choice Of Protein
            </h3>
            <ul className={isSelected ? "HSPlatterOptions" : "hidden"}>
                <li className="HSOptionList">
                    Fresh Pork Belly Set
                </li>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        Grilled Chicken Set
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <li className="HSOptionList">
                    BBQ Beef Bulgogi Set
                </li>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        BBQ Squid and Pork Belly Set
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        BBQ Pork Sirloin Set
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <li className="HSOptionList">
                    Beef Brisket Set
                </li>
            </ul>
            <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
                Choice Of Soup
            </h3>
            <ul className={isSelected ? "HSPlatterOptions" : "hidden"}>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        Spicy Seafood Tofu Soup (+$1)
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        Spicy Kimchi Pork Tofu Soup
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <li className="HSOptionList">
                    Seseme Tofu Soup
                </li>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSOptionList">
                        Soy Bean Paste Soup
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
            </ul>
        </article>
    );

};

export default HanSang;