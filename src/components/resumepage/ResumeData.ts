import type { SelectProps } from 'antd';

export const areaData = ['IT/개발', '경영/비즈니스'];

export const jobData = [
  [
    '소프트웨어 엔지니어',
    '웹 개발자',
    '서버 개발자',
    '프론트엔드 개발자',
    '머신러닝 엔지니어',
    '안드로이드 개발자',
    '임베디드 개발자',
    '보안 엔지니어',
    'PHP 개발자',
    '시스템 관리자',
  ],
  ['PM', '상품기획자(BM)', '총무'],
];

const range = (size: number, start = 0) => {
  return [...Array(size).keys()].map((key) => key + start);
};
export const yearData = range(50, 1);

const skills = [
  'Python',
  'Spring Framework',
  'AWS',
  'Git',
  'iOS',
  'HTML',
  'JavaScript',
  'TypeScript',
  'MySQL',
  'Linux',
  'C/C++',
  'PHP',
  'C#',
  'Unity',
];
export const skillData: SelectProps['options'] = skills.map((s) => ({
  label: s,
  value: s,
}));

export const commuteTypeData = ['상주 근무', '원격 근무', '상주/원격'];
