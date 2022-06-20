import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AppContext = createContext({
  name: "",
  setName: (_value: string) => {},
});

export function AppWrapper({ children }: Props) {
  const [name, setName] = useState<string>("");

  const contextValue = useMemo(() => {
    return { name, setName };
  }, [name, setName]);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name") || "");
    }
  }, []);  

  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
  }, [name]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
