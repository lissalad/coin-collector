import logo from "./logo.svg";
import "./App.css";
import CoinForm from "./components/CoinForm";
import CoinList from "./components/CoinList";

function App() {
  return (
    <div className="App">
      <CoinForm />
      <CoinList />
    </div>
  );
}

export default App;
