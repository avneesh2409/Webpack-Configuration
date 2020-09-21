import React,{useCallback, useState} from 'react'
import Dropzone,{useDropzone} from 'react-dropzone'
import { Loader } from './child/Loader'

const Fileupload = (props) => {
  const [isLoad,setIsLoad] = useState(false);
  const [file,setFile] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    file.push(acceptedFiles[0])
    setFile(file)
  }, [])
  const submitHandler = () =>{ 
    setIsLoad(true);
    let formData = new FormData();
    file.forEach(item => {
      formData.append("files",item);
    });
    let options = {
      method:'POST',
      body:formData
    }
    fetch(`https://localhost:44377/api/emailservice/file-upload`,options)
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      setIsLoad(false)
    })
    .catch(err=>{
    console.log(err)
    setIsLoad(false)
    }) 
}
  const {isDragActive,isDragReject} = useDropzone({onDrop})
  return (
       <>
      {isLoad?<Loader />:null} 
      <Dropzone 
      onDrop={onDrop}
      minSize={0}
      maxSize={3242880}
      accept="image/jpg,image/png"
      multiple
      >
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
         {
          isDragActive ?
          <p>Drop or Click here the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
         }
         {isDragActive && !isDragReject && "Drop it like it's hot!"}
         {isDragReject && "File type not accepted, sorry!"}
      </div>
      )}
    </Dropzone>
    <button onClick={submitHandler}>Submit Here</button>
    </>
    //   <div {...getRootProps()}>
    //   <input {...getInputProps()} multiple={true} />
    //   {
    //  }
    // </div>
    )
}

export default Fileupload
