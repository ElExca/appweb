import Titulo from '../assets/atoms/Titutlo';
import'../assets/style/layout.css'
import Datos from '../components/Datos';
import SingUp from "../components/SignUp";
function Layout() {
    return ( 
   <div className="contenedorP">
        <Titulo></Titulo>
       <SingUp></SingUp>
      <Datos></Datos>
      
   </div>
       
     );
}

export default Layout;