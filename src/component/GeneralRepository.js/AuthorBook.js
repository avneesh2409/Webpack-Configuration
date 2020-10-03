import React,{useState,useEffect} from 'react'
const Authorbook = (props) =>{
    const [author,setAuthor] = useState({
        loading:false,
        data:null,
        error:''
        })
    const [book,setBook] = useState({
        data:null,
        loading:false,
        error:''
    })
    const [state,setState] = useState({
        author:'',
        book:''
    })
    const controller = new AbortController()
    const signal = controller.signal
    useEffect(()=>{
        setBook({
            ...book,
            loading:true,
            error:''
        })
        let url = "https://localhost:44345/book";
        let options = {
            method:'GET',
            signal:signal
        }
        fetch(url,options)
        .then(res=>res.json())
        .then(json=>{
            setBook({...book,data:json,loading:false})
    })
        .catch(err=>{setBook({...book,loading:false,error:"bookError occured"})})
        return ()=>{
            controller.abort();
        }
    },[])
    useEffect(()=>{
        setAuthor({
            ...author,
            loading:true,
            error:''
        })
        let url = "https://localhost:44345/author";
        let options = {
            method:'GET',
            signal:signal
        }
        fetch(url,options)
        .then(res=>res.json())
        .then(json=>{
            setAuthor({...author,data:json,loading:false})
    })
        .catch(err=>{setAuthor({...author,loading:false,error:"authorError occured"})})
        return ()=>{
            controller.abort();
        }
    },[])
    const clickHandler = () =>{
        if(state.book && state.author){
            fetch("https://localhost:44345/author/author-book",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    authorId:state.author,
                    bookId:state.book
                })
            })
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
            })
            .catch(err=>console.log(err))
        }
        else{
            alert("unable to add book !!")
        }
    }
    return (
        <>
        <h1>Author <small style={{
            padding: '20px',
            margin: '20px',
            color: '#CD6',
            background: 'black'
        }}>Has Written a </small> Book</h1>
        <div>
        <select name="author" onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}
        style={{
                marginRight: '70px'
        }}
        value={state.author}
        >
            <option value=''>Select Author</option>
           {
               author.data && author.data.map((e,i)=>{
                   return (
                   <option key={i} value={e.id}>{e.name}</option>
                   )
               })
           }
        </select>
        <select name="book" style={{
                marginLeft: '70px'
        }} 
        onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}
        value={state.book}
        >
            <option value=''>Select Book</option>
           {
               book.data && book.data.map((e,i)=>{
                   return (
                   <option key={i} value={e.id}>{e.title}</option>
                   )
               })
           }
        </select>
        </div>
        <button onClick={()=>clickHandler()}>Submit</button>
        </>
    )
}

export default Authorbook
