import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refParagraph1, inViewParagraph1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refParagraph2, inViewParagraph2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refParagraph3, inViewParagraph3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="bg-white pt-44">
      <main className="p-8 min-h-screen flex items-center" id="about">
        <div className="container mx-auto">
          <div className="text-center">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              animate={inViewTitle ? "visible" : "hidden"}
              ref={refTitle}
              className="text-3xl font-semibold text-gray-700"
            >
              About OctaTech
            </motion.h2>
            <motion.p
              variants={slideIn}
              initial="hidden"
              animate={inViewParagraph1 ? "visible" : "hidden"}
              ref={refParagraph1}
              className="text-lg text-gray-500 mt-4 px-4"
            >
              OctaTech is a leading technology company that is dedicated to driving innovation and solving complex
              problems through cutting-edge technology solutions. Our journey began with a simple yet powerful
              vision: to transform industries, empower individuals, and make a positive impact on the world.
            </motion.p>
            <motion.p
              variants={slideIn}
              initial="hidden"
              animate={inViewParagraph2 ? "visible" : "hidden"}
              ref={refParagraph2}
              className="mt-4 px-4 text-lg text-gray-500"
            >
              With a team of passionate experts in various fields of technology, we work tirelessly to develop
              software, applications, and solutions that are at the forefront of technological advancement. Our
              commitment to excellence, innovation, and client satisfaction drives everything we do.
            </motion.p>

            <motion.p variants={slideIn} initial="hiddden" animate={inViewParagraph3 ? "visible" : "hidden"} ref={refParagraph3} className='mt-4 px-4 text-lg text-gray-500'>At OctaTech, we believe that technology has the power to shape the future. Whether it's creating user-friendly applications, enhancing cybersecurity, or harnessing the potential of artificial intelligence, we are dedicated to pushing the boundaries of what is possible.</motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
