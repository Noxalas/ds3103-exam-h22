import GameService from "./services/GameService";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage, ContactPage, QuizPage, EditPage, CreateNewPage } from "./pages";
import "./Style.css";

function App() {
  GameService.getAllGames();

  return (
    <Container>
      <header>
        <h1>ElectricGames Company</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="edit">Edit</Link>
              </li>
              <li>
                <Link to="createnew">Create New</Link>
              </li>
              <li>
                <Link to="quiz">Quiz</Link>
              </li>
              <li>
                <Link to="contact">Contact us</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="edit" element={<EditPage />}></Route>
            <Route path="createnew" element={<CreateNewPage />}></Route>
            <Route path="quiz" element={<QuizPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
            <Route path="*" element={<p>Not found</p>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </Container>
  );
}

export default App;
