
import Todos from "./components/Todos"
import NewTodo from './components/Newtodo';
import TodosContextProvider from './store/todos-context';
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import { 
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom"
import Management from "./pages/ManageAccount/Management/index"
import User from "./pages/ManageAccount/User/index"
import RootLayout from "./Layouts";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/management" element={<Management/>} ></Route>
//     <Route path="/user" element={<User/>} ></Route>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)
const router = createBrowserRouter([
  {
    path : '/',
    element : <RootLayout/>,
    children : [
      {
        path : '/management',
        element : <Management/>
      },
      {
        path : '/user',
        element : <User/>
      }
    ]
  },
 
])

function App() {

  // const [todos, setTodos] = useState<Todo[]>([])

  // const addTodoHandler = (todoText : string) => {
  //   const newTodo = new Todo(todoText)
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo)
  //   })
  // }

  // const removeTodoHandler = (todoId : string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId)
  //   })
  // }

  // return (
  //   <div>
  //     <RouterProvider router={router} />
  //     <Navigation></Navigation>
  //     <main className={styles.container}>
      
  //       <TodosContextProvider>
  //         <NewTodo></NewTodo>
  //         <Todos />
  //       </TodosContextProvider>
  //     </main>
  //   </div>
  // );
  return <RouterProvider router={router} />
}

export default App;
