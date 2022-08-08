import { Box, Typography } from "@mui/material";

export default function ComponentHeading({ title, description }) {
  return (
    <Box
      textAlign={"center"}
      px={{ xs: 2, sm: 0 }}
      pb={{ xs: "2rem", sm: "3rem", md: "3rem" }}
    >
      <h1>{title}</h1>
      {description && (
        <Typography variant="caption" color="secondary">
          {description}
        </Typography>
      )}
    </Box>
  );
}
