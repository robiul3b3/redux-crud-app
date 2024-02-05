import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Index;