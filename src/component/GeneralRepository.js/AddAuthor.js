import React,{ useEffect,useState } from "react"

const Addauthor = (props) =>{
    const initial = {name:'',country:'',countryData:null}
    const [state,setState] = useState(initial)
    
    const onChangeHandler = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
            e.preventDefault()
            if(state.name && state.country){
                    fetch("https://localhost:44345/author",{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            name:state.name,
                            country:state.country
                        })
                    })
                    .then(res=>res)
                    .then(json=>{
                            alert("Author successfully added !!")
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
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(json=>setState({
            ...state,
            countryData:json
        }))
    },[])

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input value={state.name} name="name" style={{
                    padding:'5px',
                    marginRight:'10px'
                }} 
                onChange={onChangeHandler}/>
                <select value={state.country} name="country" onChange={onChangeHandler} style={{
                    width:'40vh',
                    padding:'5px'
                }}>
                    <option value=''>Select Country</option>
                    {
                        state.countryData && state.countryData.map((e,i)=>{
                            let {name,area,cioc,region} = e
                            return (
                            <option value={cioc} key={i}>{name}</option>
                            )
                        })
                    }
                </select>
                <button type="submit">Add Author</button>
            </form>
        </>
    )
}
export default Addauthor;