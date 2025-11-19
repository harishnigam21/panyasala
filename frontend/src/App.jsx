import "./App.css";
import myStore from "./store/Store";
import { Provider } from "react-redux";
import Home from "./Home";
function App() {
  return (
    <Provider store={myStore}>
      <Header/>
      <Home />
      <Footer/>
    </Provider>
  );
}

export default App;
