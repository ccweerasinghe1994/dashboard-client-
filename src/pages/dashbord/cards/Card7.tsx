import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  useGetProductsQuery,
  useGetTransactionsQuery,
  useGetKpisQuery,
} from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

const Card7 = () => {
  const { data: transactionalData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();
  console.log("🚀 ~ Card7 ~ data:", productData);
  const { data: OperationalData } = useGetKpisQuery();
  const { palette } = useTheme();
  const productColumns: GridColDef<(typeof productData)[]>[] = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  return (
    <DashboardBox gridArea={"card7"}>
      <BoxHeader
        title="List Of Products"
        sideText={`${productData?.length} products`}
      />
      <Box
        mt={"0.5rem"}
        p={"0.05rem"}
        height={"75%"}
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.primary[800]} !important`,
          },

          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.primary[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: `none !important`,
          },
        }}
      >
        <DataGrid
          hideFooter
          rowHeight={35}
          columnHeaderHeight={25}
          rows={productData || []}
          columns={productColumns}
        ></DataGrid>
      </Box>
    </DashboardBox>
  );
};

export default Card7;
