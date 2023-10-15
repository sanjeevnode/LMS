import { AnimatePresence, motion } from "framer-motion";
import ReactLoading from "react-loading";
const Loading = () => {
  const backdropVarient = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const backdropDivVarient = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgb(0,0,0,.5)] z-10"
        variants={backdropVarient}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="bg-secondary w-fit h-fit p-10"
          variants={backdropDivVarient}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ReactLoading type="bars" color="#38423a" height={200} width={200} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
