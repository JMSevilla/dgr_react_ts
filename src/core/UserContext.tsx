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
import { useQuery } from "react-query";

interface UserContextProps {
  data: any;
}

const UserContext = createContext<UserContextProps>({
  data: undefined,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const handleFetchData = () => {
    return useApi.getAllUsers().then((res) => res.data);
  };

  const { data } = useQuery("handleFetchData", handleFetchData);

  /**
   * const { data }
   * [{}]
   */
  return (
    <UserContext.Provider
      value={{
        data: data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * users -> [{}, {}, {}, {}]
 */
