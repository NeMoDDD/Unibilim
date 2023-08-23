import React from "react";
import { motion } from "framer-motion";

// HOC для анимации перехода
export const withPageTransition = (WrappedComponent) => {
    return (props) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <WrappedComponent {...props} />
        </motion.div>
    );
};
