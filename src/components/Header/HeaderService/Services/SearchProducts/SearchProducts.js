import FilterButtonContainer from "./FilterButton/FilterButtonContainer";
import SearchProductsFormContainer from "./SearchProductsForm/SearchProductsFormContainer";

const SearchProducts = () => {
    return (
        <>
            <div className="search">
                <SearchProductsFormContainer />

                <FilterButtonContainer />
            </div>
        </>
    );
}

export default SearchProducts;