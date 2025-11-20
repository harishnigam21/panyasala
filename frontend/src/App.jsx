import "./App.css";
import myStore from "./store/Store";
import { Provider } from "react-redux";
import Home from "./Home";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
function App() {
  return (
    <Provider store={myStore}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  );
}

export default App;
