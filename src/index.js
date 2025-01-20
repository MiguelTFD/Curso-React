//1 import de las librerias
import React from "react";
import ReactDOM from 'react-dom/client';

//Obtenermos la referencia al div con el id 'root'
const elementRoot = document.getElementById('root');

//Decirle a React que posea control total sobre este elemento
const root = ReactDOM.createRoot(elementRoot);

//Ahora Creamos el componente
/*const App = ()=>{

    //Use variables to assignment props
    const maxSize = 10;
    const inputType = "number";
    
    return <input type={inputType} min={5} max={maxSize} />
  //  return <input type="number" min={5} max={10} />
}
*/

//Componente con props
function App() {
    return <input style={{border:'1px solid red'}}/>
}

//Mostrar el componente en la pantalla
root.render(<App/>);
