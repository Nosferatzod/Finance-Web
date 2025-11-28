import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/sf.svg';
import '../App.css';

function Login() {
  const navigate=useNavigate();
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [erro, setErro]=useState('');

  const handleLogin=async()=>{{/*promise*/}
    setErro('');
    try{
      const response=await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({email, password: password})
      });
      if(!response.ok){
        throw new Error('login failed! Verifique suas credenciais.');
      }
      const data=await response.json();
      const token=data.token;
      localStorage.setItem('meu_token_jwt', token);
      {/*alert('Login successful!')*/}
      navigate('/home');
    }catch(error){
      setErro('Erro ao fazer ');
    }
  }

  return (
  <>
    <div className="noise gradt w-screen h-screen p-4">{/*Fundo*/}
      <div className='relative z-10'>{/*Titulo login*/}
        <h1 className='h-1/6 m-auto text-center text-3xl font-bold text-white'>LOGIN</h1>
      </div>
      <div className='relative z-10 h-5/6 flex flex-col justify-center'>{/*primeiro corpo*/}
        <div className='bg-white h-2/5 w-80 md:w-2/6 md:h-1/3 m-auto rounded-lg flex flex-col justify-center'>{/*caixa central*/}
        <div className='text-center'>{/*div-email*/}
          <p>
            Email
          </p>
          <input type="email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          className='bg-gray-200 rounded-sm w-5/6 sm:w-10/12 lg:w-8/12 xl:w-1/2 mb-2.5  '/>
        </div>
        <div className='text-center'>{/*div-senha*/}
          <p>
            Password
          </p>
          <input type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          className='bg-gray-200 rounded-sm w-5/6 sm:w-10/12 lg:w-8/12 xl:w-1/2 mb-2.5  '/>
        </div> 
        <div className='text-center'>{/*div-botao*/}
          <button onClick={handleLogin}
          className='
          bg-blue-100 
          pt-1 pb-1 pl-2.5 pr-2.5 
          mt-2.5 
          rounded-sm
          hover:bg-blue-300
          active:bg-blue-500
          transition-colors duration-500 delay-50
          '>enviar</button>
          {erro && <p className='text-red-500 mt-2'>{erro}</p>}
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Login