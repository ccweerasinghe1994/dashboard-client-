import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";
import { ITransactionResponse } from "@/state/types";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

const Card8 = () => {
  const { data: transactionalData } = useGetTransactionsQuery();

  console.log("🚀 ~ Card7 ~ data:", transactionalData);

  const { palette } = useTheme();
  if (!transactionalData) {
    return null;
  }
  const transactionsColumns: GridColDef<(typeof transactionalData)[number]>[] =
    [
      {
        field: "id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "buyer",
        headerName: "Buyer",
        flex: 0.67,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 0.35,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      {
        field: "productIds",
        headerName: "Count",
        flex: 0.35,
        renderCell: (params: GridCellParams) =>
          `$${(params.value as Array<string>).length}`,
      },
    ];
  return (
    <DashboardBox gridArea={"card8"}>
      <BoxHeader
        title="List Of Orders"
        sideText={`${transactionalData?.length} products`}
      />
      <Box
        mt={"1rem"}
        p={"0.05rem"}
        height={"83%"}
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-row": {
            border: "none !important",
          },

          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
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
          rows={transactionalData || []}
          columns={transactionsColumns}
        ></DataGrid>
      </Box>
    </DashboardBox>
  );
};

export default Card8;
