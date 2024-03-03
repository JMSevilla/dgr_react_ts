import { DataGrid as MuiDataGrid, DataGridProps } from "@mui/x-data-grid";

interface Props {
  data: DataGridProps["rows"];
  columns: any;
  sx?: DataGridProps["sx"];
  loading?: DataGridProps["loading"];
}

export const DataGrid: React.FC<Props> = ({ data, columns, sx, ...props }) => {
  return (
    <MuiDataGrid rows={data} columns={columns} sx={sx} autoHeight {...props} />
  );
};
