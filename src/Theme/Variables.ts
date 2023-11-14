/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export enum Colors {
  TRANSPARENT = "rgba(0,0,0,0)",
  INPUT_BACKGROUND = "#FFFFFF",
  WHITE = "#ffffff",
  TEXT = "#212529",
  PRIMARY = "#E14032",
  SUCCESS = "#28a745",
  ERROR = "#dc3545",
}

export enum NavigationColors {
  PRIMARY = Colors.PRIMARY,
}

/**
 * FontSize
 */
export enum FontSize {
  TINY=10,
  SMALL = 12,
  REGULAR = 14,
  LARGE = 16,
  VERY_LARGE = 18,
}

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const medium = small * 2; //20
const large = regular * 2; // 30
const large_bradius = 15;
const base_bradius = 8;
const border_width = 1;
const base_icon_size = 24;
const small_button = 40;
export enum MetricsSizes {
  TINY = tiny,
  SMALL = small,
  REGULAR = regular,
  LARGE = large,
  LARGE_BRADIUS = large_bradius,
  BASE_BRADIUS = base_bradius,
  BASE_PADDING = small,
  LARGE_PADDING = medium,
  VERY_LARGE_PADDING = medium*2,
  BORDER_WIDTH = border_width,
  BASE_ICON_SIZE = base_icon_size,
  SMALL_BUTTON = small_button,
}
