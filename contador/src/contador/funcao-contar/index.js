import { useStete } from "react";

export default function Primeiro(){
    const [qtd, setQtd]= useStete(0);

   function contar () {
       setQtd(qtd + 1);
   }
   function resertar (x) {
       setQtd(x);
   }
   return (
       <div className= "container">
           <div className= "titulo"> Contador </div> 
            <div> {qtd} </div> 
            <button onClick = {contar}> Contar </button>

            <Segundo onReset = {resertar} qtd={qtd}/>

       </div>
   )
}

   function Segundo (props) {
       function resertar() {
           props.onReset(100);
       }
    
    return (
        <div className= "container">
            <button onClick= {resertar}> Resertar </button>
            <div> {props. qtd} </div>
        </div>
    )
}

