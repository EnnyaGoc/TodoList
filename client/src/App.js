import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Celular from './components/getcelular/Celular';
import Add from './components/addcelular/Add';
import Edit from './components/updatecelular/Edit';

function App() {

    const route = createBrowserRouter([
      {
        path:"/",
        element: <Celular/>,
      },
      {
        path:"/add",
        element: <Add/>,
      },
      {
        path:"/edit/:id",
        element: <Edit/>,
      },
    ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
