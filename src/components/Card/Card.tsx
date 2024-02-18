import { Card, CardContent, CardActions, CardProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface Props {
  elevation?: number;
  element?: ReactElement | ReactNode;
  sx?: CardProps["sx"];
}

export const BasicCard: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  elevation,
  element,
  sx,
}) => {
  return (
    <Card sx={sx} elevation={elevation}>
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
