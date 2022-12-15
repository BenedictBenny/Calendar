import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/AddorEdit";
import HomePage from "./components/HomePage";
function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
            <Route path="/AddorEdit" element={<Add/>}></Route>
        </Routes>
    </BrowserRouter>)
}
export default App;