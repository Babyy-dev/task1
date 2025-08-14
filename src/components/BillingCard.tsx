import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Check, Star } from "@mui/icons-material";

export interface BillingCardProps {
  planName: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  onSelectPlan: () => void;
  isPopular?: boolean;
  currency?: string;
  description?: string;
  disabled?: boolean;
}

const BillingCard: React.FC<BillingCardProps> = ({
  planName,
  price,
  period = "/month",
  features,
  buttonText = "Select Plan",
  onSelectPlan,
  isPopular = false,
  currency = "$",
  description,
  disabled = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectPlan();
    }
  };

  const handleButtonKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelectPlan();
    }
  };

  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: isMobile ? "100%" : isTablet ? 350 : 380,
        mx: "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        border: isPopular
          ? `2px solid ${theme.palette.primary.main}`
          : "1px solid rgba(0, 0, 0, 0.06)",
        transform: isPopular ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: disabled
            ? "none"
            : isPopular
            ? "scale(1.05)"
            : "scale(1.02)",
          boxShadow: disabled ? "none" : "0 12px 32px rgba(0, 0, 0, 0.15)",
        },
        "&:focus-within": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
      tabIndex={disabled ? -1 : 0}
      onKeyPress={handleKeyPress}
      role="button"
      aria-label={`${planName} pricing plan`}
      aria-disabled={disabled}
    >
      {isPopular && (
        <Box
          sx={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <Chip
            icon={<Star sx={{ fontSize: "16px !important" }} />}
            label="Most Popular"
            color="primary"
            size="small"
            sx={{
              fontWeight: 600,
              fontSize: "0.75rem",
              px: 1,
              "& .MuiChip-icon": {
                fontSize: 16,
              },
            }}
          />
        </Box>
      )}

      <CardContent
        sx={{
          p: isMobile ? 2.5 : 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 0.5,
              fontSize: isMobile ? "1.25rem" : "1.5rem",
            }}
          >
            {planName}
          </Typography>

          {description && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              {description}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 0.5,
              mb: 1,
            }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
                fontSize: isMobile ? "2.5rem" : "3rem",
                lineHeight: 1,
              }}
            >
              {currency}
              {price}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: isMobile ? "0.875rem" : "1rem",
              }}
            >
              {period}
            </Typography>
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ flex: 1 }}>
          <List
            sx={{
              py: 0,
              "& .MuiListItem-root": {
                px: 0,
                py: 0.75,
                alignItems: "flex-start",
              },
            }}
          >
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    mt: 0.25,
                  }}
                >
                  <Check
                    sx={{
                      color: theme.palette.success.main,
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: {
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      fontSize: isMobile ? "0.875rem" : "0.9rem",
                      lineHeight: 1.5,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CTA Button */}
        <Box sx={{ mt: "auto", pt: 2 }}>
          <Button
            variant={isPopular ? "contained" : "outlined"}
            color="primary"
            fullWidth
            size="large"
            onClick={onSelectPlan}
            onKeyPress={handleButtonKeyPress}
            disabled={disabled}
            sx={{
              py: 1.5,
              fontSize: isMobile ? "0.875rem" : "1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:focus": {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
            aria-label={`Select ${planName} plan`}
          >
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BillingCard;
