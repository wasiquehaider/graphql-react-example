import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetAllTodos {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h1>Loading....</h1>;
  return (
    <div className="App">
      <div>
        <h2>Todo List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Todo</th>
            </tr>
          </thead>
          <tbody>
            {data?.getTodos?.map((todo, index) => (
              <tr key={todo.id}>
                <td>{todo.user.name}</td>
                <td>{todo.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
