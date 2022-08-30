import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [openForm,setOpenForm] = useState(false);
  const [currentId,setCurrentId] = useState('');

  return (
    <>
      <Navbar setOpenForm={setOpenForm} />
      <Routes>
        <Route path='/' element={<Home setCurrentId={setCurrentId} />} />
        <Route path='/details/:id' element={<Details currentId={currentId} />} />
      </Routes>
      { openForm && <Form /> }
    </>
  )
}

export default App
