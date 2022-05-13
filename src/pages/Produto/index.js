import  { useParams} from 'react-router-dom';

//Utilizando o useParams conseguimos extrair um parametro da url, nesse caso conseguimos pegar o id do produto

function Produto() 
{

    const { id } = useParams();

   return(
       <div>
           <h2>PAGINA DETALHE DO PRODUTO</h2>
           <span>MEU PRODUTO É: {id}</span>
       </div>
   )
}


export default Produto;