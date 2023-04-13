import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$ignite500",
        color: "$white",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },
      secondary: {
        color: "$ignite300",
        border: "1px solid $ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "#FFF"
        },

        "&:disabled": {
          color: "$gray200",
          borderColor:"$gray200"
        },
      },
      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "#FFF"
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button"