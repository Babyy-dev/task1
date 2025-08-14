import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { Home } from "@mui/icons-material";

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}10 100%)`,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            py: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "6rem" },
              fontWeight: 800,
              color: theme.palette.primary.main,
              mb: 2,
              lineHeight: 1,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Oops! Page not found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Home />}
            onClick={handleGoHome}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
