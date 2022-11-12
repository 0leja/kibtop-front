import { Link } from "react-router-dom";
import Svg from "../../../Elementes/Svg/Svg";
import Text from "../../../Elementes/Text/Text";

const SupportNav = () => {

    return (
        <>
            <nav className="support-nav">
                <div className="support-nav__item">
                    <Svg className="support-nav__icon" symbol="quest" />

                    <Link to='support' className="settings-link-text"><Text content="Сontact support" /></Link>
                </div>

                <div className="support-nav__item">
                    <div className="support-nav__dot"></div>
                </div>

                <div className="support-nav__item">
                    <Link to='support' className="settings-link-text"><Text content="Service rules" /></Link>
                </div>
            </nav>
        </>
    );
}

export default SupportNav;