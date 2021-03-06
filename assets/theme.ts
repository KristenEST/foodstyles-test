import { StyleSheet } from 'react-native';

export const colors = {
  GREYISH_BROWN_30: 'rgba(111, 93, 80, 0.3)',
  SECONDARY_BUTTON_BACKGROUND: '#ececec',
  GREYISH_BROWN_30_20: 'rgba(111, 93, 80, 0.2)',
  GREYISH_BROWN: '#434343',
  BACKGROUND_GRAY: '#f8f8f8',
  AQUA_GREEN: '#11ce90',
  TOMATO: '#f13838',
  WHITE_TWO: '#d9d9d9',
  WHITE_80: 'rgba(242, 242, 242, 0.8)',
  BLACK: '#000000',
  ORANGE_RED: '#ff3b30',
  BRIGHT_BLUE: '#007aff',
  EGGPLANT_40: 'rgba(4, 4, 15, 0.4)',
  WHITE: '#ffffff',
  MAIZE: '#f3c442',
  GREYISH_40: 'rgba(176, 176, 176, 0.4)',
  GREEN_TEAL: '#11b777',
  ORANGISH: '#fa7745',
};

export enum SPACINGS {
  BASE = 8,
  XS = 4,
  S = 8,
  M = 32,
}

export const textStyles = StyleSheet.create({
  TEXT_STYLE_5: {
    fontFamily: 'ProximaNovaAltBold',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
  TEXT_STYLE_7: {
    fontFamily: 'ProximaNovaAltBold',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_6: {
    fontFamily: 'ProximaNovaAltBold',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_3: {
    fontFamily: 'ProximaNovaAltRegular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
  TEXT_STYLE_2: {
    fontFamily: 'ProximaNovaAltSemibold',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE: {
    fontFamily: 'ProximaNovaAltSemibold',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_4: {
    fontFamily: 'ProximaNovaAltSemibold',
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
});
