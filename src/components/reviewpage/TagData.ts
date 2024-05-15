import { SelectProps } from 'antd';

const tags = [
  '친절해요',
  '의사소통 능력이 뛰어나요',
  '능력이 좋아요',
  '성실해요',
  '꼼꼼해요',
];
export const tagData: SelectProps['options'] = tags.map((s) => ({
  label: s,
  value: s,
}));
