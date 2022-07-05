import { IEpisode } from 'src/lib/interfaces';
import Skeleton from 'react-loading-skeleton';

interface Props {
  data?: IEpisode;
  skeleton?: boolean;
}

const EpisodeCard = (props: Props): JSX.Element => {
  const { skeleton, data } = props;

  if (skeleton) {
    return <Skeleton width={300} height={30} />;
  }

  if (data) {
    return (
      <li className="uk-close">
        <a className="uk-accordion-title" href="#">
          {data?.episode} - {data?.name}
        </a>
        <div className="uk-accordion-content">
          <span className="uk-label">air date: {data?.air_date}</span>
          <p>Characters played in this episode: {data?.characters?.length}</p>
        </div>
      </li>
    );
  }

  return <div />;
};

export default EpisodeCard;
