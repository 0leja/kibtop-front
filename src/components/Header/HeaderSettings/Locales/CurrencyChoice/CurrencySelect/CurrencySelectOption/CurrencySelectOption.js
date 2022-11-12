import Svg from "../../../../../../Elementes/Svg/Svg";

const CurrencySelectOption = ({onChangeCurrency, currency, value, text}) => {
    const isChecked = currency === value;

    return (
        <>
            <button value={value} onClick={onChangeCurrency} className={"modal-select__option" +
                        (isChecked ? ' modal-select__option--checked' : '')}>

                    <p className="button-text">{text}</p>

                    {
                        isChecked && <Svg className="modal-select__icon" symbol="check" />
                    }
            </button>
        </>
        
    );
}

export default CurrencySelectOption;