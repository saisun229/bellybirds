import React, {useState} from "react";
import Header from "../Header";
import './style.css';
import { TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
import { axiosApiCall } from "../../utility";
import { LOGIN_USER_ENDPOINT } from "../../endpoints";


export default function Register() {
    const buttonclasses = useButtonStyles();
    const textFieldClasses = useTextFieldStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function loginUser(): Promise<void> {
        try {
            const res: any = await axiosApiCall(LOGIN_USER_ENDPOINT, {email, password});
            // const res: any = axiosApiCall(LOGIN_USER_ENDPOINT, {email, password});
            //TODO: bad practice --> refresh tokens
            window.localStorage.setItem("token", res.data);
            history.push("/chat");
        } catch(e) {
            alert(e);
        }
    }

  return (
    <div className="login">
    <Header></Header>
    <div className="login__form">
        <h2>Login</h2>
        <form className={textFieldClasses.root} noValidate autoComplete="off">
           <TextField id="filled-basic" placeholder="you@awesome.com" label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  variant="outlined" />
           <TextField id="filled-basic" placeholder="p@$$w0rd" label="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
           <Button fullWidth className={buttonclasses.secondary}  onClick={loginUser} color="default" >Login</Button>
       </form>
    </div>
 </div>
  )
}







// import React, {useState} from "react";
// import Header from "../Header";
// import './style.css';
// import { TextField } from '@material-ui/core';
// import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import { useButtonStyles, useTextFieldStyles } from "../../RootStyles";
// import axios from "axios";


// export default function Register() {
//     const buttonclasses = useButtonStyles();
//     const textFieldClasses = useTextFieldStyles();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function loginUser(): Promise<void> {
//         const requestObj = JSON.stringify({
//             email, password
//         })
//         const config = {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           };

//         try {
//             const res = await axios.post("http://localhost:1337/api/login", requestObj, config);
        
            

//             alert("Your login is successful");
//         } catch(e) {
//             alert(e);
//         }
//     }

//   return (
//     <div className="login">
//     <Header></Header>
//     <div className="login__form">
//         <h2>Login</h2>
//         <form className={textFieldClasses.root} noValidate autoComplete="off">
//            <TextField id="filled-basic" placeholder="you@awesome.com" label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  variant="outlined" />
//            <TextField id="filled-basic" placeholder="p@$$w0rd" label="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
//            <Button fullWidth className={buttonclasses.secondary}  onClick={loginUser} color="default" >Login</Button>
//        </form>
//     </div>
//  </div>
//   )
// }