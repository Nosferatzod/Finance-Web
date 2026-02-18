import ExpandableMenu from '../components/ExpandableMenu';
import { Logo } from '../components/Logo';
import '../index.css';

function CreateTransaction(){


    return(
        <>
            <div className='noise gradt w-screen h-screen'>
                <div>
                    <ExpandableMenu/>
                </div>
                <div>
                    <Logo/>
                </div>
                <div className='w-screen h-screen flex justify-center items-end'>
                    <div className='bg-white w-11/12 h-10/12 p-10 rounded-tl-3xl z-10 rounded-tr-3xl flex '>
                        <form className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                            <div className='md:col-span-5 flex flex-col gap-1'>
                                <p>Nome</p>
                                <input type="text" className='bg-gray-300 h-12 px-4 rounded-sm sm:w-12/12 lg:w-12/12 xl:w-1/1 mb-2.5 pt-4 pl-2 text-lg'/>
                            </div>
                            <div className='md:col-span-3 flex flex-col gap-1'>
                                <p>Valor</p>
                                <input type="text" className='bg-gray-300 h-12 px-4 rounded-sm sm:w-12/12 lg:w-12/12 xl:w-1/1 mb-2.5 pt-4 pl-2 text-lg'/>
                            </div>
                            <div className='md:col-span-4 flex flex-col gap-1'>
                                <label htmlFor="">Tipo</label>
                                <select name="" id="" className='bg-gray-300 h-12 px-4 rounded-sm sm:w-12/12 lg:w-12/12 xl:w-1/1 mb-2.5 pt-4 pl-2 text-lg'></select>
                            </div>
                            <div className='h-1/8 w-1/6 mr-30'>
                                <p>Descrição</p>
                                <input type="text" className='bg-gray-300 h-6/12 w-1/1 rounded-sm sm:w-12/12 lg:w-12/12 xl:w-1/1 mb-2.5 pt-4 pl-2 text-lg'/>
                            </div>
                            <div>
                                <p>Banco</p>
                                <div></div>
                            </div>
                            <div>
                                <p>Conta</p>
                                <div></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default CreateTransaction