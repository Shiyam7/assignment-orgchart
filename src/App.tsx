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
      <footer>
        <div>Made with ❤️ by Shiyam</div>
      </footer>
   </div>
  );
}

export default App;
