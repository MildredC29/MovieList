import React from "react"; // Importa React
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Movie } from "../types/Movie"; // Importa la interfaz Movie

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Ruta dinámica para importar la imagen basada en el título
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  const showDetails = () => {
    Swal.fire({
      title: movie.title,
      imageUrl: imageSrc, // Usamos la imagen en SweetAlert2
      imageWidth: 300,
      imageAlt: `${movie.title} Poster`,
      confirmButtonText: "Cool!",
      background: '#53205c', // Fondo general 
    color: '#e8d5f5', // Color de texto
    confirmButtonColor: '#23052a',
    customClass: {
      title: 'mi-titulo', 
      popup: 'mi-popup' 
  }
    });
  };

  return (
    <div className="movie-card" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;