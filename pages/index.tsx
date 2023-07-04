import { GetServerSideProps } from "next";

import { HomeProps } from "./Interface/interfaces";
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

// import { GetServerSideProps } from "next";
// import { useRouter } from "next/router";

// import ImageFeed from "./ImageFeed";

// interface Character {
//   id: number;
//   name: string;
//   image: string;
// }

// interface HomeProps {
//   characters: Character[];
//   page: number;
//   totalPages: number;
// }

// const Home: React.FC<HomeProps> = ({ characters, page, totalPages }) => {
//   const router = useRouter();

//   const handlePageChange = (newPage: number) => {
//     // Redirect to the new page using the query parameter
//     router.push(`/?page=${newPage}`);
//   };

//   return (
//     <div>
//       <h1>Home</h1>
//       <ImageFeed
//         characters={characters}
//         page={page}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps<HomeProps> = async (
//   context
// ) => {
//   const page = Number(context.query.page) || 1;
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${page}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       characters: data.results,
//       page,
//       totalPages: data.info.pages,
//     },
//   };
// };

// export default Home;
