import {  SiRottentomatoes } from 'react-icons/si';
import {MdLocalMovies , MdMovieEdit} from 'react-icons/md'
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'genre review',
      count: defaultStats?.pending || 0,
      icon: <MdLocalMovies />,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
    {
      title: 'movies reviewed',
      count: defaultStats?.review || 0,
      icon: <MdMovieEdit />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'rotten movies',
      count: defaultStats?.rotten || 0,
      icon: <SiRottentomatoes />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
