import { Link } from "react-router-dom";

const LogoIcon = () => {
    return (
        <>
            <Link to='/' className="logo-icon">kib<span className="green">t</span>
                                            <span className="yellow">o</span>
                                            <span className="blue">p</span>
            </Link>
        </>
    );
}

export default LogoIcon;