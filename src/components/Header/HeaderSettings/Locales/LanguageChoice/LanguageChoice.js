import Svg from "../../../../Elementes/Svg/Svg";
import LanguageSelectContainer from "./LanguageSelect/LanguageSelectContainer";
import LanguageTextContainer from "./LanguageText/LanguageTextContainer";

const LanguageChoice = ({isOpen, openLanguageSelect}) => {
    return (
        <>
            <div className={"locales__item locales__item--lang" + 
                (isOpen ? ' locales__item--opened' : '')}>
                {
                    isOpen && <LanguageSelectContainer />
                }
                
                <div className="locales__wrapper" onClick={openLanguageSelect}>
                    <Svg className={'locales__icon'} symbol="planet" />
                    <LanguageTextContainer />
                </div>
            </div>
        </>
    );
}

export default LanguageChoice;