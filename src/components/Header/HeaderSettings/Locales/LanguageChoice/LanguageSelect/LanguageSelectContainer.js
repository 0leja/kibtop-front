import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import { setLanguage, setOpenLanguageSelect } from "../../../../../../store/slices/LanguageSlice";
import LanguageSelect from "./LanguageSelect";

const LanguageSelectContainer = () => {
    const language = useSelector(state => state.language.language);
    const dispatch = useDispatch();
    const {changeLanguage} = useLanguage()

    const onChangeLanguage = e => {
        const language = e.currentTarget.value
        changeLanguage(language);
        dispatch(setLanguage({language}))
    }

    const closeLanguageSelect = () => {
        dispatch(setOpenLanguageSelect({bool: false}))
    }


    return <LanguageSelect {...{language, onChangeLanguage, closeLanguageSelect}} />
}

export default LanguageSelectContainer;