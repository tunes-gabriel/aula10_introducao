'use client'

import { useState } from "react"
import { useFormState } from "react-dom"
import { ToastContainer, toast } from 'react-toastify';

export default function Contato(){
    
    const[name, setName ] =  useState("")
    const[message, setMessage] = useState("")
    //Notificações de envio
    const error = () => toast.error("Preencha todos os campos...");
    const success = () => toast.success("Mensagem enviada com sucesso!");

        function sendMessage(e){
        e.preventDefault()
        if(name == "" || message == ""){
            error()
        }else{
            success()
        }
    }
    //Página
    return(
    <div>
        <h1>Página de contato</h1>
        <p>Entre em contato conosco.</p>
        <br/>

        <hr/>

        <form onSubmit={(e)=>sendMessage(e)} >
            <label>
                Digite seu nome:
                <input onChange={(e)=> setName(e.target.value)}/>
            </label>
            <br/>
            <label>
                Digite sua mensagem:
                <input onChange={(e)=> setMessage(e.target.value)}/>
            </label>
            <br/>
            <button>Enviar</button>

            <ToastContainer />

        </form>
    </div>)
}