
import Logo from "./Logo/Logo";
import Services from "./Services/Services";

const HeaderService = () => {
    return (
        <div className="header__service">
            <div className="container">
                <Logo />
                <Services />
            </div>
        </div>
    );
}

export default HeaderService;