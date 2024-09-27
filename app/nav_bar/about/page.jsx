import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body">Welcome to our website!</Typography>
      </Box>
    </Container>
  );
}
