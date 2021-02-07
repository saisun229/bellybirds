
import {createStore} from "redux";
import jwt_decode from "jwt-decode";

const token: any = localStorage.getItem("token");
let decoded = {
    email: undefined,
    username: undefined
}
if(token) {
     decoded = jwt_decode(token);
}



const intitalState = {
    user: {
        email: decoded.email ? decoded.email : "",
        uname: decoded.username ? decoded.username : ""
    }
}


const reducer: any = (state: any = intitalState, action: any) => {
     const newState:any = state;
     if(action.type === "getUser") {
         newState.user = action.user
     }
     return newState;
}

export const store = createStore(reducer);

