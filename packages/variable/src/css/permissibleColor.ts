type PermissibleColorRule = Record<string, Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, `#${string}`>>;

export const permissibleColor = {
  app: {
    100: "#E7EEF3",
    200: "#CCDBE6",
    300: "#ACC7D8",
    400: "#86B1CA",
    500: "#4F97BA",
    600: "#0F698A",
    700: "#003E5D",
    800: "#001933",
    900: "#00000E",
  },
  neutral: {
    100: "#F6F6F6",
    200: "#EEEEEE",
    300: "#D4D4D4",
    400: "#AAAAAA",
    500: "#8E8E8E",
    600: "#727272",
    700: "#565656",
    800: "#2a2a2a",
    900: "#1D1D1D",
  },
  red: {
    100: "#FFE5E4",
    200: "#FFC7C6",
    300: "#FFA4A1",
    400: "#FF7672",
    500: "#FF2400",
    600: "#C30000",
    700: "#8A0000",
    800: "#5A0000",
    900: "#480000",
  },
  blue: {
    100: "#E6E4FF",
    200: "#CAC6FF",
    300: "#A8A1FF",
    400: "#7F72FF",
    500: "#3F00FF",
    600: "#0000CA",
    700: "#000097",
    800: "#000069",
    900: "#000040",
  },
  yellow: {
    100: "#FFF8E4",
    200: "#FEF1C6",
    300: "#FEEAA2",
    400: "#FDE273",
    500: "#FDDA0D",
    600: "#C5A900",
    700: "#907A00",
    800: "#604F00",
    900: "#3D2600",
  },
  green: {
    100: "#E7F5EA",
    200: "#CCEBD4",
    300: "#ADE0BA",
    400: "#87D49D",
    500: "#50C878",
    600: "#02964B",
    700: "#006720",
    800: "#003A00",
    900: "#001C00",
  },
} as const satisfies PermissibleColorRule;
