import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function NavigateLink({ to, children }) {
  let { pathname } = useLocation();
  console.log({ pathname });
  return (
    <Typography
      variant="body1"
      component={"body1"}
      sx={{
        color: "#3700ff",

        transition: "0.1s ease-in-out",
        border: "2px solid transparent",
        ...(pathname === to && {
          borderBottom: "2px solid #3700ff",
        }),
        "&:hover": {
          color: "#9375fd",
          borderBottom: "2px solid #3700ff",
        },
      }}
    >
      <Link
        to={to}
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </Typography>
  );
}
