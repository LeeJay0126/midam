import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="tempHomeContainer">
            <div className="tempHome">
                <Link to={"/broadway/menu"}>Menu</Link>
            </div>
        </div>
    );
};

export default Home;