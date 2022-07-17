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
  setName: (_value: string) => { },
  profile: "",
  setProfile: (_value: string) => { },
});

export function AppWrapper({ children }: Props) {
  const [name, setName] = useState<string>("");
  const [profile, setProfile] = useState<string>("");

  const contextValue = useMemo(() => {
    return { name, setName, profile, setProfile };
  }, [name, setName, profile, setProfile]);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name") || "");
      setProfile(localStorage.getItem("profile") || "");
    }
  }, []);

  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
      localStorage.setItem("profile", profile);
    }
  }, [name, profile]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
