const Todo = (props) => {

    //properties
    const todos = props.todos
    const handleDelete = (id) => {
        props.deleteDataTodo(id)
    }
    return (

        <div className='todo-container' style={{ backgroundColor: '#282c34', color: 'white' }}>
            <div className="title">
                {props.title}
            </div>
            {
                todos.map(todo => {
                    return (
                        <div className="todo-child" key={todo.id} >
                            <li> {todo.title}
                                &nbsp; <span onClick={() => handleDelete(todo.id)}>X</span>
                            </li>


                        </div>

                    )

                })
            }
            <hr></hr>
        </div >
    )
}

export default Todo