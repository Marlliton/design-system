"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultiStep: () => MultiStep,
  Text: () => Text,
  TextInput: () => TextInput,
  Textarea: () => Textarea,
  Toast: () => Toast2,
  ToastContext: () => ToastContext,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip2,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme,
  useToast: () => useToast
});
module.exports = __toCommonJS(src_exports);

// styles/index.ts
var import_react = require("@stitches/react");

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// styles/index.ts
var { config, createTheme, css, globalCss, keyframes, styled, theme } = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "solid 1px $gray600"
});
Box.displayName = "Box";

// components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  overflow: "hidden",
  height: "$16",
  width: "$16",
  borderRadius: "$full",
  display: "inline-block"
});
var AvatarImage = styled(Avatar.Image, {
  height: "100%",
  width: "100%",
  borderRadius: "inherit",
  objectFit: "cover"
});
var AvatarFallback = styled(Avatar.Fallback, {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray800",
  color: "$gray600",
  svg: {
    height: "$6",
    width: "$6"
  }
});

// components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// components/Button.tsx
var Button = styled("button", {
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
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0, 0, 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$ignite500",
        color: "$white",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
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
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "#FFF"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// components/TextInput/index.tsx
var import_react2 = require("react");

// components/TextInput/styles.ts
var TextInputContainer = styled("div", {
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
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:focus-within": {
    borderColor: "$ignite300"
  },
  // "&:has(input:focus)": {
  //   borderColor: "$ignite300",
  // },
  "&.disabled": {
    borderColor: "$ignite300",
    opacity: 0.5,
    cursor: "not-allowed"
  },
  // "&:has(input:disabled)": {
  //   opacity: 0.5,
  //   cursor: "not-allowed",
  // },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
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
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// components/TextInput/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextInput = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, rest = __objRest(_b, ["prefix"]);
    const hasDisabled = rest.disabled;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, { className: hasDisabled ? "disabled" : "", children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Prefix, { children: prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadValues({ ref }, rest))
    ] });
  }
);
TextInput.displayName = "TextInput";

// components/Textarea.tsx
var Textarea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "1px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  // "&:has(input:focus)": {
  //   borderColor: "$ignite300",
  // },
  "&::placeholder": {
    color: "$gray400"
  },
  "&:disabled": {
    borderColor: "$ignite300",
    opacity: 0.5,
    cursor: "not-allowed"
  }
  // "&:has(input:disabled)": {
  //   opacity: 0.5,
  //   cursor: "not-allowed",
  // },
});
Textarea.displayName = "Textarea";

// components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  height: "$6",
  width: "$6",
  backgroundColor: "$gray900",
  lineHeight: 0,
  borderRadius: "$xs",
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  "&:focus, &[data-state='checked']": {
    border: "2px solid $ignite300"
  },
  "&[data-state='checked']": {
    backgroundColor: "$ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  height: "$4",
  width: "$4",
  "&[data-state='checked']": {
    animation: `${slideIn} 200ms ease-in-out`
  },
  "&[data-state='unchecked']": {
    animation: `${slideOut} 200ms ease-in-out`
  }
});

// components/Checkbox/index.tsx
var import_phosphor_react2 = require("phosphor-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_phosphor_react2.Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--step-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  background: "$gray600",
  height: "$1",
  borderRadius: "$px",
  variants: {
    active: {
      true: {
        background: "$gray100"
      }
    }
  }
});

// components/MultiStep/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MultiStepContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Steps, { css: { "--step-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// components/Toast/index.tsx
var import_phosphor_react3 = require("phosphor-react");
var ToastRadix = __toESM(require("@radix-ui/react-toast"));

// components/Toast/styles.ts
var Toast = __toESM(require("@radix-ui/react-toast"));
var VIEWPORT_PADDING = 32;
var hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var slideIn2 = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" }
});
var swipeOut = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});
var ToastContainer = styled(Toast.Root, {
  backgroundColor: "$gray800",
  color: "$white",
  borderRadius: "$sm",
  border: "1px solid $gray600",
  padding: "$3 $5",
  fontFamily: "$default",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  '&[data-state="open"]': {
    animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))"
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out"
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`
  }
});
var ToastTitle = styled(Toast.Title, {
  fontSize: "$md",
  fontWeight: "$bold",
  paddingBottom: "$1"
});
var ToastDescription = styled(Toast.Description, {
  color: "$gray400",
  fontSize: "$sm"
});
var ToastClose = styled(Toast.Close, {
  all: "unset",
  lineHeight: 0,
  cursor: "pointer",
  position: "absolute",
  right: 16,
  top: 16
});
var ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: "$8",
  right: "$8",
  padding: VIEWPORT_PADDING,
  listStyle: "none",
  width: 360,
  maxWidth: "100vw",
  zIndex: 999999
});

// components/Toast/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Toast2(_a) {
  var _b = _a, { description, title } = _b, rest = __objRest(_b, ["description", "title"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ToastRadix.Provider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ToastContainer, __spreadProps(__spreadValues({}, rest), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastClose, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_phosphor_react3.X, { weight: "bold" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastDescription, { children: description })
    ] })),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastViewport, {})
  ] });
}

// components/Tooltip/index.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));

// components/Tooltip/styles.ts
var Tooltip = __toESM(require("@radix-ui/react-tooltip"));
var slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var TooltipContent = styled(Tooltip.Content, {
  borderRadius: 4,
  padding: "$3 $4",
  fontSize: 15,
  lineHeight: 1,
  color: "$gray100",
  backgroundColor: "$gray800",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade }
  },
  marginBottom: -5
});
var TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$gray800",
  width: 16,
  height: 10
});

// components/Tooltip/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Tooltip2(_a) {
  var _b = _a, { children, content } = _b, rest = __objRest(_b, ["children", "content"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(TooltipPrimitive.Root, __spreadProps(__spreadValues({}, rest), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Trigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(TooltipContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipArrow, {}),
      content
    ] }) })
  ] })) });
}

// context/ToastContext.tsx
var import_react3 = require("react");
var Toast3 = __toESM(require("@radix-ui/react-toast"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var ToastContext = (0, import_react3.createContext)({});
function ToastProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ToastContext.Provider, { value: { teste: "testando" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Toast3.Provider, { swipeDirection: "right", children }) });
}
function useToast() {
  const context = (0, import_react3.useContext)(ToastContext);
  return context;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
  Textarea,
  Toast,
  ToastContext,
  ToastProvider,
  Tooltip,
  config,
  createTheme,
  css,
  globalCss,
  keyframes,
  styled,
  theme,
  useToast
});
