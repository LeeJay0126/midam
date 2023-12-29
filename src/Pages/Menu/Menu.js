import "./Menu.css";
import Header from "../../SharedComponents/Header";
import Cutlery from "../../Images/Logos/cutlery.png";
import MenuTypeList from "./MenuList/MenuTypeList";
import MenuTypeComponents from "./MenuTypeComponents";

const Menu = () => {

    const MenuListings = MenuTypeList.map((types) =>
    (
        <MenuTypeComponents
            menuType={types[0]}
            data={types[1]}
            key={types[0]}
        />
    ));

    return (
        <section className="Menu">
            <Header />
            <main>
                <div className="MenuHeadingContainer">
                    <h1 className="MenuHeading">
                        MENU
                    </h1>
                    <img className="MenuHeadingIcon" src={Cutlery} alt="Cutlery icon for menu heading" />
                </div>
                {MenuListings}
            </main>
        </section>
    );
};

export default Menu;