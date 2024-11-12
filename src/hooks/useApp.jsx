import { useContext } from "react";
import { AppContext } from "../../components/Providers/AppProviders";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
