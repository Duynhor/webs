import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search_results, setSearch_results] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts
`)
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Sớtch..."
          onChange={(event) => {
            setSearch_results(event.target.value);
          }}
        />
      </div>
      <div className="process">
        <h1 style={{ padding: " 0 20px" }}>Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
      </div>

      <div className="content">
        <ul>
          {data &&
            data
              .filter((title) => {
                if (search_results === "") {
                    return title
                } else if (title.toLowerCase().includes(search_results.toLowerCase())) {
                    return title
                }
              })
              .map(({ id, title, body }) => (
                <li key={id}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
        </ul>
      </div>
      <a href="#">
        <div className="upkey">
          <div>Up</div>
        </div>
      </a>
    </div>
  );
}

export default App;
