import React,{ useState } from "react"

const Addbook = (props) =>{
    const initial = {title:'',year:''}
    const [state,setState] = useState(initial)
    
    const onChangeHandler = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
            e.preventDefault()
            if(state.title && state.year){
                    fetch("https://localhost:44345/book",{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(state)
                    })
                    .then(res=>res)
                    .then(json=>{
                            alert("Book successfully added !!")
                            setState({
                            ...initial
                            })
                    })
                    .catch(err=>console.log(err))
            }
            else{
                alert("Fill All the details !!")
            }
    }
    const inputCss = {
        padding:'5px',
        marginRight:'10px'
    }
    console.log(state)
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input value={state.name} name="title" style={inputCss} 
                onChange={onChangeHandler}/>
                <input type="date" style={inputCss}
                value={state.year} name="year" onChange={onChangeHandler} />
                <button type="submit">Add Book</button>
            </form>
        </>
    )
}
export default Addbook;
