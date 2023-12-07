import React from 'react'
import Li from './Li'

const Listgroup = ({todos ,remove, edittodo}) => {

  if(todos.length === 0){
    return <h1 className='display-3 my-3 text-center'>No Todos Yet</h1>
  }
  
  return (
    
        <ul className='list-group my-3'>
      {
       todos.map((todo)=>{
        return <Li key={todo.id} todo={todo} remove={remove} edittodo = {edittodo}/>
        
       })
      }

        </ul>
    
  )
}

export default Listgroup