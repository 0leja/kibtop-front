import { useTranslation } from "react-i18next";

export const useLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = language => {
        i18n.changeLanguage(language);
    };

    return {t, changeLanguage}
}