import React, { useEffect, useState } from "react";
import {
  Header,
  BasicCard,
  BasicGrid,
  BasicTextField,
  Button,
} from "../components";
import { Grid, Typography } from "@mui/material";

import { Control, Controller, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema, UserSchemaType } from "../core/schema/user-validation";
import { useDataSubmit } from "../core/hooks/useDataSubmit";
import { useUserContext } from "../core/UserContext";
import { DataGrid } from "../components";
import { GridColDef } from "@mui/x-data-grid";
import { useAlertContext } from "../core/AlertContext";

const Home: React.FC = () => {
  const { MuiAlert } = useAlertContext();
  const form = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
    mode: "all",
    defaultValues: userSchema.getDefault(),
  });

  const { handleSubmit, control, setValue } = form;
  const { submitButton } = useDataSubmit({
    handleSubmit: handleSubmit,
  });
  const { users } = useUserContext();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      sortable: true,
    },
    {
      field: "firstname",
      headerName: "Firstname",
      width: 150,
      sortable: false,
    },
    {
      field: "middlename",
      headerName: "Middlename",
      width: 150,
      sortable: false,
    },
    {
      field: "lastname",
      headerName: "Lastname",
      width: 150,
      sortable: false,
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      sortable: false,
    },
  ];

  useEffect(() => {
    setValue("userType", "admin");
  }, []);
  return (
    <>
      <MuiAlert
        severity="error"
        title="Invalid username"
        description="Kindly check your username again."
      />
      <BasicGrid
        sx={{ mt: 5 }}
        columnSpacing={{ xs: 1, md: 2, lg: 3 }}
        rowSpacing={1}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <BasicCard elevation={5} element={submitButton}>
            <h3>User Form</h3>
            <FormProvider {...form}>
              <Controller
                control={control}
                name="firstname"
                shouldUnregister
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    required
                    onChange={onChange}
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    label="Firstname"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="middlename"
                render={({ field: { onChange } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    onChange={onChange}
                    label="Middlename (Optional)"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="lastname"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    required
                    onChange={onChange}
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    label="Lastname"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    required
                    onChange={onChange}
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    label="Username"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    required
                    onChange={onChange}
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                )}
              />
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <BasicTextField
                    sx={{ mt: 2, mb: 2 }}
                    required
                    onChange={onChange}
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </FormProvider>
          </BasicCard>
        </Grid>
        <Grid item xs={4}></Grid>
      </BasicGrid>
      <BasicCard sx={{ mt: 10 }}>
        <Typography>Users List</Typography>
        <DataGrid
          data={users}
          columns={columns}
          loading={false}
          sx={{ width: "100%" }}
        />
      </BasicCard>
    </>
  );
};

export default Home;
