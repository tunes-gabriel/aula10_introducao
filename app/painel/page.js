'use client'

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./painel.css"


function Painel() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [showError, setShowError] = useState(false)
    const [showLogin, setShowLogin] = useState(false)



    const fail = () => toast.error("Algo está errado...");
    const login = () => toast.success("Você logou com sucesso");

    function validate() {
        if (user == "Homem" & pass == "Macho") {
            login();
            setShowError(false);
            setShowLogin(true);

        } else if(user == "" & pass == ""){
            setShowError(false);
            setShowLogin(false);
        }else {
            fail();
            setShowError(true);
            setShowLogin(false);
        }
    }


    return (
        <div>
            <h1>Paniel administrativo</h1>

            <label>
                Digite o usuário:
                <input name="user" onChange={(e) => setUser(e.target.value)} />
            </label>

            <br />

            <label>
                Digite a senha:
                <input name="pass" type="password" onChange={(e) => setPass(e.target.value)} />
            </label>

            <br />

            <button onClick={() => validate()}>Entrar</button>

            {/* Operador TERNÁRIO */}
            {
                showError == true ?
                    <div class="erro">
                        <p>Usuário ou senhas inconrretos...</p>
                    </div>
                :
                <div></div>
            }
            {
                showLogin == true ?
                    <div class="login">
                        <p>Logado com sucesso!</p>
                    </div>
                :
                <div></div>
            }

            <ToastContainer />


        </div>
    );
}

export default Painel;