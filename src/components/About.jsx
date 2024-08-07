import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            I'm a tech enthusiast and problem solver with a knack for turning caffeine into code. From wrangling
            databases to taming operating systems, I've dipped my toes in various tech ponds. My superpower?
            Transforming "it can't be done" into "it's already automated." <br/> <br/>

            When I'm not busy building personal projects, you might find me deep in the realms of Machine Learning, Linux or Android ROMs,
            spreading open-source love. I believe in the power of community, whether it's collaborating with developers
            worldwide or helping fellow college students eat better. <br/> <br/>

            Why do I do what I do? Well, partly because I'm passionate about technology, but mostly because I'm allergic
            to others doing repetitive tasks. After all, why spend two hours doing something manually when you can spend 20 hours
            automating it and feeling like a god? <br/> <br/>

            So, whether you need well-designed, cross-platform apps deployed on AWS, or even someone to lift weights with, I'm your guy!  <br/> <br/>

           Do get in touch for a coffee chat and let's automate the world, one commit at a time!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
