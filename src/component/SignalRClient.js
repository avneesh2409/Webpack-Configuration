import React, { useEffect, useState } from 'react'
import { HubConnectionBuilder } from '@aspnet/signalr';

var connection = new HubConnectionBuilder().withUrl("https://localhost:44362/chathub").build();

const Signalrclient = (props) => {
    const [state, setState] = useState('')
    const [message,setMessage] = useState([]);
    useEffect(() => {
        connection.on("ReceiveMessage", data => {
            message.push(data);
            setMessage([...message])
        });
        connection.start()
    .then(() => connection.invoke("SendMessage", "Hello"));
    }, [])
    const submitHandler = (props) => {
        props.preventDefault();
        connection.invoke("SendMessage",state)
        setState('');
    }
    return (
        <form onSubmit={submitHandler}>
            <h1>Welcome to Chat Room</h1>
            <input type="textarea" value={state} onChange={(e) => setState(e.target.value)} />
            <button type="submit">Send</button>
            <div>
            {
                message && message.length > 0 && message.map((item,index)=>{
                    return (<>
                    <p key={index}>{item}</p>
                    <hr />
                    </>
                    )
                })
            }
            </div>
        </form>
    )
}


export default Signalrclient
