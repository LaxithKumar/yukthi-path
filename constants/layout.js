/**
 * Layout constants for responsive design.
 */
import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Design reference dimensions (iPhone 14 Pro)
const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

export const Layout = {
  window: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  isSmallDevice: SCREEN_WIDTH < 375,
  isMediumDevice: SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414,
  isLargeDevice: SCREEN_WIDTH >= 414,
  statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0,
  bottomTabHeight: 80,
  headerHeight: 56,
};

/**
 * Scale a value based on screen width relative to design width.
 */
export const wp = (widthPercent) => {
  return (SCREEN_WIDTH * widthPercent) / 100;
};

/**
 * Scale a value based on screen height relative to design height.
 */
export const hp = (heightPercent) => {
  return (SCREEN_HEIGHT * heightPercent) / 100;
};

/**
 * Scale font size based on screen width.
 */
export const fp = (size) => {
  const scale = SCREEN_WIDTH / DESIGN_WIDTH;
  const newSize = size * scale;
  return Math.round(newSize);
};

export default Layout;
