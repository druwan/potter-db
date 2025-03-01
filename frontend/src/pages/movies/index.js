import { dehydrate, QueryClient } from "@tanstack/react-query";

import Meta from "../../components/Meta";
import MovieList from "../../components/pages/movies/MovieList";
import { getMovies } from "../../lib/load_movies";

const fetchMovies = async ({ pageParam = 1, queryKey }) => {
  const [_, searchQuery] = queryKey;
  return await getMovies({
    page: pageParam,
    searchQuery: searchQuery,
  });
};

const Movies = () => {
  return (
    <>
      <Meta title="Movies" description="List of all Harry Potter movies" />
      <MovieList fetchMovies={fetchMovies} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["movies"], fetchMovies, {
    retry: 10,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Movies;
