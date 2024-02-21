import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { monthConvertor } from "../../helpers/date";

export default function ShowCaseWrapper({
  linkText,
  linkUrl,
  date,
  shortDescription,
}) {
  const blogDate = new Date(date);
  return (
    <Stack direction="row" spacing={2} alignItems={"center"}>
      <Stack direction="column" sx={{ width: "80px" }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "50px", fontWeight: "bolder" }}
        >
          {blogDate.getDate()}
        </Typography>
        <Typography variant="body2">
          {monthConvertor(blogDate.getMonth())} {blogDate.getFullYear()}
        </Typography>
      </Stack>
      <Stack direction={"column"} spacing={2} alignItems={"flex-start"}>
        <Typography
          variant="h5"
          component={"h5"}
          sx={{
            fontSize: "20px",
            color: "#3700ff",
            transition: "0.1s ease-in-out",
            alignItems: "start",
            maxWidth: "70vw",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "inherit",
            borderBottom: "2px solid transparent",
            "&:hover": {
              color: "#9375fd",
              borderBottom: "2px solid #3700ff",
            },
          }}
        >
          <Link
            to={linkUrl}
            style={{
              color: "inherit",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {linkText}
            {/* How Bitcoin Can Provide Stimulus To Quantum Computing Development */}
          </Link>
        </Typography>
        <Typography
          variant="body1"
          component={"body1"}
          sx={{
            color: "#333",
            maxWidth: "70vw",
            textAlign: "start",
          }}
        >
          {shortDescription}
          {/* How Bitcoin Can Provide Stimulus To Quantum Computing Development */}
        </Typography>
      </Stack>
    </Stack>
  );
}
