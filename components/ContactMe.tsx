import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <motion.div
        initial={false}
        whileInView={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        transition={{ ease: "easeOut", duration: 2 }}
        className=" w-72 h-[410px] lg:w-[1340px] lg:h-[420px] md:w-[540px] md:p-8 shadow-xl p-7 bg-[#4b4f58] rounded-3xl"
      >
        <div className="h-[3px] w-[80px] bg-green-700 mx-auto mt-4" />
        <div className="flex items-center flex-col justify-center">
          <h1 className="mt-8 md:mt-16 text-light-text text-2xl lg:text-[38px] font-montserrat font-semibold">
            Let's Work Together
          </h1>
          <p className="text-light-text md:mt-9 mt-6 text-center text-sm lg:text-lg font-montserrat font-light">
            The Technological revolution is changing aspect of our lives,and the
            fabric of society
            <br />
            itself.It's also changing the way we learn and what we learn
          </p>
        </div>

        {/* Contact ME */}
        <div className="flex items-center justify-center">
          <button className="py-4 px-10 font-montserrat text-lg font-light rounded-xl bg-gradient-to-r mt-8 from-yellow-400 to-yellow-600 hover:bg-gradient-to-b transition-colors transform duration-150">
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
