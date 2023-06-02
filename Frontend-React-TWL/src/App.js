import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import NavBarComponent from "./components/NavBarComponent"
import JumbotronComponent from "./components/JumbotronComponent";



function App() {
  return (
    <div className="App">
    <NavBarComponent />
    <JumbotronComponent />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
