'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    name: 'Lanternagem',
    image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg'
  },
  {
    name: 'Pintura',
    image: 'https://www.hondacaiuas.com.br/wp-content/uploads/2024/09/pintura-automotiva.jpg'
  },
  {
    name: 'Troca de Para-brisa',
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg'
  },
  {
    name: 'Lavagem',
    image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-800 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">{service.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}