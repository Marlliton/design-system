import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "1px solid $gray900",
  display: "flex",
  alignItems: "center",

  variants: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  "&:focus-within": {
    borderColor: "$ignite300",
  },

  // "&:has(input:focus)": {
  //   borderColor: "$ignite300",
  // },

  "&.disabled": {
    borderColor: "$ignite300",
    opacity: 0.5,
    cursor: "not-allowed",
  },

  // "&:has(input:disabled)": {
  //   opacity: 0.5,
  //   cursor: "not-allowed",
  // },

  defaultVariants: {
    size: "md",
  },
});
export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular",
});
export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  outline: 0,
  width: "100%",
  height: "100%",

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400"
  }
});
