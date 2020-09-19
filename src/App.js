import React from 'react';
import Button from './component/child/Button';
import logo from './image/request.PNG';

const App = (props) =>{
    const clickHandler = () =>{
        console.log("buttpn clicked")
    }
    return (
        <>
        <Button onClick={clickHandler}>Click Here </Button><img src={logo} width={100} height={100}/>
    </>
    )
}

export default App;
