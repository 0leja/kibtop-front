import { Link } from "react-router-dom";
import Svg from "../../Elementes/Svg/Svg";
import Text from "../../Elementes/Text/Text";

import keys from "./img/keys.png"
import car from "./img/car.png"
import bag from "./img/bag.png"
import paint from "./img/paint.png"
import carriage from "./img/carriage.png"
import phone from "./img/phone.png"
import armchair from "./img/armchair.png"
import dress from "./img/dress.png"


const CategoriesNav = () => {
    const NavLinks = [
        {id: 0,link: '', text: 'Real estate', backgroundColor: '#4B76F6', img: keys},
        {id: 1,link: '', text: 'Auto', backgroundColor: '#6DE2DB', img: car},
        {id: 2,link: '', text: 'Job', backgroundColor: '#FFF6DC', img: bag},
        {id: 3,link: '', text: 'Services', backgroundColor: '#CDDDFF', img: paint},
        {id: 4,link: '', text: 'For kids', backgroundColor: '#F7D055', img: carriage},
        {id: 5,link: '', text: 'Electronics', backgroundColor: '#F8D8CB', img: phone},
        {id: 6,link: '', text: 'House and garden', backgroundColor: '#D2F7F5', img: armchair},
        {id: 7,link: '', text: 'Fashion and style', backgroundColor: '#D1DEFC', img: dress},

    ]


    return (
        <>
            <nav className="categories-nav">
                <div className="container container--categories">
                    <div className="categories-nav__item">
                        <Link className="all-link">
                            <Svg symbol="all_categories" />
                            <p><Text content="All categories" /></p>
                        </Link>
                    </div>
                    <div className="categories-nav__item">
                        <span className="categories-nav__line"></span>
                    </div>
                    <ul className="categories-nav__list">
                        {
                            NavLinks.map(({id, link, text, backgroundColor, img}) => (
                                <>
                                    <li className="categories-nav__category" key={id}>
                                        <Link to={link} className="categories-nav__link">
                                            <div className="catregory-icon" style={{backgroundColor}}>
                                                <img src={img} alt={text} />
                                            </div>

                                            <p className="button-text"><Text content={text} /></p>
                                        </Link>
                                    </li>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default CategoriesNav;