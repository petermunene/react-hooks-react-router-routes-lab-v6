import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre} </span>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
