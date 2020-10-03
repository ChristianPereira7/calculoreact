import React, { useState } from 'react';
import styled from 'styled-components';


const Input = styled.input`
    width: 400px;
    height: 20px;
    font-size: 16px;
    padding: 10px;
`;

function App(){

  const [ valorConta, setConta ] = useState('');
  const [ valorGorjeta, setGorjeta ] = useState('');


    return(
      <>
      <div> 
        <Input placeholder="Valor da conta" type="number" value={valorConta} onChange={(e)=>setConta(e.target.value)}/>
        <Input placeholder="Valor da gorjeta" type="number" value={valorGorjeta} onChange={(e)=>setGorjeta(e.target.value)}/>
      
      
      </div>   
      </>
    );
}

export default App;
