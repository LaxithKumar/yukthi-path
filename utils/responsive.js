/**
 * Responsive utilities — Scale dimensions based on screen size.
 */
import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Reference design dimensions (iPhone 14 Pro)
const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

/**
 * Width percentage — returns value based on screen width percentage.
 * @param {number} percent - 0 to 100
 */
export const wp = (percent) => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * percent) / 100);
};

/**
 * Height percentage — returns value based on screen height percentage.
 * @param {number} percent - 0 to 100
 */
export const hp = (percent) => {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * percent) / 100);
};

/**
 * Font scaler — scales font size relative to design width.
 * @param {number} size - design font size
 */
export const fp = (size) => {
  const scale = SCREEN_WIDTH / DESIGN_WIDTH;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

/**
 * Normalize a pixel value to work across different densities.
 * @param {number} size
 */
export const normalize = (size) => {
  const scale = SCREEN_WIDTH / DESIGN_WIDTH;
  return Math.round(size * scale);
};

export default { wp, hp, fp, normalize };
