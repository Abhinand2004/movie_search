import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import Footer from "../components/Footer";
import Movies from "./Movies";

const Home = () => {
    return (
        <div>
            <Header />
            <Movies/>
            <Footer />
        </div>
    );
};

export default Home;
