import { Provider } from "react-redux";
import LoginForm from "./auth/login";
import reduxStore from "./store/store";
import TokenShow from "./auth/token";

// To access the store
const store = reduxStore.store;

// To access the persistor
const persistor = reduxStore.persistor;
console.log("persistor", persistor);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LoginForm />
        <TokenShow />
      </Provider>
    </div>
  );
}
