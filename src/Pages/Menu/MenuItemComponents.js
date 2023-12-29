
const MenuItemComponents = (props) => {
    return (
        <div className="MenuTypeComponents">
            <img src={require("../../Images/Menu/" + props.menuSrc)} className="MTCImage" alt={props.alt} />
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