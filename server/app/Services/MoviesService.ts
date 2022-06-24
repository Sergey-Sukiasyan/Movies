import Movies from "../Models/Movies";

class MoviesService {
    
    async getAllMovies() {
        const movies = await Movies.find();
        return movies;
    }
}

export default new MoviesService();