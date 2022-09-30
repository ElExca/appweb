import '../assets/style/datos.css'

function Datos() {
    return ( 
        <div className='contenedor'>

        <input type="text" className="Nombre" placeholder="Nombre"/>
        <input type="text" className="Apellido" placeholder="Apellido"/>
        <input type="text" className="Email"placeholder="Email"/>
        <input type="text" className="NombreU"placeholder="Nombre de usuario"/>
        <input type="text" className="Contraseña" placeholder="Contraseña"/>
        <input type="text" className="edad" placeholder="Edad"/>
        <input type="text" className="nacionalida" placeholder="Nacionalidad"/>
        <input type="text" className="FechaN" placeholder="Fecha de nacimiento"/>

        </div>
         );
}

export default Datos;