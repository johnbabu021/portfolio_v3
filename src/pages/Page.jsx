import { Stack } from "@mui/material";
import Header from "../components/Header/Header";

export default function Page({ children }) {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Stack direction="column" sx={{ maxWidth: "700px" }}>
        <Header />
        {children}
      </Stack>
    </div>
  );
}
