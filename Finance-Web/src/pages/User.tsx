import '../index.css'
import ExpandableMenu from '../components/ExpandableMenu';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

function User(){
    
    return(
        <>
            <div className='noise gradt h-screen w-screen'>
                <div className='w-screen h-screen flex'>
                    <div className='flex flex-none'>
                        <div>
                            <ExpandableMenu/>
                        </div>
                    </div>
                    <div className='w-screen h-screen flex items-center justify-center z-10'>
                        <div className='bg-white w-11/12 h-11/12 flex rounded-sm p-10'>
                            <div>
                                <button className='bg-gray-300 w-40 h-10 flex rounded-xl 
                                shadow-xl 
                                transition-all 
                                duration-500
                                hover:bg-white
                                hover:w-42
                                hover:h-11'>
                                    <Link to="" className='flex items-center m-auto'>Create Transaction</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;