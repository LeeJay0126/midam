
const MenuTypeComponents = (props) => {

    return (
       <article className="MenuItemList">
            <h2 className="MenuItemType">
                {props.data[0]}
            </h2>
       </article> 
    );
};

export default MenuTypeComponents;