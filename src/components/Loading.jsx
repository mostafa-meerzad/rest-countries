import { motion } from "framer-motion";
import Spinner from "./icon-components/Spinner";

const Loading = ({ isLoading }) => {
  return (
    <motion.div
      className={`fixed grid content-center w-full h-screen top-0 left-0  bg-darkBlue  bg-opacity-50  z-10 `}
      initial={{ opacity: 0, zIndex: -10 }}
      animate={
        isLoading ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -10 }
      }
    >
      <Spinner className="w-8 h-8 mx-auto dark:fill-veryLightGray animate-spin " />
    </motion.div>
  );
};
export default Loading;
