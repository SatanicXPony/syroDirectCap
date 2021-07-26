{/* src: page transitions in react - DEV.to
* i want to use the logo i made on canva and set it as the transition
* need the animated version of logo on canva
all of the pages, their routes will need to be wrapped in animate presence*/}


import { motion } from 'framer-motion'
//import { capLogo } from '../assets/images/capLogo.png' 


const blueBox = {
  initial: {
    height: "100vh",
    right: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren", 
      duration: 3.5
    },
  },
},

const siteTransition = () => {
  return (
    <div className="absolute inset-0 flex">
      <motion.div 
        className="relative z-40 w-full bg-blue"
        initial="initial"
        animate="animate"
          variants={blueBox}
      />
    </div>
  );
};


