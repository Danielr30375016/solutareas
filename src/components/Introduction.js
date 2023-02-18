const Introduction = () => {
    return (<div className="flex justify-center h-full w-full relative">
        <div className="rounded ... h-full w-4/5 content-center justify-center
         backdrop-blur-[50px] ">

            <div className="w-full flex justify-center py-10 backdrop-blur-[50px]">
                <h2 className=" w-2/4 flex justify-center font-oswald 
                text-zinc-900 text-5xl font-medium ...">
                    Ofrecemos soluciones en las siguientes areas</h2>
            </div>

            <div className="w-full h-full flex flex-wrap justify-center backdrop-blur-[50px]">
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-cover "
                            alt="cience"
                            src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
                    </div>
                    <h2 className="text-3xl font-oswald text-sky-50 bg-gray-900 ... py-2">Ciencias</h2>
                </div>
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-fill"
                            alt="cience"
                            src="https://images.pexels.com/photos/5184957/pexels-photo-5184957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2 className="text-3xl font-oswald text-sky-50 bg-gray-900 ... py-2">Calculo</h2>
                </div>
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-fill"
                            alt="cience"
                           
                            src="https://images.pexels.com/photos/8472938/pexels-photo-8472938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2 className="text-3xl font-oswald text-sky-50 bg-gray-900 ... py-2">Fisica</h2>
                </div>
                <div className="flex flex-row ... justify-center ... py-10 backdrop-blur-[50px]">
                <div className="w-3/12 h-5/6  m-1 backdrop-blur-[50px]">
                    <div>
                        <img className="object-fill h-100 w-/12"
                            alt="cience"
                            src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2 className="text-3xl font-oswald text-sky-50 bg-gray-900 ... py-2">Economia</h2>
                </div>
                <div className="w-6/12 h-100  m-1 ">
                    <div className="">
                        <img className="object-contain h-1/4"
                            alt="cience"
                            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2 className="text-3xl font-oswald text-sky-50 bg-gray-900 ... py-2 backdrop-blur-[50px]" >Estadística</h2>
                </div>
                </div>

            </div>

        </div>
    </div>);
}

export default Introduction;