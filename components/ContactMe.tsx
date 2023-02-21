import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      }}
      className="flex flex-col items-center space-y-4 sm:space-y-7 bg-gray-700 rounded-lg sm:rounded-3xl mx-10 p-5 mt-20 text-light-text"
    >
      <div className="h-1 w-20 bg-green-700 mt-4" />
      <h1 className="text-3xl sm:text-4xl sm:tracking-wide font-montserrat font-semibold">
        Let's Work Together
      </h1>
      <p className="mt-6 text-center text-lg  font-montserrat font-light max-w-2xl">
        The Technological revolution is changing aspect of our lives,and the
        fabric of society itself.It's also changing the way we learn and what we
        learn
      </p>
      <button className="py-4 px-10 font-montserrat text-lg text-black font-light rounded-xl bg-gradient-to-r mt-8 from-yellow-400 to-yellow-600 hover:bg-gradient-to-b transition-colors transform duration-150">
        Contact Me
      </button>
    </motion.div>
  );
};

export default ContactMe;
