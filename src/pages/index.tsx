import React from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import BillingCard from "../components/BillingCard";

const Index: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const plans = [
    {
      planName: "Starter",
      price: "9",
      period: "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 3 projects",
        "5GB storage",
        "Email support",
        "Basic analytics",
        "SSL certificate",
      ],
      onSelectPlan: () => console.log("Starter plan selected"),
    },
    {
      planName: "Professional",
      price: "29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom domain",
        "Team collaboration",
        "API access",
      ],
      onSelectPlan: () => console.log("Professional plan selected"),
    },
    {
      planName: "Enterprise",
      price: "99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "1TB storage",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label options",
      ],
      onSelectPlan: () => console.log("Enterprise plan selected"),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}10 100%)`,
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 800,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Choose Your Plan
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1.125rem", sm: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            Select the perfect plan for your needs. Upgrade or downgrade at any
            time.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, sm: 4 },
            justifyContent: "center",
            alignItems: "stretch",
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "none", md: "1" },
                display: "flex",
                justifyContent: "center",
                maxWidth: { xs: "100%", sm: 400, md: "none" },
                mx: "auto",
              }}
            >
              <BillingCard {...plan} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 4, sm: 6 },
            px: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.875rem",
            }}
          >
            All plans include a 14-day free trial. No credit card required.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
