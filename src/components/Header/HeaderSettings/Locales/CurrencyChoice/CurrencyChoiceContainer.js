import { useDispatch, useSelector } from "react-redux";
import { setOpenCurrencySelect } from "../../../../../store/slices/CurrencySlice";
import { setOpenLanguageSelect } from "../../../../../store/slices/LanguageSlice";
import CurrencyChoice from "./CurrencyChoice";

const CurrencyChoiceContainer = () => {
    const isOpen = useSelector(state => state.currency.isOpen)
    const dispatch = useDispatch();

    const openCurrencySelect = () => {
        dispatch(setOpenCurrencySelect({bool: true}))
        dispatch(setOpenLanguageSelect({bool: false}))
    }
    

    return <CurrencyChoice {...{isOpen, openCurrencySelect}} />
}

export default CurrencyChoiceContainer;