import { Card, CardContent, CardActions } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface Props {
  elevation?: number;
  element: ReactElement | ReactNode;
}

export const BasicCard: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  elevation,
  element,
}) => {
  return (
    <Card elevation={elevation}>
      <CardContent>{children}</CardContent>
      <CardActions
        sx={{
          float: "right",
          mt: 2,
          mb: 2,
        }}
      >
        {element}
      </CardActions>
    </Card>
  );
};
