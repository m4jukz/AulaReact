import { useState } from "react";
export default function Exercicio1() {
    const[numero,setNumero] = useState(0);
    const[resultado, setResultado] = useState();
    function calcular()
    {
        let quadrado = Number(numero)* Number(numero);
        let cubo = quadrado * Number (numero);
        setResultado("O quadrado é " + quadrado + ", o cubo é " + cubo);
    }
    return (
      <div>
       <h1>Exercicio 1</h1> 
       <div className="conteudo">
       <form>
    <p>
      Digite um número qualquer:<br/>
      <input type="text" value= {numero}
      onChange={(e) => setNumero(e.target.value)} />
    </p>

    <p>
        <input type="button" value="Exercicio1"
        onClick={calcular}/>
    </p>
    </form>
    <p>
        <b>Resultado</b> <br/>
        O número digitado foi {numero} <br/>
        Resultado: {resultado}
    
<br/>
        <a href="/">Voltar</a>
    </p>
        </div>
        </div>
        
    )
        }