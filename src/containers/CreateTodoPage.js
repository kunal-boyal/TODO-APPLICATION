import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Form from '../components/Form'
import Todos from '../components/Todos'
import Modal from '../components/Modal'
import TodosStatusBar from '../components/TodoStatusBar'
import Spinner from '../components/Spinner'
import * as actions from '../store/actions'

const CreateTodoPage = (props) => {

    const [todoTitle, setTodoTitle] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        props.getTodosHandler()
    }, [])

    const inputChangeHandler = (event) => {
        setTodoTitle(event.target.value)
    }

    const onAddTodoHandler = (e) => {
        e.preventDefault()
        if (todoTitle.length > 0) props.addTodoHandler({ title: `${todoTitle}` })
    }

    const checkBoxhandler = (id, isCompleted) => {
        props.checkBoxTodosHandler({ _id: id, isCompleted: !isCompleted })
    }

    const onDeleteTodoHandler = (id, isCompleted) => {
        if (!isCompleted) {
            setShowModal(true)
            setTimeout(() => setShowModal(false), 3000);
        } else {
            props.deleteTodoHandler([id])
        }
    }

    const onModalHide = () => {
        setShowModal(false)
    }

    const todosLeftTobeDone = () => {
        const leftTobeDone = props.todos.filter(todo => !todo.isCompleted).length
        return leftTobeDone
    }

    const clearCompletedTodos = () => {
        const ids = []
        props.todos.forEach(todo => {
            if (todo.isCompleted === true) ids.push(todo._id)
        })
        props.deleteTodoHandler(ids)
    }
    
    const todoDetailsPage = (id) => {
        props.setCurrentTodoId(id)
        props.history.push("/todoDetails")
    }

    let todos = props.todos.map(todo => {
        return <Todos
            id={todo._id}
            key={todo._id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            delete={onDeleteTodoHandler}
            clicked={todoDetailsPage}
            checkBox={checkBoxhandler}
            date={todo.createdAt}
        />
    }
    )

    return (
        <div style={{ margin: 'auto', width: '60%' }}>
            <Form inputHandler={inputChangeHandler} onAddTodo={onAddTodoHandler} />
            <Modal show={showModal} onHide={onModalHide} />
            {todos.length > 0 ? todos : null}
            {todos.length > 0
                ? <TodosStatusBar
                    todosLeft={todosLeftTobeDone()}
                    completed={props.todos.length - todosLeftTobeDone()}
                    clicked={clearCompletedTodos} />
                : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoHandler: (data) => dispatch(actions.addTodo(data)),
        getTodosHandler: () => dispatch(actions.getTodos()),
        checkBoxTodosHandler: (data) => dispatch(actions.editTodo(data)),
        deleteTodoHandler: (data) => dispatch(actions.deleteTodo(data)),
        setCurrentTodoId: (data) => dispatch(actions.setCurrentTodoId(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoPage)
