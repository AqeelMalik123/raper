import {Routes,Route,link} from "react-router-dom";
import Login from "../component/login/Login";
import Signup from "../component/Signup/Signup";

const Apps=()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Signup/>}/>
            <Route exact path="login" element={<Login/>}/>
        </Routes>
    )
}
export default Apps;