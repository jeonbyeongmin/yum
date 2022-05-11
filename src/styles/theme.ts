const useMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  pc: useMediaQuery(1440),
  tablet: useMediaQuery(768),
  mobile: useMediaQuery(576),
};

export const theme = {
  colors: {
    primary: 'orange',
  },
};
