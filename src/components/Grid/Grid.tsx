import { Grid, GridOwnProps } from "@mui/material";

type Props = {
  rowSpacing: number;
  columnSpacing: GridOwnProps["columnSpacing"];
  sx?: GridOwnProps["sx"];
};

export const BasicGrid: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  const { rowSpacing, columnSpacing, sx } = rest;
  return (
    <Grid
      sx={sx}
      container
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
    >
      {children}
    </Grid>
  );
};
