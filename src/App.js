import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserList />
      </Provider>
    </div>
  );
}
