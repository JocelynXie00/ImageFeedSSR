import { GetServerSideProps } from "next";

import { HomeProps } from "../Interface/interfaces";
import ImageFeed from "./components/ImageFeedPage";

const Home: React.FC<HomeProps> = ({ characters, page, totalPages, error }) => {
  if (error) {
    return <h1>{error}..., Refresh the page to retry!</h1>; // Display error message page
  }
  return (
    <div>
      <ImageFeed characters={characters} page={page} totalPages={totalPages} />
    </div>
  );
};

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
