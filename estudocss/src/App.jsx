import "./App.css";
export default function App()
{
    const centralizado = {textAlign :"center"};
    const destaque = {
        textAlign : "center",
        border : "2px solid magenta",
        color : "pink",
        padding : "10px"
    };
    return (
        <div>
            <h1>Estudo CSS</h1>
        <p>
O CSS (<i>Cacasding Style Sheets</i>) é uma linguagem ultilizada para estilizar <b>página web</b>, e sera utilizada dentro ou fora do HTML.</p>
        <p>Na aula de hoje, vamos estudar e entender como aplicar estilos CSS em componentes do React.</p>
        <p>Ultilizando o CSS podemos definir:</p>
        <ul>
            <li>Definir cor para o texto, para o fundo do elemento</li>
            <li>Fontes e tamanhos de letras</li>
            <li>Posicionamento dos elementos na página</li>
            <li>Espaçamento, bordas, sombras, etc...</li>
            <li>Efeitos visuais e animações.</li>
        </ul>
<p>O HTML o que deve aparecer na página, enquanto o CSS diz como deve aparecer.</p>
<p className="centro">
<b>Nascer, Viver e no Santos morrer é um orgulho que nem todos porem ter.</b></p>
<p style={centralizado}>

<img src="santos.jpg" alt ="" /></p>
<h3 style={destaque}>Fim da aula</h3>
        </div>
    );
}