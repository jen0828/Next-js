import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import imageLoader from '../../imageLoader';
import { Character } from '../../types';
import Layout from '../../components/Layout';
import styles from '../../styles/Character.module.css';
import { ReactElement } from 'react';

function CharacterPage({ character }: { character: Character }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>{character.name}</h1>

      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200px"
        height="200px"
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
