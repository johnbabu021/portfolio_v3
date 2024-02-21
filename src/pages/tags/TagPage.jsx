import { Stack, Typography } from "@mui/material";
import NavigateLink from "../../components/Header/NavigateLink";
import Page from "../Page";

export default function TagPage() {
  return (
    <Page>
      <Stack direction="column" alignItems={"flex-start"} spacing={3}>
        <Typography
          variant="h4"
          component={"h4"}
          sx={{ fontWeight: "bold", pt: 2 }}
        >
          Tags
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <NavigateLink to="/">Crypto currency </NavigateLink>
          <NavigateLink to="/">Development </NavigateLink>
          <NavigateLink to="/">Api </NavigateLink>
          <NavigateLink to="/">Security </NavigateLink>
        </Stack>
      </Stack>
    </Page>
  );
}
