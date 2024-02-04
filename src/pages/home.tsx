import React, { useEffect } from "react";
import { Header, BasicCard, BasicGrid } from "../components";
import { Grid, Typography, Button } from "@mui/material";
import { HttpRequest } from "../core/api/api";
import { AxiosResponse } from "axios";

const Home: React.FC = () => {
  const fetch = () => {
    const result = new HttpRequest().fetchUsers();
    return result;
  };

  useEffect(() => {
    fetch().then((response: AxiosResponse) => console.log(response.data));
  }, []);
  return (
    <>
      <Header title={"News"} />
      <BasicGrid
        sx={{ mt: 10 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={1}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <BasicCard
            elevation={5}
            element={
              <Button variant="outlined" size="small">
                Submit
              </Button>
            }
          >
            <Typography variant="button">Create account form</Typography>
          </BasicCard>
        </Grid>
        <Grid item xs={4}></Grid>
      </BasicGrid>
    </>
  );
};

export default Home;
