import './App.css';
import {UserList} from "./components/UserList/UserList";
import {TodoList} from "./components/TodoList/TodoList";
import {PostList} from "./components/PostList/PostList.tsx";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage.tsx";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";



function App() {

 return (
     <FavoritesProvider>
    <div>
      
        <UserList  />

        <FavoritesPage />

        <TodoList />

        <PostList />
      
    </div>
     </FavoritesProvider>
  );
}

export default App;
