import { useCurrency } from "../../../../../../locales/hooks/useCurrency";
import CurrencyText from "./CurrencyText";

const CurrencyTextContainer = () => {
    const currencies = {
        "$": 'USD',
        "€": 'EUR',
        "₽": 'RUB'
    }

    const {currency} = useCurrency();

    return <CurrencyText text={currencies[currency]} />
}

export default CurrencyTextContainer;