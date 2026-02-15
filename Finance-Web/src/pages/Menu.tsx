import '../index.css'
import ExpandableMenu from '../components/ExpandableMenu';
import { Logo } from '../components/Logo';
import {MonthSelector} from '../components/MonthSelector';
import { useEffect, useState } from 'react';
import { YearSelector } from '../components/YearSelector';
import { Button } from '../components/Button';

interface DashboardData{
        totalIncome:number;
        totalExpense:number;
        balance:number;
    }

function Menu(){
    const [dashboard, setDashboard]=useState<DashboardData>({balance:0, totalIncome:0, totalExpense:0});
    const [mesSelecionado, setMesSelecionado]=useState('Janeiro');
    const [anoSelecionado, setAnoSelecionado]=useState(new Date().getFullYear());

    useEffect(()=>{
        const carregarDados=async()=>{
            const mesesMap:{[key:string]:number}={
                "Janeiro": 1, "Fevereiro": 2, "Março": 3, "Abril": 4,
                "Maio": 5, "Junho": 6, "Julho": 7, "Agosto": 8,
                "Setembro": 9, "Outubro": 10, "Novembro": 11, "Dezembro": 12
            }
            const mesNumero=mesesMap[mesSelecionado] || 1;
            try{
                const token=localStorage.getItem('tokenJwt');
                const url=`http://localhost:8080/api/dashboard?month=${mesNumero}&year=${anoSelecionado}`;
                const response=await fetch(url, {//envia as informacoes de acesso
                    method: 'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${token}`
                    }
                });
                if(response.ok){
                    const dadosDoBack=await response.json();
                    console.log(dadosDoBack);
                    setDashboard(dadosDoBack);
                }else{
                    console.error("Erro ao buscar as informacoes", response.status);
                }
            }catch(erro){
                console.error("Erro de conexao", erro);
            }
        };
        carregarDados();
    }, [mesSelecionado, anoSelecionado]);//executa novamente caso o mes seja alterado

        const formatarMoeda=(valor:number)=>{
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor);
        };
    
    return(
        <>
            <div className='noise gradt h-screen w-screen'>
                <div className='absolute z-20'>
                    <ExpandableMenu/>
                </div>
                <div>
                    <Logo/>
                </div>
                <div className='w-screen h-screen flex items-end justify-center'>
                    <div className='bg-white w-11/12 h-10/12 p-10 rounded-tl-3xl z-10 rounded-tr-3xl flex flex-row'>{/*caixa central */}
                        <div className='z-30 flex flex-col pr-4'>
                            <div className='flex flex-row mb-5'>
                                <p className='mr-2'>Mês: </p>
                                <div className=''>
                                    <MonthSelector selectedMonth={mesSelecionado} onMonthChange={setMesSelecionado}/>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-2'>Ano: </p>
                                <div className=''>
                                    <YearSelector selectedYear={anoSelecionado} onYearChange={setAnoSelecionado} />
                                </div>
                            </div>
                        </div>
                        <div className='pr-4'>
                            <p>Saldo: {formatarMoeda(dashboard.balance)}</p>
                        </div>
                        <div className='pr-4'>
                            <p>Receitas: {formatarMoeda(dashboard.totalIncome)}</p>
                        </div>
                        <div className='pr-4'>
                            <p>Despesas: {formatarMoeda(dashboard.totalExpense)}</p>
                        </div>
                        <div className='ml-auto'>
                            <Button className='w-30 hover:w-33 p-2' to='/transaction'>ADICIONAR</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;