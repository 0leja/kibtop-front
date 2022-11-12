import LanguageSelectOption from "./LanguageSelectOption/LanguageSelectOption";

const LanguageSelect = ({closeLanguageSelect, onChangeLanguage, language}) => {
    return (
        <>
           <div className="modal-select" onClick={closeLanguageSelect}>
                <LanguageSelectOption {...{onChangeLanguage, language, value: 'en', text: 'English'}} />

                <LanguageSelectOption {...{onChangeLanguage, language, value: 'ru', text: 'Russian'}} />

                <LanguageSelectOption {...{onChangeLanguage, language, value: 'tr', text: 'Turkish'}} />
           </div>
           <div className="screen-dimmer" onClick={closeLanguageSelect}></div>
        </>
    );
}

export default LanguageSelect;