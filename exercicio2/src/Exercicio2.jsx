export default function Exercicio2 ({temperatura})
{
    let resultado= (number(temperatura)-32)*5/9;
    return(
        <div>
            <p> A temperatura em Farenheit {temperatura}°F é {resultado}°C </p>
        </div>
    );
}
