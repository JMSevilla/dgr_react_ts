import { createContext, useContext } from "react";
import { Alert, AlertTitle, AlertProps as MuiAlertProps } from "@mui/material";

type Props = {
  severity: MuiAlertProps["severity"];
  title: string;
  description: string;
};

interface AlertProps {
  MuiAlert: (props: Props) => JSX.Element;
}

export const AlertContext = createContext<AlertProps>(undefined as any);

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const MuiAlert = (props: Props) => {
    const { severity, title, description } = props;
    switch (severity) {
      case "success":
        return (
          <Alert severity="success">
            <AlertTitle>{title}</AlertTitle>
            {description}.
          </Alert>
        );
      case "error":
        return (
          <Alert severity="error">
            <AlertTitle>{title}</AlertTitle>
            {description}.
          </Alert>
        );
      case "info":
        return (
          <Alert severity="info">
            <AlertTitle>{title}</AlertTitle>
            {description}.
          </Alert>
        );
      case "warning":
        return (
          <Alert severity="warning">
            <AlertTitle>{title}</AlertTitle>
            {description}.
          </Alert>
        );
      default:
        return (
          <Alert severity="info">
            <AlertTitle>No title</AlertTitle>
            No Description.
          </Alert>
        );
    }
  };
  return (
    <AlertContext.Provider
      value={{
        MuiAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
