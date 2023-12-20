export type RestyleExtendedProps = {
  /**
   * Enable to using {flex:1}
   * @default undefined
   */
  fill?: boolean;

  /**
   * Applies Stylesheet.absoluteFillObject
   * @default undefined
   */
  absoluteFill?: boolean;

  /**
   * Set width = '100%'
   * Set height = '100%'
   * @default undefined
   */
  fullSize?: boolean;

  /**
   * Set true for using alignItems = 'center'
   * Set true for using justifyContent = 'center'
   * @default undefined
   */
  center?: boolean;

  /**
   * Set true for using justifyContent = 'space-between'
   * @default undefined
   */
  between?: boolean;

  /**
   * Set true for using justifyContent = 'space-around'
   * @default undefined
   */
  around?: boolean;
};

export type ResponsiveValue<T> = T | T[];
