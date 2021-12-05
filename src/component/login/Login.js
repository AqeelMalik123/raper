import MenuAppBar from "../../container/AppBar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from "../../container/Card";
import BasicTextFields from "../../container/input/InputText";
import "./css/style.css"
import BasicButtons from "../../container/button";
import { Link } from "react-router-dom";




const Login=()=>{
    const userLogin=()=>{
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    return(
        <div>
            <MenuAppBar title="login"/>
            <Container>
            <Grid container>
        
        
            <Grid item xs={12} lg={6} md={12}>
    <MyCard>
        <h1>Login</h1>
     
         <div className="mt-20">
             <BasicTextFields label="Email" type="email"/>

         </div>
         <div className="mt-20">
             <BasicTextFields label="Password" type="password"/>
         </div>
        <div className="mt-20">

        <BasicButtons title="login"/>
        </div>
                 <div className="mt-20" style={{textAlign:"center"}}>
                     <Link to="/">Register Now</Link>
                 </div>
    </MyCard>
  </Grid>
    
    
                </Grid>
            </Container>
        </div>
    )
}
export default Login;