import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
            <Link to={`/movie/${movie.id}`}>
                <img src={movie.primaryImage} alt={movie.primaryTitle} className="w-full h-80 object-cover" />
            </Link>
            <div className="p-4">
                <h2 className="text-xl font-semibold">{movie.primaryTitle}</h2>
                <p className="text-gray-600 text-sm">{movie.releaseDate}</p>
            </div>
        </div>
    );
};

export default MovieCard;
