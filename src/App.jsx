import { Provider } from "react-redux";
import "./App.css";

import "./index.css";
import Postman from "./layout/Postman";
import Request from "./layout/Request";
import { store } from "./store/store"
const App = () => {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-[1fr_3fr] h-full ">
        <Request />
        <Postman />
      </div>
    </Provider>
  );
};

export default App;
