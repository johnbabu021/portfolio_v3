import { Stack, Typography } from "@mui/material";
import ShowCaseWrapper from "../../components/showcaseWrapper/ShowCaseWrapper";
import Page from "../Page";

export default function ProjectPage() {
  return (
    <Page>
      <Stack direction="column" alignItems={"flex-start"} spacing={3}>
        <Typography
          variant="h4"
          component={"h4"}
          sx={{ fontWeight: "bold", pt: 2, pb: 2 }}
        >
          Recent projects
        </Typography>
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={"Quizzy"}
          shortDescription={"Quiz application"}
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={"Beeper"}
          shortDescription={"Chat application"}
        />
        <ShowCaseWrapper
          date={new Date()}
          linkUrl={"/"}
          linkText={"Sweet gradients"}
          shortDescription={"graident selector"}
        />
      </Stack>
    </Page>
  );
}
