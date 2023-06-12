import MakeGlobal from "./components/MakeGlobal";
import Post from "./components/Post";

import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MakeGlobal />
        <Post />
      </Provider>
    </div>
  );
}
