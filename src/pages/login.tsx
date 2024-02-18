import React from "react";
import { BasicCard, BasicGrid, BasicTextField, Button } from "../components";
import { Grid, Typography } from "@mui/material";

import { Controller, useForm, FormProvider } from "react-hook-form";
import { LoginSchemaType, loginSchema } from "../core/schema/login-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../core/api/api";
import { AxiosResponse } from "axios";
import { useEncrypt } from "../core/hooks/useEncrypt";
import { UserSchemaType } from "../core/schema/user-validation";

const Login: React.FC = () => {
  const form = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: loginSchema.getDefault(),
  });
  const { control, handleSubmit } = form;
  const { decrypt } = useEncrypt();

  const onLogin = (values: LoginSchemaType) => {
    const response = useApi.checkUsername(values.username);
    return response.then((res: AxiosResponse) => {
      if (res.data?.length > 0) {
        // call api again for username and password
        res.data?.length > 0 &&
          res.data.map((item: UserSchemaType) => {
            if (
              values.password === decrypt({ encryptedPassword: item.password })
            ) {
              alert("Successfully Login");
              localStorage.setItem(
                "accessToken",
                item.token ?? "no-token-found"
              );
            } else {
              alert("Password is invalid");
            }
          });
      } else {
        alert("No account is associated with that username.");
      }
    });
  };

  return (
    <>
      <BasicGrid
        sx={{ mt: 5 }}
        columnSpacing={{ xs: 1, md: 2, lg: 3 }}
        rowSpacing={1}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <BasicCard>
            <Typography variant="button">Login</Typography>
            <FormProvider {...form}>
              <Controller
                control={control}
                name="username"
                shouldUnregister
                render={({
                  field: { name, onChange },
                  fieldState: { error },
                }) => (
                  <BasicTextField
                    name={name}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                    label="Username"
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    sx={{ mt: 2, mb: 2 }}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                shouldUnregister
                render={({
                  field: { name, onChange },
                  fieldState: { error },
                }) => (
                  <BasicTextField
                    name={name}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                    label="Password"
                    helperText={error?.message}
                    error={Boolean(error?.message)}
                    type="password"
                    sx={{ mt: 2, mb: 2 }}
                  />
                )}
              />
            </FormProvider>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              size="small"
              onClick={handleSubmit(onLogin)}
            >
              Login
            </Button>
          </BasicCard>
        </Grid>
        <Grid item xs={4}></Grid>
      </BasicGrid>
    </>
  );
};

export default Login;
