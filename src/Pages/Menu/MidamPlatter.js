import { useState } from "react"
import spIcon from "../../Images/Logos/chilly.png";

const MidamPlatter = () => {
    const [isSelected, setSelected] = useState(false);

    const listSelectHandler = () => {
        setSelected(!isSelected);
    }

    return (
        <article className="MenuItemContainer">
            <div className={isSelected ? "MenuItemListSelected" : "MenuItemList"}>
                <h2 className="MenuItemType" onClick={listSelectHandler}>
                    MIDAM PLATTER
                </h2>
            </div>
            <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
                Substitutes Not Available
            </h3>
            <h3 className={isSelected ? "HSPlatterPrice" : "hidden"}>
                $55
            </h3>
            <img src={require("../../Images/Menu/midamplatter.webp")} className={isSelected ? "HSPlatter" : "hidden"} alt="midam platter" />
            <h3 className={isSelected ? "menuSecondaryHeader" : "menuSecondaryHeaderHidden"}>
                Choice Of Protein
            </h3>
            <ul className={isSelected ? "HSPlatterOptions" : "hidden"}>
                <li className="HSPlatterOptionList">
                    Bulgogi (Tender Beef)
                </li>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSPlatterOptionList">
                        BBQ Pork Sirloin
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
                <div className="HSPlatterSpIconContainer">
                    <li className="HSPlatterOptionList">
                        BBQ Squid and Pork Belly
                    </li>
                    <img src={spIcon} className="HSPlatterIcon" alt="spicy Icon for HS Platter" />
                </div>
            </ul>
        </article>
    );

};

export default MidamPlatter;