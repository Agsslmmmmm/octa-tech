import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const teamMembers = [
    {
      name: 'Agus Salim',
      role: 'Front-End Developer',
      image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight&flip=true',
    },
    {
      name: 'Prasetyo',
      role: 'Back-End Developer',
      image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Dusty&flip=true',
    },
    {
      name: 'Abdul Azis',
      role: 'Designer',
      image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie&flip=true',
    },
    // Tambahkan anggota tim lainnya sesuai kebutuhan
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto text-center pt-48" id="team">
      <h2 className="text-3xl font-semibold text-gray-500 mb-6">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            ref={ref}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
          >
            <div className="rounded-lg bg-opacity-70 bg-blur-lg bg-white bg-opacity-20 p-6 hover:scale-110 transition-transform duration-500 rounded-md shadow-lg">
              <img
                src={member.image}
                alt={`Team Member - ${member.name}`}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-400">{member.name}</h3>
              <p className="text-gray-500 font-bold">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
