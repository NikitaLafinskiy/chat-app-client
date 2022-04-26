import { SearchResults } from "components/modules";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import React from "react";
import { SearchActions } from "store/search/ActionCreators";
import { SocketType } from "types/socket";
import { searchSlice } from "store/search/SearchSlice";
import "./Search.scss";

function Search() {
  const { query, isSearching } = useAppSelector((state) => state.searchReducer);
  const { socket } = useAppSelector((state) => state.socketReducer);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      SearchActions.makeQueryRequest(e.target.value, socket as SocketType)
    );
  };

  return (
    <div className={`modules__search`}>
      <input
        onFocus={() => {
          dispatch(searchSlice.actions.toggleFocus(true));
        }}
        placeholder='Search'
        onChange={handleChange}
        value={query}
      />
    </div>
  );
}

export default Search;
