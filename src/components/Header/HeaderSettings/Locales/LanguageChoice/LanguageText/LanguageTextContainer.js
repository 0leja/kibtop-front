import { useSelector } from "react-redux";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import LanguageText from "./LanguageText";

const LanguageTextContainer = () => {
    const {t} = useLanguage();
    const languages = {
        'en': t('English'),
        'ru': t('Russian'),
        'tr': t('Turkish'),
    }

    const language = useSelector(state => state.language.language);

    return <LanguageText text={languages[language]} />
}

export default LanguageTextContainer;