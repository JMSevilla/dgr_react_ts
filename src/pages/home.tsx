import React, { useEffect, useState } from "react";
import { Header, BasicCard, BasicGrid, BasicTextField } from "../components";
import { Grid, Typography, Button } from "@mui/material";
import { useSubmit } from "../core/hooks/useSubmit";
import { MockDataProps } from "../core/types/types";

const obj: MockDataProps = {
  id: 0,
  title: "",
  views: 0,
};

const Home: React.FC = () => {
  const [mockData, setMockData] = useState<MockDataProps>(obj);

  const { initializedPost } = useSubmit(mockData); //updated > ready

  const handleOnChange = (event: any) => {
    const value = event.currentTarget.value;
    const name = event.target.name;

    setMockData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    // validation..
    initializedPost();
  };

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
              <Button onClick={onSubmit} variant="outlined" size="small">
                Submit
              </Button>
            }
          >
            <Typography variant="button">Create account form</Typography>
            <BasicTextField
              variant="standard"
              size="small"
              label="id"
              value={mockData.id}
              name="id"
              onChange={handleOnChange}
              fullWidth
              sx={{
                mt: 2,
                mb: 2,
              }}
            />

            <BasicTextField
              variant="outlined"
              size="small"
              label="title"
              value={mockData.title}
              name="title"
              onChange={handleOnChange}
              fullWidth
              sx={{
                mt: 2,
                mb: 2,
              }}
            />

            <BasicTextField
              variant="outlined"
              size="small"
              label="views"
              value={mockData.views}
              name="views"
              onChange={handleOnChange}
              fullWidth
              sx={{
                mt: 2,
                mb: 2,
              }}
            />
          </BasicCard>
        </Grid>
        <Grid item xs={4}></Grid>
      </BasicGrid>
    </>
  );
};

export default Home;
