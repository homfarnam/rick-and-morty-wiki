import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

//components
import MainLayout from 'src/components/Shared/containers/MainLayout';
import EpisodeCard from 'src/components/EpisodeCard';
import LocationCard from 'src/components/LocationCard';
import CharacterCard from 'src/components/CharacterCard';

//services
import {
  useQueryLocation,
  useQueryCharacter,
  useQueryEpisodeList,
} from 'src/services';

//style
import styles from './style.module.scss';

const CharacterPage: NextPage = () => {
  const router = useRouter();

  const [episodeIds, setEpisodeIds] = useState<string | null>(null);
  const [locationId, setLocationId] = useState<string | null>(null);
  const [originId, setOriginId] = useState<string | null>(null);

  const { data, isFetching } = useQueryCharacter(router?.query?.id);

  const { data: locationData, isFetching: isLocationFetching } =
    useQueryLocation(locationId);

  const { data: originData, isFetching: isOriginFetching } =
    useQueryLocation(originId);

  const { data: episodeData, isFetching: isEpisodeFetching } =
    useQueryEpisodeList(episodeIds);

  useEffect(() => {
    if (data) {
      setEpisodeIds(
        data?.episode
          ?.map((item) => item?.split('/episode/')[1])
          .join(',') as string
      );

      setLocationId(data?.location?.url?.split('/location/')[1]);
      setOriginId(data?.origin?.url?.split('/location/')[1]);
    }
  }, [data]);

  const episodeList = useMemo(
    () => (Array.isArray(episodeData) ? episodeData : [episodeData]),
    [episodeData]
  );

  return (
    <MainLayout title="Detail information">
      <div className={styles.container}>
        <aside>
          <CharacterCard
            data={data}
            skeleton={isFetching}
            showMoreButton={false}
          />
          <LocationCard
            title="Origin"
            data={originData}
            skeleton={isOriginFetching}
          />
          <LocationCard
            title="Location"
            data={locationData}
            skeleton={isLocationFetching}
          />
        </aside>
        <section>
          <div className="uk-card uk-card-default uk-card-body uk-card-small">
            <h3 className="uk-card-title">List of Episodes</h3>
            <br />
            <div>
              <EpisodeCard skeleton={isEpisodeFetching} />
              <EpisodeCard skeleton={isEpisodeFetching} />
              <EpisodeCard skeleton={isEpisodeFetching} />
              <ul uk-accordion="multiple: true">
                {episodeList?.map((episode) => (
                  <EpisodeCard key={`episode_${episode?.id}`} data={episode} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CharacterPage;
