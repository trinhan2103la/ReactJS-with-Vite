import MovieCard from "./MovieCard";
import { MovieData } from "./MovieData";

export default function Treniding() {
  return (
    <>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 bm-12">
        {MovieData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn mt-10 hover:scale-125 transition ease-out duration-500">
          Load More
        </button>
      </div>
    </>
  );
}
