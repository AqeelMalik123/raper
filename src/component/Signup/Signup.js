import MenuAppBar from "../../container/AppBar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from "../../container/Card";
import BasicTextFields from "../../container/input/InputText";
import "../login/css/style.css"
import BasicButtons from "../../container/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { textAlign } from "@mui/system";
import firebase from "../../config/Firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Signup=()=>{
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const rigester=()=>{
        console.log(fullName,email,password);
        // createUserWithEmailAndPassword(email,password)
        // .then((res)=>{
        //     console.log("agaya",res)
        // }).catch((err)=>{
        //     console.log("masla ahi ",err)
        // })
        // console.log(email);
        // console.log(password)
        const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


    }

    return(
        <div>
            <MenuAppBar title="Signup"/>
            <Container>
            <Grid container>
        
        
            <Grid item xs={12} lg={6} md={12}>
    <MyCard>
        <h1>Signup</h1>
     
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setFullName(e.target.value)} value={fullName} label="FullName" type="text"/>

         </div>
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email"/>

         </div>
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setPassword(e.target.value)} value={password} label="Password" type="password"/>
         </div>
        <div className="mt-20">

        <BasicButtons onClick={rigester} title="Signup"/>
        </div>
                 <div className="mt-20" style={{textAlign:"center" }}>
                     <Link to="/login">login</Link>
                 </div>
    </MyCard>
  </Grid>
    
    
                </Grid>
            </Container>
        </div>
    )
}
export default Signup;