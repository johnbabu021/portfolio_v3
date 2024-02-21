import { Stack, Typography } from "@mui/material";
import ShowCaseWrapper from "../../components/showcaseWrapper/ShowCaseWrapper";
import Page from "../Page";
export default function HomePage() {
  return (
    <Page>
      <Stack direction="column" alignItems={"flex-start"} spacing={2}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "500",
            maxWidth: "90vw",
            fontSize: "16px",
            lineHeight: 1.6,
            textAlign: "start",
            mt: 5,
            pt: 2,
            pb: 2,
          }}
        >
          Hello! I am John. I write code and automate things to conserve human
          time,Intrested in Fin-Tech solutions. I do financial analysis. I like
          to invest,trade and work for startups ideas. I work on ReactJS,
          NextJS, MongoDB, Firebase, GraphQL, Elastic Stack ,short term trading
          for bread and butter
        </Typography>
        <Typography variant="h4" component={"h4"} sx={{ fontWeight: "bold" }}>
          Recent Posts
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
