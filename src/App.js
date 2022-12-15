import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Add from "./components/AddorEdit";
import HomePage from "./components/HomePage";
function App(){
    return(
    <BrowserRouter>
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path="/AddorEdit" element={<Add/>}></Route>
            </Routes>
        </HashRouter>
    </BrowserRouter>)
}
export default App;