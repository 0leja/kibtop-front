import CurrencySelectOption from "./CurrencySelectOption/CurrencySelectOption";

const CurrencySelect = ({closeCurrencySelect, onChangeCurrency, currency}) => {
    return (
        <>
           <div className="modal-select" onClick={closeCurrencySelect}>
                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '€', text: 'EUR'}} />

                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '$', text: 'USD'}} />

                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '₽', text: 'RUB'}} />
           </div>
           <div className="screen-dimmer" onClick={closeCurrencySelect} />
        </>
    );
}

export default CurrencySelect;