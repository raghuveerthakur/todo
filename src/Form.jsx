import { useEffect, useState } from "react"



const Form = ({addtodo,edit,updatetodo ,theme}) => { 


const [text , setText] = useState("")

    const handleSubmit = (e)=>{
    e.preventDefault()
    // addtodo(text);
if(edit.editmode){
  updatetodo(edit.todo.id, text)
}else{
    addtodo(text);
}
setText("")
    }

    useEffect(()=>{
setText(edit.todo.text)
    },[edit])


  return (
    <form className="from-control rounded-0" onSubmit ={handleSubmit}>
        <input type="text" placeholder=' Enter your Code' className="list group item-rounded-0 w-100 my-3" value={text} onChange={(e)=>setText(e.target.value)}required/>
        <button className='btn btn-success w-100 my-3'>Enter</button>
    </form>
  )
}

export default Form