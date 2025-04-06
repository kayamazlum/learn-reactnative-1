import React, { useEffect } from "react";
import RootNavigation from "./src/navigation/rootNavigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import { getAllData } from "./src/redux/dataSlice";
import { Loading } from "./src/components";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isSaved } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllData());
  }, [isSaved]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default AppWrapper;
