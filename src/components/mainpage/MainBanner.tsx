// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import Banner from '../_common/Banner';

import banner from '../../assets/images/banner.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function MainBanner() {
  const navigate = useNavigate();
  const ment = '은퇴 후에도\n 계속 활약할 수 있어요';
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <Banner
            image={banner}
            title="다시 - 경력을 이어가세요"
            content={ment}
            subContent="다시: 은퇴한 시니어를 위한 긱 워킹 인재풀"
            styleClass="banner-main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={banner}
            title="다시 - 경력을 이어가세요"
            content={ment}
            subContent="다시: 은퇴한 시니어를 위한 긱 워킹 인재풀"
            styleClass="banner-main"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={banner}
            title="다시 - 경력을 이어가세요"
            content={ment}
            subContent="다시: 은퇴한 시니어를 위한 긱 워킹 인재풀"
            styleClass="banner-main"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
