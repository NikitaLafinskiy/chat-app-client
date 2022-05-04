import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import React from "react";
import { SearchActions } from "store/search/ActionCreators";
import { SocketType } from "types/socket";
import { searchSlice } from "store/search/SearchSlice";
import "./Search.scss";

function Search() {
  const { query } = useAppSelector((state) => state.searchReducer);
  const { user } = useAppSelector((state) => state.authReducer);
  const { socket } = useAppSelector((state) => state.socketReducer);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      dispatch(
        SearchActions.makeQueryRequest(
          e.target.value,
          user,
          socket as SocketType
        )
      );
    }
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
