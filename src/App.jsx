import { Route, Routes } from 'react-router';
import './App.css';
import { ArraysMethods } from './pages/arraysMethods/ArraysMethods';
import { UseHooks } from './pages/useHooks/useHooks'

function App() {

  return (
    <Routes>
      <Route path='arraysMethods' element={<ArraysMethods />} />
      <Route path='useHooks' element={<UseHooks />} />
    </Routes>
  );
}

export default App;
