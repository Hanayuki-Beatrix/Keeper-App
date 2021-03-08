import React, {useState} from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    title: "",
    content: ""
  });

  function inputNote(event){
    const {name,value} = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      };
    });
  }

  function submitNote(event){

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }



  return (
    <div>
      <form>
        <input onChange={inputNote} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={inputNote} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
