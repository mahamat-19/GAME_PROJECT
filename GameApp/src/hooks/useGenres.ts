import { useEffect, useState } from "react";
import { fetchGenresResponse, type Genre } from "../services/api-client";

const useGenres = ( deps:React.DependencyList =[]) => {
 const [genres, setGenres] = useState<Genre[]>( []);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGenresResponse()
      .then((res) => {
        setGenres(res);
        setIsLoading(false);
      })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false);
  });
  }, deps ? [...deps] : []);
return { genres, error, isLoading };
}
export default useGenres;