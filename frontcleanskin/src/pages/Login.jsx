import "../css/Global.css";
import LoginForm from "../Components/LoginForm.jsx";

const login = () =>{
    return(
        <main className="CMain">
            <div className="Tittle">
                <h1 className="TittleAnimation">LOGIN</h1>
            </div>
            <LoginForm />
        </main>
    )
}

export default login;