export const getCommaFormatting = (str: string) => {
  return str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
