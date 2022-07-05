import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

//types
import { ICharacter } from 'src/lib/interfaces';

interface Props {
  data?: ICharacter;
  skeleton?: boolean;
  showMoreButton?: boolean;
}

const CharacterCard = (props: Props): JSX.Element => {
  const { data, skeleton, showMoreButton = true } = props;

  if (skeleton) {
    return (
      <div>
        <Skeleton width={300} height={200} />
        <Skeleton width={300} height={20} />
        <Skeleton width={300} height={50} />
        <br />
        <Skeleton width={300} height={50} />
      </div>
    );
  }

  if (data) {
    return (
      <div className="uk-card uk-card-default uk-card-hover uk-card-small">
        <div className="uk-card-media-top">
          <Image
            src={`${data?.image}`}
            alt={data?.name}
            height={500}
            width={500}
          />
        </div>
        <div className="uk-card-body">
          <div className="uk-card-badge uk-label uk-background-secondary">
            {data?.status}
          </div>
          <h3 className="uk-card-title">{data?.name}</h3>
          <div>
            <p className="uk-label uk-margin-small-right">{data?.gender}</p>
            <p className="uk-label">{data?.species}</p>
            <hr></hr>
            <h4>Episodes ({data?.episode?.length})</h4>
            <p className="uk-label uk-label-warning">{data?.location?.name}</p>
          </div>
        </div>
        {showMoreButton && (
          <div className="uk-card-footer">
            <a
              href={`/character?id=${data?.id}`}
              className="uk-button uk-button-secondary uk-width-1-1"
            >
              More Info
            </a>
          </div>
        )}
      </div>
    );
  }

  return <div />;
};

export default CharacterCard;
