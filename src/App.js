import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderForm from './components/HeaderForm';
import Person from './views/Person';
import Planet from './views/Planet';


function App() {

  const Error = () => {
    return (
      <div>
        <h1> These are not the droids you are looking for</h1>
        <img src="https://i.pinimg.com/originals/5e/c5/01/5ec50175139d39c8a69f0f8ce3233ea9.jpg" alt="Hello There" ></img>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <h1>Show me the star wars stuff</h1>
      <HeaderForm/>
      <Routes>
        {/* <Route path="" element={<>< />}/> */}
        <Route path="/people/:id" element={<Person />} />

        <Route path="/planets/:id" element={<Planet />} />

        {/* If route is not specified or wrong, display error message */}
        <Route path="*" element={<Error />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
