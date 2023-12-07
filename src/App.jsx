
import React, { useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'
import Listgroup from './Listgroup'

const App = () => {
  
const [count , setcount] = useState(0);
const [todos, settodos] = useState([
  // {id: 1, text: "Raghuveer Thakur"},
  // {id: 2, text: "Mr Patel"},
  // {id: 3, text: "E-skills-web"},
  // {id: 4, text: "Aimfortech"},
]);

const [theme , settheme] = useState(false)

const handletheme = ()=>{
if (theme) {
  settheme(false)
}else{
  settheme(true)
}
}



const [edit , setedit ]= useState({
  todo :{},
  editmode : false,
})

const edittodo =  (oldtodo)=>{
  setedit({
    todo : oldtodo,
    editmode : true,
  })
};


const remove = (id)=>{
settodos(
  todos.filter((item)=>{
    if(item.id!==id){
      return true;
    }
  })
)
}
const addtodo = (text)=>{
  const newtodo = {
    id : crypto.randomUUID(),
    text : text,
  }
  settodos([newtodo , ...todos]);
};


const increase = ()=>{
  setcount(count+1)
}
const decrease = ()=>{
  setcount(count-1)
}

  const updatetodo = (oldid,newtext)=>{
    settodos(
todos.map(item =>item.id === oldid ?{id:oldid ,text : newtext} : item)
    );
    setedit({
      todo :{},
      editmode : false,
    })
  }

  return (
    <>   
      <Navbar theme = {theme}/>
     <div className="container" >
     <div className="h1 display-5 my-3 text-center">{count}</div>
     <button className='btn btn-info' onClick={()=>handletheme()}>Change Theme</button>
     <button className='btn btn-success mx-2' onClick={()=>increase()}>Increase</button>
     <button className='btn btn-danger' onClick={()=>decrease()}>decrease</button>
      <Form addtodo={addtodo} edit={edit} updatetodo = {updatetodo}/>
      <Listgroup todos={todos} remove={remove} edittodo={edittodo}/>
     </div>
    </>
  )
}

export default App