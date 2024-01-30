import "./Menu.css";
import Header from "../../components/Header";
import Cutlery from "../../Images/Logos/cutlery.png";
import MenuTypeList from "./MenuList/MenuTypeList";
import MenuTypeComponents from "./MenuTypeComponents";
import DessertTypeList from "./MenuList/DessertTypeList";
import DrinkTypeList from "./MenuList/DrinkTypeList";
import MidamPlatter from "./MidamPlatter";
import HanSang from "./HanSang";
import Footer from "../../components/Footer";

const Menu = () => {

    const MenuListings = MenuTypeList.map((types) =>
    (
        <MenuTypeComponents
            menuType={types[0]}
            data={types[1]}
            bool={types[2]}
            text={types[3]}
            key={types[0]}
        />
    ));

    const DessertListings = DessertTypeList.map((types) =>
    (
        <MenuTypeComponents
            menuType={types[0]}
            data={types[1]}
            bool={types[2]}
            text={types[3]}
            key={types[0]}
        />
    ));

    const DrinkListings = DrinkTypeList.map((types) => (
        <MenuTypeComponents
            menuType={types[0]}
            data={types[1]}
            bool={types[2]}
            text={types[3]}
            key={types[0]}
        />
    ));

    return (
        <section className="Menu">
            <Header />
            <main>
                <section className="MainMenuContainer">
                    <div className="MenuHeadingContainer">
                        <h1 className="MenuHeading">
                            MENU
                        </h1>
                        <img className="MenuHeadingIcon" src={Cutlery} alt="Cutlery icon for menu heading" />
                    </div>
                    <MidamPlatter />
                    <HanSang/>
                    {MenuListings}
                </section>
                <section className="DessertMenuContainer">
                    <div className="MenuHeadingContainer">
                        <h1 className="MenuHeading">
                            DESSERT
                        </h1>
                    </div>
                    {DessertListings}
                </section>
                <section className="DessertMenuContainer">
                    <div className="MenuHeadingContainer">
                        <h1 className="MenuHeading">
                            DRINKS
                        </h1>
                    </div>
                    {DrinkListings}
                </section>
            </main>
            <Footer/>
        </section>
    );
};

export default Menu;