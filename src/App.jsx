import useSWR from "swr";
import "./App.css";

const fetcher = (args) => fetch(...args).then((res) => res.json());

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const { data, error, isLoading } = useSWR([url, { headers }], fetcher);

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>Status : {data.description}</div>;
}

export default App;
