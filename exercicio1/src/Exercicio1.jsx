export default function Exercicio1 ({n1})
{
    let quadrado= number (n1)*number(n1)
    let cubo = number (n1)*number(n1)*number(n1)
    return(
        <div>
            <p> O quadrado do número {n1} é {quadrado} </p>
            
            <p>o cubo do número {n1} é {cubo} </p>

        </div>
    );
}