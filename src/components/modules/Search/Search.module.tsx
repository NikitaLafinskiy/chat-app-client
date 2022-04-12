import { SearchResults } from "components/elements";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import React from "react";
import { SearchActions } from "store/search/ActionCreators";
import { SocketType } from "types/socket";

function Search() {
  const { results, error, query } = useAppSelector(
    (state) => state.searchReducer
  );
  const { socket } = useAppSelector((state) => state.socketReducer);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(results);
    dispatch(
      SearchActions.makeQueryRequest(e.target.value, socket as SocketType)
    );
  };

  return (
    <div>
      <input onChange={handleChange} value={query} />
      <SearchResults results={results} error={error} />
    </div>
  );
}

export default Search;
