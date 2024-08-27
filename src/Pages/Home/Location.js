import "./Location.css";
import LocationPin from "../../Images/Logos/icon _location pin_.png";

const Location = () => {

    return (
        <section className="locationSection">
            <h2 className="locationHeading">
                LOCATION
            </h2>
            <div className="contactDivider">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6311953013246!2d-123.1790314231357!3d49.264435872045624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673ab27a2ab3b%3A0x65cbefa931086dd5!2s3211%20W%20Broadway%2C%20Vancouver%2C%20BC%20V6K%202H5!5e0!3m2!1sen!2sca!4v1724464797589!5m2!1sen!2sca"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map For Midam Cafe" className="locationMap">
                </iframe>
                <aside className="contactInfo">
                    <h2 className="contactInfoHeading">
                        CONTACT US
                    </h2>
                    <h3 className="contactInfoList">3211 W Broadway, Vancouver, BC</h3>
                    <h3 className="contactInfoList">V6K 2H5</h3>
                    <h3 className="contactInfoList">(604) 714-0233</h3>
                    <h3 className="contactInfoList">midamvancouver@gmail.com</h3>
                </aside>
            </div>
        </section>
    );
};

export default Location;