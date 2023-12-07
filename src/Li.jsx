import React from 'react'

const Li = ({todo,remove,edittodo}) => {
  return (
    <li className='list-group-item rounded-0 my-1 from-control py-1'>
     <h1 className="display-6">{todo.text}</h1>
            <span className='float-end'>
                <div className="button btn btn-warning mx-2" onClick={()=>edittodo(todo)}>Edit</div>
                <div className="button btn btn-danger" onClick={()=>{remove(todo.id)}}>Delete</div>
            </span>
            </li>
  )
}
export default Li