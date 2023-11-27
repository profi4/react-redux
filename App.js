import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
 
const App = (props) => {
   
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <div className='app_wrapper_content'>
        <Routes>
          <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
          <Route path='/dialogs'element={<Dialogs state={props.state.dialogsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
