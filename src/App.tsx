import './App.css';
import {UserList} from "./components/UserList/UserList";
import {TodoList} from "./components/TodoList/TodoList";
import {PostList} from "./components/PostList/PostList.tsx";




function App() {

 return (

    <div>
      
        <UserList  />

        <TodoList />

        <PostList />
      
    </div>

  );
}

export default App;
