import "./Form.css";
import {
  useState,
  ChangeEvent,
  useCallback,
} from "react";
import { debounce, size, map } from "lodash";
import { useGetGuardianContent } from '../hooks'
import { GuardianApiResponse, Article } from '../types'

function Form() {
  const [term, setTerm] = useState(null);
  const [results, setResult] = useState<Article[]>([]);

  const { getContent } = useGetGuardianContent()

  const handleSearchTerm = async(value: string) => {
    if (size(value) > 5) {
      const results: GuardianApiResponse = await getContent(value)
      const { response } = results || {}
      if(!response?.results) return
      setResult(response.results)
    }
  }

  const debounceResults = useCallback(
    debounce((value) => {
      setTerm(value)
      handleSearchTerm(value);
    }, 500), // won't trigger the endpoint until user stops typing
    []
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounceResults(value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-elements">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="What are you after.."
          onChange={handleOnChange}
        />
        <label className="search-term" htmlFor="search-term">
          {term && (<>Results for <span className="term">{`${term}`}</span></>)}
        </label>
        <div className="results">
          {map(results, (item, index) => (
            <li key={`article-list-${index}`}> {item?.webTitle || ''} </li>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Form;
