import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserSchemaType } from "./schema/user-validation";
import useApi from "./api/api";
import { AxiosResponse } from "axios";

interface UserContextProps {
  users: UserSchemaType[];
  getAllUsers: () => void;
}

const UserContext = createContext<UserContextProps>({
  users: [],
  getAllUsers: () => undefined,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserSchemaType[]>([]);

  const getAllUsers = useCallback(() => {
    useApi.getAllUsers().then((res: AxiosResponse) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <UserContext.Provider
      value={{
        getAllUsers,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * users -> [{}, {}, {}, {}]
 */
