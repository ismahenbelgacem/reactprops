import "./App.css";
import Profile from "./component/profile/Profil"
 
function App() {
  const showAlert = (name) => {
    alert(`my name is ${name}`);
  };

  return (
    <div className="container">
      <Profile
        fullName="ismahen belgacem"
        bio="lovley,amazing,smart and pretty develloper"
        profession="web develloper"
        handelName={showAlert}
      >
        <img src="./img/12.jpeg" alt="This is my photoprofile" />
    </Profile>    
    </div>
  );
}

export default App;