import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinkComponent({ to, children, sx = {}, ...rest }) {
  return (
    <Box
      sx={{
        color: "#333",
        transition: "0.1s ease-in-out",
        border: "2px solid transparent",
        "&:hover": {
          color: "#9375fd",
          borderBottom: "2px solid #3700ff",
        },
        ...sx,
      }}
    >
      <Link to={to} {...rest}>
        {children}
      </Link>
    </Box>
  );
}
