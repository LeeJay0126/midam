import spIcon from "../../Images/Logos/chilly.png";


const MenuItemComponents = (props) => {

    const spAndVegIcon = (
        <div className="iconContainer">
            {props.spicy ? <img src={spIcon} className="menuIcons"/> : <div></div>}
        </div>
    );

    return (
        <div className="MenuTypeComponents">
            <img src={require("../../Images/Menu/" + props.menuSrc)} className="MTCImage" alt={props.alt} />
            {spAndVegIcon}
            <h2 className="MTCPrice">
                {props.price}
            </h2>
            <h2 className="MTCHeading">
                {props.dishName}
            </h2>
        </div>
    );
};

export default MenuItemComponents;