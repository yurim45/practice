import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import flex from '@shared/styles/flex'
import PjLayout from '../common/PjLayout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative } from 'swiper'
import { img1, img2, img3, img4 } from './images/index'
import { Tag } from '@features/career/common'

const EasyWorkApp = () => {
  return (
    <PjLayout
      title="Easy-Work App: 사내용 프로그램"
      subTitle="2022.08.09 ~ 10.11, 약 2개월간 | 총 3명 (UX/UI디자이너 1명, Frontend 1명, Backend 1명)"
    >
      <StContent>
        <StLeftContent>
          <StContentDesc>
            <Tag>Vuejs</Tag> 를 배우면서 <Tag>PWA</Tag>를 적용한 사내용
            프로그램을 제작한 프로젝트. <br />
          </StContentDesc>
          <StReadMore
            type="button"
            onClick={() =>
              window.open(
                'https://www.notion.so/aprilworld/Vuejs-Easy-Work-App-f1eb7f0469184d24803cef76e6d1c410'
              )
            }
          >
            자세히 보기
          </StReadMore>
          <ul>
            <li>
              <strong>주요 기능</strong>
              <p>
                ✔︎ 권한별 페이지 구성(사용자, 관리자) <br />
                ✔︎ 복지 포인트 기능 <br />
                ✔︎ 휴가 등록 및 조회, 관리 등 ✔︎ 구매 요청 및 승인, 알림 등
              </p>
            </li>

            <li>
              <strong>URL</strong>
              <p>
                <Link
                  href={`https://atnpeasywork.link`}
                  target="_blank"
                  rel="noreferrer"
                >
                  easywork.today
                </Link>
              </p>
            </li>
            <li>
              <strong>회고</strong>
              <p>
                <Link
                  href={`https://velog.io/@april_5/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%88%EB%AC%B4%EB%A6%AC%EB%A5%BC-%EC%95%9E%EB%91%90%EA%B3%A0`}
                  target="_blank"
                  rel="noreferrer"
                >
                  회고록
                </Link>
              </p>
            </li>
            <li>
              <strong>GitHub</strong>
              <p>
                <Link
                  href={`https://github.com/yurim45/easy-work-app`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/yurim45/easy-work-app
                </Link>
              </p>
            </li>

            <li>
              <strong>기술 스택</strong>
              <p>
                {['vuejs', 'JS', 'apollo', 'graphql', 'sass']?.map(
                  (item, i) => {
                    return <Tag key={i}>{`${item}`}</Tag>
                  }
                )}
              </p>
            </li>
          </ul>
        </StLeftContent>
        <Swiper
          slidesPerView={'auto'} //초기값 설정 모바일값이 먼저!!
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectCreative]}
          className="mySwiper"
        >
          {[img1, img2, img3, img4]?.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  alt="project preview"
                  src={img}
                  className="w-[270px] h-[500px]"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </StContent>
    </PjLayout>
  )
}

const StContent = styled.div`
  margin-top: 50px;
  ${flex({ justify: 'between', align: 'start' })};

  .mySwiper {
    width: 300px;
  }

  @media ${({ theme }) => theme.mobile} {
    margin-top: 20px;

    .mySwiper {
      display: none;
    }
  }
`

const StLeftContent = styled.div`
  width: 450px;
  padding-right: 20px;
  color: var(--text-333);
  font-size: 18px;
  line-height: 1.5;

  ul {
    margin-top: 20px;
    border-top: 1px solid var(--text-blue);
  }

  li:first-child {
    margin-top: 20px;
  }

  li {
    margin: 10px 0;
  }

  strong {
    display: inline-block;
    width: 100px;
    font-weight: 600;
  }

  p {
    padding: 5px;
    font-size: 16px;

    @media ${({ theme }) => theme.mobile} {
      width: 80vw;
      font-size: 14px;

      p {
        font-size: 14px;
      }
    }
  }
`

const StContentDesc = styled.p`
  font-size: 18px;

  @media ${({ theme }) => theme.mobile} {
    font-size: 12px;
  }
`

const StReadMore = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px 0;
  background: var(--compo-blue);
  color: var(--white);
  font-size: 14px;
  border-radius: 10px;
`

export default EasyWorkApp