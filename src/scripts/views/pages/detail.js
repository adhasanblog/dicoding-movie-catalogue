import TheMovieDbSource from '../../data/themoviedb-datasource';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likedButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');

    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likedButtonContainer'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
