import{Navigate, Outlet} from 'react-router-dom'
import{jwtDecode} from 'jwt-decode'
//O que se espera encontrar no token
interface DecodeToken{
    sub:string;
    role:string;
    exp:number;
}

interface PrivateRouteProps{
    allowedRoles?:string[];
}

const PrivateRoute=({allowedRoles}:PrivateRouteProps)=>{
    const token=localStorage.getItem('tokenJwt');
    if(!token){
        return <Navigate to="/" replace />;
    }

    try{
        const decode: DecodeToken=jwtDecode(token);
        const currentTime=Date.now()/1000;
        if(decode.exp<currentTime){
            localStorage.removeItem('tokenjwt');
            alert("Sessao expirada!");
            return <Navigate to="/" replace />;
        }

        if(allowedRoles){
            const hasPermission=allowedRoles.some(role=>decode.role.includes(role));

            if(!hasPermission){
                alert('Voce nao tem permissao para acessar essa pagina.');
                return <Navigate to="/" replace />;
            }
        }
        return <Outlet/>;

    }catch(error){
        localStorage.removeItem('tokenJwt');
        return <Navigate to="/" replace />;
    }
};

export default PrivateRoute;