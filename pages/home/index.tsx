import { GetServerSideProps } from "next";

import { HomeProps } from "../../Interface";
import ImageFeed from "./imageFeed";

const Home: React.FC<HomeProps> = ({ characters, page, totalPages, error }) => {
  if (error) {
    return <h1>{error}</h1>; // Display error message page
  }
  return (
    <div>
      <ImageFeed characters={characters} page={page} totalPages={totalPages} />
    </div>
  );
};

// fetch { characters, page, totalPages, error } data by /?page={page} and handle potential error
export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  try {
    const page = Number(context.query.page) || 1;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();

    return {
      props: {
        characters: data.results,
        page,
        totalPages: data.info.pages,
        error: "",
      },
    };
  } catch (error) {
    return {
      props: {
        characters: [],
        page: 0,
        totalPages: 0,
        error: "Something went wrong",
      },
    };
  }
};

export default Home;
