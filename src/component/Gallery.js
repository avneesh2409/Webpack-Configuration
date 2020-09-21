import React, { useState } from 'react';
import styles from '../css/style.module.css';

const Gallery = (props) => {
    const [toAddress,setToAddress] = useState([]);
    const [text,setText] = useState('');
    const keyDownHander = (e) =>{
            if(e.keyCode === 13){
                setToAddress(to=>[...to,text]);
                setText('');
            }
    }
    const submitHandler = (e) =>{
            e.preventDefault()
    }
    const clickHandler = (e) =>{
            document.getElementById("inputText").focus();
    }
    return (
                <div>
                    <label>To</label>
                    <div onClick={clickHandler} className={styles.divClass}>
                        {
                            toAddress && toAddress.length > 0 && toAddress.map((item,index)=>{
                                return (
                                    <div key={index} style={{display:'inline'}}>
                                <span className={styles.spanInput} >{item}</span><span className={styles.close}>x</span>
                                </div>
                                )
                            })
                        }
                        <input type="textarea" style={{padding: '5px',border:'none'}} id="inputText" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={keyDownHander}/> 
                    </div>
                </div>
    )
}
export default Gallery;
