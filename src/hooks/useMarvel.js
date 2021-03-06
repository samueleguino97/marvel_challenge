import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import MarvelAPI from "../marvel/api";
import { debounce } from "../utils/debounce";

const marvelApi = new MarvelAPI({ apiKey: "d631088db6aaacf347fc384327f95ad7" });

export function useMarvel(endpoint = "", requestParameters) {
  const reduxData = useSelector((state) => state[endpoint]);
  const [response, setResponse] = useState({
    data: { results: reduxData || [] },
  });

  const [loading, setLoading] = useState(true);

  function loadData(params) {
    setLoading(true);
    marvelApi
      .get(endpoint, params)
      .then((res) => {
        setResponse(res);
      })
      .finally(() => setLoading(false));
  }

  const debouncedFunction = useMemo(
    () => debounce((params) => loadData(params), 300),
    [endpoint]
  );
  useEffect(() => {
    debouncedFunction(requestParameters);
  }, [requestParameters, endpoint]);
  return { data: response?.data, loading, loadData, response };
}

export function usePaginatedMarvel(endpoint, params) {
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedParams = useMemo(
    () => ({ offset: currentPage * 20, ...params }),
    [currentPage, params]
  );

  const { data, loadData, loading, response } = useMarvel(
    endpoint,
    paginatedParams
  );

  function nextPage() {
    setCurrentPage((page) => page + 1);
  }
  function previousPage() {
    setCurrentPage((page) => page - 1);
  }

  return {
    data,
    loadData,
    loading,
    response,
    nextPage,
    previousPage,
    currentPage,
  };
}
