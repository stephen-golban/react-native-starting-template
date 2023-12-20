const COLORS = {
  black: 'rgb(0,0,0)',
  white: 'rgb(255,255,255)',
  transparent: 'transparent',

  black_40: 'rgba(0,0,0,0.4)',
  black_50: 'rgba(0,0,0,0.5)',
  black_60: 'rgba(0,0,0,0.6)',
  black_70: 'rgba(0,0,0,0.7)',
  black_80: 'rgba(0,0,0,0.8)',

  primary: 'rgb(0, 87, 255)',
  zodiac_blue: 'rgb(14, 23, 71)',
  background: 'rgb(248, 248, 249)',
  cadet_blue: 'rgb(169, 173, 195)',

  // @react-navigation/native NavigatorContainer Theme colors
  line: 'gray',
  info: '#ffd700',
  text: 'rgb(28, 28, 30)',
  error: 'rgb(255, 59, 48)',
  card: 'rgb(255, 255, 255)',
  border: 'rgb(216, 216, 216)',
  notification: 'rgb(255, 59, 48)',
};

type Color = keyof Colors;
type Colors = typeof COLORS;

export default COLORS;
export type { Color, Colors };
