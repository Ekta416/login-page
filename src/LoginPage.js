
import React,{useState} from "react";
import ReactDOM  from "react-dom/client";
import HomePage from "./HomePage";
import ErrorPage from "./Error";

function LoginPage(){
    const[uid,setUId]=useState();
    const[upass,setUPass]=useState();

    const UIdText=(evt)=>{
        setUId(evt.target.value);
    }
    const UPassText=(evt)=>{
        setUPass(evt.target.value);
    }
    const loginButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"))
        if(uid==="admin" && upass==="admin123"){
            root.render(<HomePage></HomePage>)
        }else{
            root.render(<ErrorPage></ErrorPage>)
        }
    }
    return(
        <div>
            <center>
                <table border="1">
                    <tr>
                        <td>User Id</td>
                        <td><input type="text" placeholder="User Id" onChange={UIdText}></input></td>
                    </tr>
                    <tr>
                        <td> Password</td>
                        <td><input type="text" placeholder="Password" onChange={UPassText}></input></td>

                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" onClick={loginButton}>login</button></td>
                    </tr>
                </table>
            </center>
        </div>
    )
}
export default LoginPage;