
import '../styles/Navbar.css'
const NavBar = () => {  
    return ( <div>
        <div className="">
        <img alt=''  className="fixed" src='https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
    </div>
        <div className="w-full h-full">
        <div className=" backdrop-blur-[50px] 
    flex justify-center py-5 w-full">
        <div className="rounded-md ... py-3 w-40 ... transition-color duration-300
        hover:bg-gray-900 hover:text-slate-50 rounded ...">
            <h2>Inicio</h2>
        </div>
        <h2 className="rounded-md ... py-3 hover:text-slate-50
        transition-color duration-300
        flex-none w-40 ... hover:bg-gray-900">Nuestro Servicio</h2>
        <h2 className="rounded-md ... py-3 hover:text-slate-50
        transition-color duration-300
        flex-none w-40 ... hover:bg-gray-900 hover:text-slate-50">Testimonio</h2>
        <h2 className="rounded-md ... py-3 transition-color duration-300
         flex-none w-40 ... hover:bg-gray-900 hover:text-slate-50">Acerca de nostros</h2>
    </div>
        </div>
    </div> );
}
 
export default NavBar;