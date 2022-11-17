import { Link } from "react-router-dom";
import Text from "../../Elementes/Text/Text";


const CategoryNavLink = ({id, link, text, backgroundColor, img}) => {
    return (
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
    );
}

export default CategoryNavLink;