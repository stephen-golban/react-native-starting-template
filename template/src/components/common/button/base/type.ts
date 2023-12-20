import type { Color } from '@theme/colors';
import type { TextProps } from '../../text';
import type { I18nKeys } from '@library/i18n';

export interface ExtendedButtonProps {
  /**
   * Applies a loading preset to the button
   * @default undefined
   */
  loading?: boolean;

  /**
   * Applies props for the @common/text component.
   * @default undefined
   */
  textProps?: TextProps;

  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  t18n?: I18nKeys;

  /**
   * Using text instead i18n
   * @default undefined
   */
  text?: string;

  /**
   * Using color for text
   * @default undefined
   */
  textColor?: Color;

  /**
   * Disable button when press
   */
  throttleMs?: number;
}
