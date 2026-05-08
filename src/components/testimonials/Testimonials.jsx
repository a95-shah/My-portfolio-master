import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Nəsibəli YUSIBOV',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Ahsan is a great collaborative partner to have. I met Ahsan in some Next.js & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Raul Omarov',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Ahsan Shah on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/agasi-xalilov/',
      name: 'Ağası Xəlilov',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Ahsan Shah and his communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https:/www.linkedin.com/in/babar-ali-shah-759764118/',
      name: 'Babar Ali Shah',
      role: 'Product Manager|Full-Stack Web Developer at Codematics.',
      test: "I’ve had the pleasure of working with Ahsan Ali Shah, and he has proven himself to be a highly capable and reliable developer. He has strong expertise in Next.js along with hands-on experience in Supabase, WordPress, Node.js, and React. Ahsan is proactive, easy to collaborate with, and consistently delivers quality work. His problem-solving approach and dedication make him a valuable addition to any development team. I highly recommend him to anyone looking for a skilled and dependable developer.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/elshad-bashirov-1907a1213/',
      name: 'Elshad Bashirov',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Ahsan has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials