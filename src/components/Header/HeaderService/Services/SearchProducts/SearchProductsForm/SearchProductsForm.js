import { useForm } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Svg from "../../../../../Elementes/Svg/Svg";

const SearchProductsForm = () => {
    const {t} = useLanguage();
    const {handleSubmit, register} = useForm({ mode: 'onChange', reValidateMode: 'onChange' });

    const onSearchProductSubmit = data => {
        console.log(data.product);
    }

    return (
        <>
            <form className="search__form" onSubmit={handleSubmit(onSearchProductSubmit)}>
                <button className="search__submit-btn">
                    <Svg className="loop-icon" symbol="loop" />
                </button>

                <div className="search__field">
                    <input  {...register('product', {required: true})}
                            placeholder={t("Search product")} 
                            type="text" />
                </div>
            </form>
        </>
    );
}

export default SearchProductsForm;