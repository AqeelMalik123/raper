import {Routes,Route,link} from "react-router-dom";
import Login from "../component/login/Login";
import Signup from "../component/Signup/Signup";
import Home from "../page/Home/Home";

const Apps=()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Signup/>}/>
            <Route exact path="login" element={<Login/>}/>
            <Route exact path="home" element={<Home/>}/>
        </Routes>
    )
}
export default Apps;