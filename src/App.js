import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";
import HomePage from "./HomePage";
function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
            <Route path="/Add" element={<Add/>}></Route>
        </Routes>
    </BrowserRouter>)
}
export default App;