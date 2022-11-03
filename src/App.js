import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router/Router';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
