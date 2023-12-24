import "./Menu.css";
import Header from "../../SharedComponents/Header";
import Cutlery from "../../Images/Logos/cutlery.png";

const Menu = () => {

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
            </main>
        </section>
    );
};

export default Menu;