import { twMerge } from "tailwind-merge";//button used for login and register

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:'primary'|'danger';
}

export function Button({className, children, ...props}:ButtonProps){
    return(
        <button type="button"
        className={twMerge("font-p w-20 h-10 bg-blue-500 text-white shadow-blue-500/50 shadow-lg rounded-md transition-all duration-550 hover:w-22 hover:h-11 hover:shadow-xl/100 hover:tracking-wider hover:text-lg active:bg-blue-700 active:duration-100 ", className)}
        {...props}
        >
            {children}
        </button>
    );
}