import { useTranslation } from "react-i18next";

export const useLang = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = e => {
        const language = e.currentTarget.value
        i18n.changeLanguage(language);
    };

    return {t, changeLanguage}
}