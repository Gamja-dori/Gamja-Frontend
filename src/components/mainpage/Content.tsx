import { ContentProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
const Content = ({
  svg,
  title,
  content,
  styleClass,
  subtitle,
}: ContentProps) => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  return (
    <div className={`${styleClass} content-div`}>
      <img src={svg} />
      <div className="content-mobile-div">
        {isMobile ? (
          <>
            <div className="content-title-box">
              <p>{title}</p>
              <p className="content-subtitle">{subtitle}</p>
            </div>
            <div className="content-box">
              <p>{content}</p>
              <div
                className={`${styleClass === 'green' ? 'black-arrow' : 'small-arrow'}`}
              ></div>
            </div>
          </>
        ) : (
          <div className="content-title-box">
            <div className="content-box">
              <p>{content}</p>
              <div
                className={`${styleClass === 'green' ? 'black-arrow' : 'small-arrow'}`}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
