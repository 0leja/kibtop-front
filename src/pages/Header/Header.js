import HeaderService from '../../components/Header/HeaderService/HeaderService';
import HeaderSettings from '../../components/Header/HeaderSettings/HeaderSettings';
import './header.css'

const Header = () => {
    return (
        <>
            <header className="header">
                <HeaderSettings />
                <HeaderService />
            </header>
        </>
    );
}

export default Header;