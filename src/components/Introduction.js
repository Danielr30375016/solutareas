const Introduction = () => {
    return (<div className="flex justify-center h-full w-full relative">
        <div className="rounded ... h-full w-4/5 content-center justify-center
         backdrop-blur-[50px] ">

            <div className="w-full flex justify-center py-10">
                <h2 className=" w-2/4 flex justify-center font-fontIntroduction text-zinc-900 text-4xl">Ofrecemos soluciones en diferentes areas</h2>
            </div>

            <div className="w-full h-full flex flex-wrap justify-center">
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-cover "
                            alt="cience"
                            src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
                    </div>
                    <h2 className="">Ciencias</h2>
                </div>
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-fill"
                            alt="cience"
                            src="https://images.pexels.com/photos/5184957/pexels-photo-5184957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2>Calculo</h2>
                </div>
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-fill"
                            alt="cience"
                           
                            src="https://images.pexels.com/photos/8472938/pexels-photo-8472938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2>Fisica</h2>
                </div>
                <div className="w-3/12 h-1/4  m-1">
                    <div>
                        <img className="object-fill"
                            alt="cience"
                            src="https://images.pexels.com/photos/6930902/pexels-photo-6930902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2>Estadistica</h2>
                </div>
                <div className="w-3/12 h-30  m-1">
                    <div>
                        <img className="object-fill h-50 w-/12"
                            alt="cience"
                            src="https://images.pexels.com/photos/7054413/pexels-photo-7054413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2>Economia</h2>
                </div>
                <div className="w-3/12 h-50  m-1">
                    <div>
                        <img className="object-contain h-1/4"
                            alt="cience"
                            src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </div>
                    <h2>Quimica</h2>
                </div>

            </div>

        </div>
    </div>);
}

export default Introduction;