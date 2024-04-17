import variables from '../abstracts/_variables.module.scss';

const { colorPrimary, colorPrimaryHover } = variables;

const theme = {
  token: {
    fontFamily: 'Pretendard Variable',
    fontSize: 24,
    colorPrimary: colorPrimary,
    colorPrimaryHover: colorPrimaryHover,
  },
  components: {
    Select: {
      optionFontSize: 20,
      optionHeight: 50,
      optionPadding: '16px 10px',
    },
    Input: {
      inputFontSize: 22,
    },
  },
};

export default theme;
