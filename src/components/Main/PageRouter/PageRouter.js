import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import RegisterPage from "../../../pages/RegisterPage/RegisterPage";

const PageRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/registration' element={<RegisterPage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    );
}

export default PageRouter;