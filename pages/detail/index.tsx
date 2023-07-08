import { GetServerSideProps } from "next";

import { DetailProps } from "../../Interface";
import Character from "../components/character";
import styles from "@/styles/Detail.module.css";
const Detail: React.FC<DetailProps> = ({
  id,
  name,
  image,
  status,
  species,
  episodeInfo,
}) => {
  return (
    <div className={styles.detail}>
      <div className={styles.detailCard}>
        <Character id={id} name={name} image={image} />
        <h3>status: {status} </h3>
        <p> species: {species}</p>
      </div>
      <div className={styles.detailEpisodes}>
        <div className={styles.detailEpisodesTitle}> Episodes:</div>
        {episodeInfo.map(({ name, air_date, episode }) => (
          <div>
            {episode}, {name},
          </div>
        ))}
      </div>
    </div>
  );
};

// fetch { characters, page, totalPages, error } data by /?page={page} and handle potential error
export const getServerSideProps: GetServerSideProps<DetailProps> = async (
  context
) => {
  const desId = context.query.id;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${desId}`
  );
  const data = await response.json();

  const { id, name, image, status, species, episode } = data;

  const multiEpi = episode
    .map((path: string) => path.split("/").pop())
    .join(",");
  const episodeRes = await fetch(
    `https://rickandmortyapi.com/api/episode/${multiEpi}`
  );
  const episodeInfo = await episodeRes.json();

  return {
    props: {
      id,
      name,
      image,
      status,
      species,
      episodeInfo,
    },
  };
};

export default Detail;
