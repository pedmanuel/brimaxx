import React, {useState, useEffect} from 'react';
import {useHistory} from"react-router-dom";

const LoadingToRedirect =()=>{
    const [count, setCount] = useState(5)
    let history = useHistory()

    useEffect(()=>{

        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount);
        }, 1000);
    // redireciona quando count for 0
    count === 0 && history.push("/user/Password")

    //limpar 
    return () => clearInterval(interval);

    },[count, history]);

    return (
        <div className="conteiner p-5 text-center"> 
        <p> Redirecionando voçê em {count} segundos</p>
        </div>
    )

};
export default LoadingToRedirect;