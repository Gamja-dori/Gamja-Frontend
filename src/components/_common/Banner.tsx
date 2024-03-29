import { BannerProps } from 'props-type';
const Banner = ({
  image,
  title,
  content,
  subContent,
  styleClass,
}: BannerProps) => {
  return (
    <div className={`banner ${styleClass}`}>
      <img src={image} />
      <div className={`banner-bg ${styleClass}`}></div>
      <div className="banner-txt">
        {title && <div className="title">{title}</div>}
        <div className="content">{content}</div>
        <div className="mini">{subContent}</div>
      </div>
    </div>
  );
};
export default Banner;
