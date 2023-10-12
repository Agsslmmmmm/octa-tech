import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We create modern and responsive websites tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      description: 'Our experts design and develop mobile apps for iOS and Android platforms.',
    },
    {
      title: 'UI/UX Design',
      description: 'Our skilled designers focus on delivering an exceptional user experience.',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="py-16 w-full h-full pt-48 bg-white" id='services'>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              ref={ref}
              className="rounded-lg bg-opacity-70 bg-blur-lg bg-white bg-opacity-20 p-6 hover:scale-110 transition-transform duration-500 rounded-md shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-700">
                {service.title}
              </h2>
              <p className="text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
