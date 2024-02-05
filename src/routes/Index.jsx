import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Navbar from "../components/Navbar/Navbar";

const Index = () => {
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/show-books" element={<Homepage/>}/>
                    <Route path="/add-book" element={<Homepage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Index;