import logo from './logo.svg';
import './App.css';
import EmployeeCard from './components/employee';


// import API from './components/utils/API';
// API.search().then(res => {
//   const emp1 = res.data.results[0];
//   return emp1;
// });

/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */
/* <img src={logo} className="App-logo" alt="logo" /> */
      // <header className="App-header">
      // </header>

function App() {
  return (
    <div className="App">

        <EmployeeCard />
    </div>
  );
}

export default App;
