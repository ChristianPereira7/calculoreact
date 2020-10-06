import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';


const Title = styled.h1`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    color: #ffffff;
    margin-bottom:100px;
`; 

const Input = styled.input`
    width: 400px;
    height: 20px;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
`;

const ContainerDiv = styled.div`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    text-align: center;
`;


function App(){

  const [ vlConta, setConta ] = useState();
  const [ vlGorjeta, setGorjeta ] = useState();

    return(
      <ContainerDiv>
        <Title>Calculo de Gorjeta</Title>
        <p>Qual é a valor da conta?</p>
        <Input placeholder="Informe o valor da conta" type="number" value={vlConta} onChange={(e)=>setConta(parseFloat(e.target.value))}/>
        <p>Qual é o valor da gorjeta?</p>
        <Input placeholder="Informe o valor da gorjeta" type="number" value={vlGorjeta} onChange={(e)=>setGorjeta(parseFloat(e.target.value))}/>    
        <hr/>
        
       {vlConta > 0 &&
        <>
            <p>Sub-total: R$ {vlConta}</p>
            <p>Gorjeta foi de ({vlGorjeta}%): R$ {(vlGorjeta/100) * vlConta}</p> 
            <p>Total da conta: R$ {vlConta + ((vlGorjeta/100) * vlConta)}</p>
        </>
        }
     </ContainerDiv>
   );
  
}

export default App;
