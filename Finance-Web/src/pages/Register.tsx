import '../App.css';
import '../index.css'

function Register(){
    return(
    <>
        <div className='noise gradt h-screen w-screen flex'>
            <div className='realtive z-10 respMenu ml-5 mt-5 rounded-md'>
                <div className='bg-white '>

                </div>
            </div>
            <div className='relative z-10 h-8/12 w-5/12 m-auto'>
                <div className='flex flex-col justify-center h-1/1 w-1/1'>
                    <div className='bg-white h-1/1 w-1/1 m-auto rounded-lg flex flex-col justify-center'>
                        <div className='h-7/12 ml-7'>
                            <div className='h-3/12'>{/*name*/}
                                <p className='font-Jura'>Name</p>
                                <input type="text" 
                                className='bg-gray-300 h-5/12 w-9/12 rounded-sm '
                                />
                            </div>
                            <div className='h-3/12 '>{/*email*/}
                                <p>Email</p>
                                <input type="email" 
                                className='bg-gray-300 h-5/12 w-7/12 rounded-sm '
                                />
                            </div>
                            <div className='h-3/12 '>{/*cpf*/}
                                <p>Cpf</p>
                                <input type="number" 
                                className='bg-gray-300 h-5/12 w-5/12 rounded-sm'
                                />
                            </div>
                            <div className='h-3/12'>{/*password*/}
                                <p>Password</p>
                                <input type="text" 
                                className='bg-gray-300 h-5/12 w-6/12 rounded-sm'
                                />
                            </div>
                            
                        </div>
                        <div className='mt-10 mb-10 ml-auto mr-auto'>{/*Botao */}
                            <button 
                            className='
                            bg-black
                            text-white 
                            pt-2 pb-2 pl-3.5 pr-3.5 
                            rounded-md
                            hover:bg-[#8A96BE]
                            hover:text-black
                            hover:
                            active:bg-[#8A96BE]
                            transition-colors duration-500 delay-50
                            '>
                                registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Register;