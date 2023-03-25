import FavouriteSites from "./components/FavouriteSites.jsx"
import Gallery from "./components/Gallery.jsx"
import Profile from "./components/Profile.jsx"
import StateAssignmentOne from "./components/StateAssignmentOne.jsx"
import StateAssignmentTwo from "./components/StateAssignmentTwo";
import "./App.css"

function App() {
  return (
    <div className="App">
      <FavouriteSites></FavouriteSites>
      <Profile></Profile>
      <Gallery></Gallery> 
      <StateAssignmentOne></StateAssignmentOne>
      <StateAssignmentTwo></StateAssignmentTwo>
    </div>
  );
}
export default App;
