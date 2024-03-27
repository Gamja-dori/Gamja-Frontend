import { TitleProps } from 'props-type';

const Subtitle = ({ label }: TitleProps) => {
  return <div className="subtitle">{label}</div>;
};

export default Subtitle;
