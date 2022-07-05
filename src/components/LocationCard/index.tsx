import Skeleton from 'react-loading-skeleton';
import { ILocation } from 'src/lib/interfaces';

interface Props {
  title?: string;
  data?: ILocation;
  skeleton?: boolean;
}

const LocationCard = (props: Props): JSX.Element => {
  const { title, data, skeleton } = props;

  if (skeleton) {
    return <Skeleton width={300} height={200} />;
  }

  if (data) {
    return (
      <div className="uk-card uk-card-default uk-card-body uk-card-small">
        <h3 className="uk-card-title">
          <strong>{title}</strong> : {data?.name}
        </h3>
        <div>
          <p>
            Dimenstion:
            <span className="uk-text-bolder">{data?.dimension}</span>
          </p>
          <p className="uk-label">type: {data?.type}</p>
          <hr />
          <p>Number of residents: {data?.residents?.length}</p>
        </div>
      </div>
    );
  }

  return <div />;
};

export default LocationCard;
