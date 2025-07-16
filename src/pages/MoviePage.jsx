import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchMovie = async () => {
         const options = {
  method: 'GET',
  url: `https://imdb236.p.rapidapi.com/api/imdb/${id}`,
  headers: {
    'x-rapidapi-key': '21c260a2bcmsh9d392c3e04d959bp168093jsn7491aa393ae2',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};
            try {
                const response = await axios.request(options);
                console.log(response.data);
                if (response.data) {
                    setMovieData(response.data);
                } else {
                    setMovieData({});
                }
            } catch (error) {
                console.error(error);
                setMovieData({});
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <MovieDetails movie={movieData} />
            <Footer />
        </div>
    );
};

export default MoviePage;
