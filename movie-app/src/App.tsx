import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';


const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Split",
      genre: "Terror pscologico, suspenso",
      image: "Split.png",
    },
    {
      id: 2,
      title: "Unbreakable",
      genre: "suspenso pscologico ",
      image: "Unbreakable.png",
    },
    {
      id: 3,
      title: "Glass",
      genre: "Suspenso",
      image: "Glass.png",
    },
    {
      id: 4,
      title: "Cars",
      genre: "Animacion, Aventura, Familiar",
      image: "Cars.JPG",
    },
    {
      id: 5,
      title: "La era de Hielo",
      genre: "Comedia, Ciencia ficcion Animada",
      image: "LaEraDeHielo.webp",
    },
    {
      id: 6,
      title: "Toy Story",
      genre: "Aventura, Comedia, Familiar",
      image: "ToyStory.jpeg",
    },
    {
      id: 7,
      title: "Yo Antes de ti",
      genre: "Drama, Romance",
      image: "YoAntesDeTi.jpg",
    },
    {
      id: 8,
      title: "Bajo la Misma Estrella",
      genre: "Drama, Adolecentes",
      image: "BajoLaMismaEstrella.jpg",
    },
    {
      id: 9,
      title: "Cada Dia",
      genre: "Drama, Romance, Fantacia",
      image: "CadaDia.jpeg",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 Lista de Peliculas</h1>
      <MovieList movies={movies} />
      <footer className="footer">
        © 2024 MovieApp | Diseñado por{" "}
        <a href="">Mildred Cedeño</a>
        <br />
      </footer>
    </div>
  );
};

export default App;