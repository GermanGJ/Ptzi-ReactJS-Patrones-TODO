import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlertWithStorageListener } from "../ChangeAlert"


function App() 
{

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p> }
        //  render={todo => (
        //  <TodoItem 
        //  key={todo.text} 
        //  text={todo.text} 
        //  completed={todo.completed} 
        //  onCompleted={() => completeTodo(todo.text)}
        //  onDelete={(searchText) => deleteTodo(todo.text)}
        ///>
        //)}
      >
        {todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onCompleted={() => completeTodo(todo.text)}
          onDelete={(searchText) => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
             
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />  

      <ChangeAlertWithStorageListener  
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
  
}

export default App;