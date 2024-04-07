import "./App.css";
import LoginForm from "./components/auth/forms/login";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup.";

function App() {
  return (
    <>
      <h1>Colleg course registration</h1>
      <Link to={"/login"}>Login</Link>
      <LoginForm />
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/signup" />
      </Routes>
    </>
  );
}

export default App;
