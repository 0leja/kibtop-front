import { Link } from "react-router-dom";
import Text from "../../../Elementes/Text/Text";
import LogoIcon from "./LogoIcon";

const Logo = () => {
    return (
        <>
            <div className="logo-title">
                <div className="logo-title__item">
                    <LogoIcon />
                </div>

                <div className="logo-title__item">
                    <div className="line"></div>
                </div>

                <div className="logo-title__item">
                    <Link to="description" className="desc-link-text"><Text content="Brief description of the service" /></Link>
                </div>
            </div>
        </>
    );
}

export default Logo;