import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.js";
import HommeContainer from "./containers/HomeContainer.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HommeContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
