// libs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// components
import { Box } from '@chakra-ui/react';
import { CarouselItem } from './CarouselItem';
import { useTranslations } from 'next-intl';

export function Carousel() {
  const t = useTranslations('Carousel');

  const cauroselItems = [
    {
      title: 'Star Wars Planet',
      repository: 'https://github.com/PauloHenriqueSousa2020/frontend-exercise',
      src: 'star_wars.png',
      demo: 'https://frontend-exercise-ten.vercel.app',
      description: t('starWars'),
      skills: ['REACT JS', 'NEXT JS', 'TYPESCRIPT', 'HTML', 'CSS', 'TAILWIND CSS', 'SWR', 'JEST'],
    },
    {
      title: 'Github Blog',
      repository: 'https://github.com/PauloHenriqueSousa2020/github_blog',
      src: 'github_blog.png',
      demo: '',
      description: t('githubBlog'),
      skills: ['REACT JS', 'NEXT JS', 'TYPESCRIPT', 'HTML', 'CSS'],
    },
    {
      title: 'ToDo List',
      repository: 'https://github.com/PauloHenriqueSousa2020/todo-list',
      src: 'todo_list.png',
      demo: '',
      description: t('todoList'),
      skills: ['REACT JS', 'NEXT JS', 'TYPESCRIPT', 'HTML', 'CSS'],
    },
    {
      title: 'Ignite Time',
      repository: 'https://github.com/PauloHenriqueSousa2020/ignite-timer',
      src: 'ignite_timer.png',
      demo: '',
      description: t('igniteTimer'),
      skills: ['REACT JS', 'NEXT JS', 'TYPESCRIPT', 'HTML', 'CSS'],
    },
    {
      title: 'Coffe Delivery',
      repository: 'https://github.com/PauloHenriqueSousa2020/ignite-coffe-delivery',
      src: 'coffee_delivery.png',
      demo: '',
      description: t('coffeeDelivery'),
      skills: ['REACT JS', 'VITE', 'TYPESCRIPT', 'HTML', 'CSS', 'STYLED COMPONENTS'],
    },
    {
      title: 'Marvel Project',
      repository: 'https://github.com/PauloHenriqueSousa2020/marvel_project',
      src: 'marvel_project.png',
      demo: 'https://paulohenriquesousa2020.github.io/marvel_project/',
      description: t('marvelProject'),
      skills: ['REACT JS', 'TYPESCRIPT', 'HTML', 'CSS', 'STYLED COMPONENTS', 'REACT TESTING LIBRARY', 'YUP'],
    },
    {
      title: 'HELPet',
      repository: 'https://github.com/PauloHenriqueSousa2020/HELPet',
      src: 'helpet.png',
      demo: '',
      description: t('helpet'),
      skills: ['REACT JS', 'REACT NATIVE', 'NODE JS', 'TYPESCRIPT', 'HTML', 'STYLED COMPONENTS', 'REACT TESTING LIBRARY', 'YUP'],
    },
  ]
  return (
    <Box
      width={'100%'}
      maxWidth={'1200px'}
      margin={'0 auto'}
      padding={4}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{
          paddingBottom: '40px',
        }}
      >
        {cauroselItems.map((cauroselItem, index) => (
          <SwiperSlide key={index}>
            <CarouselItem
              item={cauroselItem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-pagination {
            position: relative;
            margin-top: 20px;
          }
          .swiper-pagination-bullet {
            background-color: var(--system);
          }
          .swiper-pagination-bullet-active {
            background-color: var(--system-secondary);
          }
        `}
      </style>

    </Box>
  );
}

export default Carousel;