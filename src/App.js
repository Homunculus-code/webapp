import { useState } from 'react';
import './App.css'

const App = ({notes}) => {
  const [note, setNote] = useState(notes);
  const [newNote, setNewNote] = useState('');
  const [v, setV] = useState(false);
  const changeNoteValue = event => {
    setNewNote(event.target.value);
    if (event.target.value === ''){
      setV(false);
    }
    else{
      setV(true);
    }
  }

  return(
    <>
    <form>
      <input value = {newNote} onChange = {changeNoteValue}/>
    </form>
    {note.map(not => <Displayer vari = {v} notes = {not} search = {newNote}/>)}
    </>
  )
}

const Displayer = ({vari, notes, search}) => {
  const [v2, setV2] = useState(true);
  if (vari == true){
      if (notes.title.toLowerCase().includes(search.toLowerCase())){
        return (
          <>
            <div style = {{display: "flex", flexDirection: "row", alignItems: "baseline", gap: "10px"}}>
              <h1 style = {{color: "#fed043"}}>{notes.title}</h1>
              <button onClick = {() => setV2(!v2)}>{v2 && "show"}{!v2 && "hide"}</button>
            </div>
            {!v2 && <Info film = {notes}/>}
          </>
        ) 
      }
  }
  else{
    return(
      <>
        <Info film = {notes}/>
      </>
    )
  }
}

const Info = ({film}) => {
  return(
    <>
    <div className = 'infoBox'>
      <div style={{display: "flex", flexDirection: "row", alignItems: "baseline", gap: "10px"}}>
        <h1 style = {{color: "#fed043"}}>{film.title}</h1>
        <p style = {{color: "#03b2f8"}}>{film.release_date}</p>
      </div>
      <div className = 'box'>
        <h6 style = {{color: "#ef8df0"}}>{film.original_title}</h6>
        <img src = {film.movie_banner} height = {250} width = {450}/>
        <p style = {{color: "#ef8df0"}}>{film.description}</p>
      </div>
      <br />
    </div>
    </>
  )
}

export default App;
