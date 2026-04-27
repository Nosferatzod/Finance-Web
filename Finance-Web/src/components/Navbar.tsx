import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Navbar(){
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem('tokenJwt');
        setIsLoggedIn(!!token);
    }, []);
}