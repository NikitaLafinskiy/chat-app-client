import { SearchResultsProps } from "types/components/elements";
import { SingleSearchResult } from "components/elements";
import { IUser } from "types/models/IUser.d";

function SearchResults({ results, error }: SearchResultsProps) {
  console.log(results, error);
  if (error) {
    console.log("erorr occured");
    return <SingleSearchResult error={error} result={null} />;
  }

  return (
    <div>
      {results.map((result) => {
        return (
          <SingleSearchResult key={result.id} result={result} error={null} />
        );
      })}
    </div>
  );
}

export default SearchResults;
