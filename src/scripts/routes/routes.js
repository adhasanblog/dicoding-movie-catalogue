import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';

const routes = {
  '/': NowPlaying, //Default Page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
