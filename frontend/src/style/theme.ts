import media from './mediaQuery';
import { Theme } from '@emotion/react';

const light: Theme = {
  colors: {
    success: '#67c23a',
    danger: '#d83a52',
    info: '#40a6fd',
    warning: '#cd9500',
  },
  ink: {
    buttonText: '#ffffff',
    lighter: '#c4c4c4',
    light: '#a2a2a2',
    default: '#828282',
    dark: '#636363',
    darker: '#464646',
  },
  background: {
    default: '#fff',
    light: '#f7f7f7',
    modal: 'rgba(0,0,0,0.5)',
  },
  primary: {
    default: '#868BFF',
    light: '#6C63FF',
    lighter: '#E1E3FE',
    dark: '#4F53C5',
    darker: '#8d8dff',
  },
  secondary: {
    default: '#FFEBB5',
    light: '#FFEBB5',
    dark: '#FFD978',
  },
};

// TODO: dark, oldSchool은 다 light와 동일함. 나중에 수정할 것
const dark: Theme = {
  colors: {
    success: '#67c23a',
    danger: '#d83a52',
    info: '#40a6fd',
    warning: '#cd9500',
  },
  ink: {
    buttonText: '#ffffff',

    default: '#222222',
    light: '#D1D1D1',
    lighter: '#E1E1E1',
    dark: '#666666',
    darker: '#444444',
  },
  background: {
    default: '#fff',
    light: '#f7f7f7',
    modal: 'rgba(0,0,0,0.5)',
  },
  primary: {
    default: '#868BFF',
    light: '#6C63FF',
    lighter: '#E1E3FE',
    dark: '#4F53C5',
    darker: '#8d8dff',
  },
  secondary: {
    default: '#FFEBB5',
    light: '#FFEBB5',
    dark: '#FFD978',
  },
};
const oldSchool: Theme = {
  colors: {
    success: '#67c23a',
    danger: '#d83a52',
    info: '#40a6fd',
    warning: '#cd9500',
  },
  ink: {
    buttonText: '#ffffff',
    default: '#222222',
    light: '#D1D1D1',
    lighter: '#E1E1E1',
    dark: '#666666',
    darker: '#444444',
  },
  background: {
    default: '#fff',
    light: '#f7f7f7',
    modal: 'rgba(0,0,0,0.5)',
  },
  primary: {
    default: '#868BFF',
    light: '#6C63FF',
    lighter: '#E1E3FE',
    dark: '#4F53C5',
    darker: '#8d8dff',
  },
  secondary: {
    default: '#FFEBB5',
    light: '#FFEBB5',
    dark: '#FFD978',
  },
};

export default { light, dark, oldSchool };
