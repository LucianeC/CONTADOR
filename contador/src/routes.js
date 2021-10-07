import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contador from './contador/funcao-contar/index';
export default function Routes (){ 
    return (
        <BrowserRouter>
            <Switch>
                <Route path= '/Contador' exact = {true} componet = {Contador}/>
            </Switch>
        </BrowserRouter>
       
    )
}