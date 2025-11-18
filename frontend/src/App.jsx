import "./App.css";
import { Provider } from "react-redux";
import myStore from "./store/Store";
function App() {
  return (
    <Provider store={myStore}>
      <main className="text-red-500">Hello</main>
    </Provider>
  );
}

export default App;
