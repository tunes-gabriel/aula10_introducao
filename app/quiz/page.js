'use client'

import { useState } from "react";
import "./quiz.css";

function Quiz() {

    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [p3, setP3] = useState(0)
    const [p4, setP4] = useState(0)
    const [total, setTotal] = useState(0)

    const[select, setSelect] = useState (["","","",""])
    
    function checkFilm(e) {
        if(e.target.value  == "Troll face" || "troll face" || "trollface" || "Trollface" || "Troll Face" ){
            setP4 (1)
        }else{
            setP4 (0)
        }

    }


    return (

        <div>
            <h1>Quiz Conradito</h1>
            <p>Assina-le a opção correta!</p>

            <br />
            <hr />
            <br />

            <h2>Qual a cor do cavalo branco de napoleão?</h2>
            <br />
            <label><input name="p1" type="radio" onChange={() => setP1(0)} />Preto</label>
            <br />
            <label><input name="p1" type="radio" onChange={() => setP1(0)} />Azul</label>
            <br />
            <label><input name="p1" type="radio" onChange={() => setP1(0)} />Branco</label>
            <br />
            <label><input name="p1" type="radio" onChange={() => setP1(1)} />Transparente</label>

            <hr />
            <br />

            <h2>Quem matou Austriaco bigodinho?</h2>
            <br />
            <label><input name="p2" type="radio" onChange={() => setP2(0)} />Um Judeu</label>
            <br />
            <label><input name="p2" type="radio" onChange={() => setP2(1)} />Um alemão</label>
            <br />
            <label><input name="p2" type="radio" onChange={() => setP2(0)} />Um americano</label>
            <br />
            <label><input name="p2" type="radio" onChange={() => setP2(0)} />Um comunista</label>

            <hr />
            <br />

            <h2>Quanto é 77+33?</h2>
            <br />
            <label className={select[0]} name="p3" type="radio" onClick={() => {setP3(0); setSelect(["select","","",""])}}>100</label>
            <br />
            <label className={select[1]} name="p3" type="radio" onClick={() => {setP3(0); setSelect(["","select","",""])}}>111</label>
            <br />
            <label className={select[2]} name="p3" type="radio" onClick={() => {setP3(1); setSelect(["","","select",""])}}>110</label>
            <br />
            <label className={select[3]} name="p3" type="radio" onClick={() => {setP3(0); setSelect(["","","","select"])}}>101</label>

            <hr />
            <br />

            <h2>Qual o melhor meme do mundo?</h2>
            <br />
            <label><input name="p4" onChange={(e)=> checkFilm (e)} placeholder="Digite sua resposta..." /></label>


            <hr />
            <br />


            <button onClick={() => setTotal(p1+p2+p3+p4)}>Enviar resposta</button>
            <br />
            <p>Total de pontos: {total}</p>




        </div>
    );
}

export default Quiz;