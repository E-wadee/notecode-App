import React, {useState} from "react";
// import { Icon } from '@mui/material';
// import { Fab } from '@mui/material';
// import { Zoom } from '@mui/material';


function CreateArea(props){

const[isexpanded,setexpanded] = useState(false)

const [note,setnote] = useState({title:"",content:""})
   
function handleChange(event){


    const {value,name} = event.target
    setnote( prev =>{
        return {...prev, [name]:value}
    })


}


    function handleSubmit(event){
        event.preventDefault();
    }

    function expand(){
        setexpanded(true)
    }

return(
    <div>
    <form className="create-note" onSubmit={handleSubmit}>

    {isexpanded? <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>:null
    }
    <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isexpanded? 3:1}/>
    {/* <Zoom in={isexpanded}>
    <Fab onClick={()=>{
        props.onclick(note)
        setnote({title:"",content:""})
    }}> <Icon/>


     </Fab>
    </Zoom> */}

   



    </form>
        </div>
    )
}
export default CreateArea;