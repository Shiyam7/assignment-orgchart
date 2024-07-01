import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/navbar';

import './App.css';
import SideBar from './components/side-bar';
import MainCanvas from './components/main-canvas';

function App() {
  return (
   <div className='container'>
      <NavBar title='Org Chart'/>
      <main>
        <SideBar/>
        <MainCanvas/>
      </main>
      <ToastContainer position='top-right' />
   </div>
  );
}

export default App;
