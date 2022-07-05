import React, { useState, useMemo } from 'react';
import type { NextPage } from 'next';

//components
import CharacterCard from 'src/components/CharacterCard';
import MainLayout from 'src/components/Shared/containers/MainLayout';

//services
import { useQueryCharactersPaginated } from 'src/services';

//style
import styles from 'src/styles/Home.module.scss';

const Home: NextPage = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } =
    useQueryCharactersPaginated();

  const handleScrollEnds = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <MainLayout title="List of Characters" onScrollEnds={handleScrollEnds}>
      <div className={styles.container}>
        {data?.pages?.map((page, pageIndex) => (
          <React.Fragment key={`page_${pageIndex}`}>
            {page?.results?.map((character) => (
              <CharacterCard
                key={`character_${character?.id}`}
                data={character}
              />
            ))}
          </React.Fragment>
        ))}

        <CharacterCard skeleton={isFetching} />
        <CharacterCard skeleton={isFetching} />
        <CharacterCard skeleton={isFetching} />
      </div>
    </MainLayout>
  );
};

export default Home;
