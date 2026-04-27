interface SucessModalProps{
    isOpen:boolean;
    onClose:()=> void;
    title: string;
    message:string;
}

export function SucessModal({isOpen, onClose, title, message}: SucessModalProps){
    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4 transform transition-all animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-4 w-12 h-12">
                        ✅
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-6">{message}</p>
                    
                    <button
                        onClick={onClose}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-green-200"
                    >
                        Entendido!
                    </button>
                </div>
            </div>
        </div>
    )
}