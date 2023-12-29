

const MenuItemComponents = (props) => {
    return (
        <div className="MenuTypeComponents">
            <img src={props.data[0]} className="MTCImage" alt={props.data[1]} />
            <h2 className="MTCPrice">
                {props.data[3]}
            </h2>
            <h2 className="MTCTitle">
                {props.data[2]}
            </h2>
        </div>
    );
};

export default MenuItemComponents;