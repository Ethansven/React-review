import './App.css';
import Todo from './components/Todo';
import Home from './components/Home';
function App() {
    return (
        <div className="App">
            <div className="home">
            <Home />
        </div>
        <div className="todo">
            <Todo />
        </div>
        </div>
    );
}

export default App;


