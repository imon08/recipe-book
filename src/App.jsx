import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import CategoryPage from "./CategoryPage";
import RecipePage from "./RecipePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName"  element={<CategoryPage />} />
          <Route
            path="/category/:categoryName/:mealName"
            element={<RecipePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
