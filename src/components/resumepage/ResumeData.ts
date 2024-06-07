import type { SelectProps } from 'antd';

export const areaData = [
  'IT/개발',
  '엔지니어링',
  '경영지원',
  '영업기획',
  '마케팅',
  '생산제조',
  '의료',
];

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
  [
    '신문기자',
    '문화재보존원',
    '지질학연구원',
    '교통계획·설계가',
    '대학교수',
    '자연과학시험원',
    '전기계측제어기술자',
    '전자제품 및 부품 개발기술자',
    '생명과학시험원',
    '생물학연구원',
    '식품공학기술자 및 연구원',
    '수학·통계학연구원',
    '섬유공학기술자',
    '문리학원강사천문·기상학연구원',
  ],
  [
    '총무',
    '노무사',
    '인사',
    '잡매니저',
    '직업상담사',
    '채용담당자',
    '헤드헌터',
    'ER',
    'HRD',
    'HRM',
    'HR컨설팅',
  ],
  [
    '영업기획',
    '영업마케팅',
    '영업전략',
    '영업지원',
    '영업직',
    '영업판촉',
    '온라인판매',
  ],
  [
    '광고PD',
    '글로벌마케팅',
    '기업홍보',
    '디지털마케팅',
    '브랜드마케팅',
    '프로덕트마케팅',
    '홍보',
    '행사기획',
    'BM',
    'AD',
  ],
  [
    '기술설계',
    '기술 엔지니어',
    '부품설계',
    '반도체설계',
    '전기설계',
    '품질관리',
    '프로그램설계',
    '회로설계',
  ],
  [
    '간호사',
    '도수치료사',
    '물리치료사',
    '방사선사',
    '수의사',
    '의사',
    '약사',
    '안경사',
    '임상병리사',
    '재활치료사',
  ],
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
