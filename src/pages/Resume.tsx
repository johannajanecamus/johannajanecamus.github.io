import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Resume = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pt-24 pb-10 min-h-screen flex flex-col items-center px-4">
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6 print:hidden">
          <a
            href="/Camus_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded cursor-pointer transition duration-300 ease-in-out inline-block"
          >
            🖨️ Print CV
          </a>
          <a
            href="/Camus_Resume.pdf"
            download="Camus_Resume.pdf"
            className="bg-primary-foreground hover:bg-primary-foreground/90 font-bold py-3 px-6 rounded cursor-pointer transition duration-300 ease-in-out inline-block"
          >
            📄 Download as PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/Camus_Resume.pdf"
            title="Johanna Jane Camus Resume"
            className="w-full"
            style={{ height: "90vh" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
