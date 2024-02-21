import { Stack, Typography } from "@mui/material";
import ShowCaseWrapper from "../../components/showcaseWrapper/ShowCaseWrapper";
import Page from "../Page";

export default function BlogPage() {
  return (
    <Page>
      <Stack
        direction="column"
        alignItems={"flex-start"}
        spacing={1}
        sx={{ pt: 2, pb: 2 }}
      >
        <Typography variant="h4" component={"h4"} sx={{ fontWeight: "bold" }}>
          Blog Posts
        </Typography>
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
          shortDescription={
            "How Bitcoin Can Provide Stimulus To Quantum Computing Development"
          }
        />
      </Stack>
    </Page>
  );
}
