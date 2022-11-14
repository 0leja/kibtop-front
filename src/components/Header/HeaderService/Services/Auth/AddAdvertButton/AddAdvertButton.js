import { Link } from "react-router-dom";
import Svg from "../../../../../Elementes/Svg/Svg";
import Text from "../../../../../Elementes/Text/Text";

const AddAdvertButton = ({isAuthed}) => {
    return (
        <>
            <Link to={isAuthed ? '/add_advert' : '/registration'} className="btn settings-link-text btn--header">
                <Svg className="plus-icon" symbol="plus" />
                <Text content="Add advert" />
            </Link>
        </>
    );
}

export default AddAdvertButton;