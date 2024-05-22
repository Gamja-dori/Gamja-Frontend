import { TitleProps } from 'props-type';

const Subtitle = ({ label }: TitleProps) => {
  return (
    <div className="subtitle">
      {label}
      <div className="light-gray"></div>
    </div>
  );
};

export default Subtitle;
