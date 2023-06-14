import { FeaturedMovie } from "@/components/featured-movie";
import React from "react";

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isShortDescription={false} />;
}

export { MovieContainer };