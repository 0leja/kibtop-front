import Svg from "../../../../../../Elementes/Svg/Svg";
import Text from "../../../../../../Elementes/Text/Text";

const LanguageSelectOption = ({onChangeLanguage, language, value, text}) => {
    const isChecked = language === value;

    return (
        <>
            <button value={value} onClick={onChangeLanguage} className={"modal-select__option" +
                    (isChecked ? ' modal-select__option--checked' : '')}>

                <p className="button-text"><Text content={text} /></p>

                {
                    isChecked && <Svg className="modal-select__icon" symbol="check" />
                }
            </button>
        </>
    );
}

export default LanguageSelectOption;