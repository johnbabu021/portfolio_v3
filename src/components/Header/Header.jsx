import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedinIcon from "../../assets/icons/LInkedinIcon";
import TwitterIcon from "../../assets/icons/twitterIcon";
import LinkComponent from "../Link/Link";
import NavigateLink from "./NavigateLink";
export default function Header() {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        width={"700px"}
        sx={{
          maxWidth: "90vw",
        }}
      >
        <img
          src="https://image.freepik.com/free-vector/young-man-head-with-beard-avatar-character_24877-36786.jpg"
          style={{
            width: "70px",
            height: "70px",
          }}
        ></img>
        <Typography
          variant="h1"
          component={"h1"}
          sx={{
            fontSize: "50px",
            color: "#333",
            transition: "0.1s ease-in-out",
            "&:hover": {
              color: "#9375fd",
              textDecoration: "underline",
              textDecorationColor: "#3700ff",
              textDecorationThickness: "5px",
            },
          }}
        >
          <Link
            to={"/"}
            style={{
              color: "inherit",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            John Babu
          </Link>
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          marginLeft: "73px",
        }}
      >
        <Typography variant="body2" component={"body2"}>
          tech, investing and cooking
        </Typography>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <LinkComponent to="/">
            <LinkedinIcon />
          </LinkComponent>
          <LinkComponent to="/">
            <TwitterIcon />
          </LinkComponent>
          <LinkComponent to="/">
            <GithubIcon />
          </LinkComponent>
        </Stack>
      </Stack>
      <div style={{ height: "1px", background: "#ccc", width: "100%" }}></div>
      <Stack direction={"row"} spacing={2} sx={{ paddingTop: "10px" }}>
        <NavigateLink to="/">Home </NavigateLink>
        <NavigateLink to="/blogs">Blog </NavigateLink>
        <NavigateLink to="/projects">Projects </NavigateLink>
        <NavigateLink to="/tags">Tags </NavigateLink>
        <NavigateLink to="/">About </NavigateLink>
        <NavigateLink to="/">Contact </NavigateLink>
      </Stack>
    </>
  );
}
