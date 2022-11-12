import { useDispatch, useSelector } from "react-redux";
import { setOpenCurrencySelect } from "../../../../../store/slices/CurrencySlice";
import { setOpenLanguageSelect } from "../../../../../store/slices/LanguageSlice";
import LanguageChoice from "./LanguageChoice";

const LanguageChoiceContainer = () => {
    const isOpen = useSelector(state => state.language.isOpen);
    const dispatch = useDispatch();

    const openLanguageSelect = () => {
        dispatch(setOpenCurrencySelect({bool: false}))
        dispatch(setOpenLanguageSelect({bool: true}))
    }

    return <LanguageChoice {...{isOpen, openLanguageSelect}} />
}

export default LanguageChoiceContainer;