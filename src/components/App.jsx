import React, { useState } from 'react';
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import CreateArea from './CreateArea'


function App(){ 

  const [notes,addnote] = useState([])

  function Add(note){
    addnote( prev => {
      return [...prev, note]
    })
  }
  function Delete(id){

     addnote(prev =>{
            return prev.filter( (note,index) => {
              return index!=id
            })
          })
      }
          return (<div>

  <Header/>
  <CreateArea onclick={Add}/>
  {notes.map( (note, index) =>
            (<Note
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          onchecked = {Delete}
          />
        )    
    )}

    <Footer/>
    </div>
  );
}

export default App;
