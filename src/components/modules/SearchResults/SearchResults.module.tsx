import { SearchResultsProps } from "types/components/elements";
import { SingleSearchResult } from "components/elements";

function SearchResults({ results, error }: SearchResultsProps) {
  if (error) {
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
