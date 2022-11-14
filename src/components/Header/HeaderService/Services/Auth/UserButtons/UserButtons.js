import { Link } from "react-router-dom";
import Svg from "../../../../../Elementes/Svg/Svg";

const UserButtons = ({isAuthed}) => {
    return (
        <>
            {
                isAuthed && (
                    <div className="user-btns">
                        <Link to={'/user/favourites'} className="user-btns__item user-btns__item--authed">
                            <Svg symbol="heart" />
                        </Link>
                        <Link to={'/user/messenger'} className="user-btns__item user-btns__item--authed">
                            <Svg symbol="letter" />
                        </Link>
                        <Link to={'/user'} className="user-btns__item user-btns__item--authed">
                            <Svg symbol="user" />
                        </Link>
                    </div>
                )
            }

            {
                !isAuthed && (
                    <div className="user-btns">
                        <Link to={'/registration'} className="user-btns__item">
                            <Svg symbol="heart" />
                        </Link>
                        <Link to={'/registration'} className="user-btns__item">
                            <Svg symbol="letter" />
                        </Link>
                        <Link to={'/registration'} className="user-btns__item">
                            <Svg symbol="user" />
                        </Link>
                    </div>
                )
            }
        </>
    );
}

export default UserButtons;