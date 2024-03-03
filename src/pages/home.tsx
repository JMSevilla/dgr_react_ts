import React, { useEffect, useState } from "react";
import {
  Header,
  BasicCard,
  BasicGrid,
  BasicTextField,
  Button as MuiButton,
  AlertDialog,
} from "../components";
import { Grid, Typography, Button, Box } from "@mui/material";

import { Control, Controller, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema, UserSchemaType } from "../core/schema/user-validation";
import {
  userEditSchema,
  UserEditSchemaType,
} from "../core/schema/user-edit-schema";
import { useDataSubmit } from "../core/hooks/useDataSubmit";
import { useUserContext } from "../core/UserContext";
import { DataGrid } from "../components";
import { GridColDef } from "@mui/x-data-grid";
import { useAlertContext } from "../core/AlertContext";
import useApi from "../core/api/api";

const Home: React.FC = () => {
  const [state, setState] = useState(false);
  const { MuiAlert } = useAlertContext();
  const form = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
    mode: "all",
    defaultValues: userSchema.getDefault(),
  });

  const formEdit = useForm<UserEditSchemaType>({
    resolver: yupResolver(userEditSchema),
    mode: "all",
    defaultValues: userEditSchema.getDefault(),
  });

  const { handleSubmit, control, setValue } = form;
  const { submitButton } = useDataSubmit({
    handleSubmit: handleSubmit,
  });
  const { data } = useUserContext();

  const handleEditData = (params: UserEditSchemaType) => {
    setState(!state);
    formEdit.setValue("id", params.id);
    formEdit.setValue("firstname", params.firstname);
    formEdit.setValue("lastname", params.lastname);
    formEdit.setValue("middlename", params.middlename);
    formEdit.setValue("username", params.username);
  };

  const handleContinue = () => {
    const values = formEdit.getValues();
    useApi.updateUserProfile(values);
  };

  const handleId = (id: string) => {
    const confirm = window.confirm("Are you sure you want delete this user?");
    if (confirm) {
      // api
      useApi.deleteUser(id);

      // Class classname = new Class()
    }
  };

  const columns = [
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
    {
      headerName: "Actions",
      sortable: false,
      width: 220,
      renderCell: (params: any) => {
        return (
          <>
            <div style={{ display: "flex" }}>
              <Button
                onClick={() =>
                  handleEditData({
                    id: params.row.id,
                    firstname: params.row.firstname,
                    lastname: params.row.lastname,
                    middlename: params.row.middlename,
                    username: params.row.username,
                  })
                }
                variant="text"
                size="small"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleId(params.row.id)}
                variant="text"
                size="small"
                color="error"
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    setValue("userType", "admin");
  }, []);
  return (
    <>
      <AlertDialog
        handleClose={() => setState(false)}
        handleContinue={handleContinue}
        maxWidth="md"
        open={state}
        continueButtonText="Continue"
        isValid={formEdit.formState.isValid}
        dialogTitle="Edit User Data"
      >
        <FormProvider {...formEdit}>
          <Controller
            control={formEdit.control}
            name="firstname"
            shouldUnregister
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <BasicTextField
                sx={{ mt: 2, mb: 2 }}
                required
                onChange={onChange}
                helperText={error?.message}
                error={Boolean(error?.message)}
                label="Firstname"
                variant="outlined"
                value={value ?? ""}
                fullWidth
              />
            )}
          />
          <Controller
            control={formEdit.control}
            name="middlename"
            render={({ field: { onChange, value } }) => (
              <BasicTextField
                sx={{ mt: 2, mb: 2 }}
                onChange={onChange}
                label="Middlename (Optional)"
                variant="outlined"
                fullWidth
                value={value ?? ""}
              />
            )}
          />
          <Controller
            control={formEdit.control}
            name="lastname"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <BasicTextField
                sx={{ mt: 2, mb: 2 }}
                required
                onChange={onChange}
                helperText={error?.message}
                error={Boolean(error?.message)}
                label="Lastname"
                variant="outlined"
                fullWidth
                value={value ?? ""}
              />
            )}
          />
          <Controller
            control={formEdit.control}
            name="username"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <BasicTextField
                sx={{ mt: 2, mb: 2 }}
                required
                onChange={onChange}
                helperText={error?.message}
                error={Boolean(error?.message)}
                label="Username"
                variant="outlined"
                fullWidth
                value={value ?? ""}
              />
            )}
          />
        </FormProvider>
      </AlertDialog>
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
          data={data?.length > 0 ? data : []}
          columns={columns}
          loading={false}
          sx={{ width: "100%" }}
        />
      </BasicCard>
    </>
  );
};

export default Home;
