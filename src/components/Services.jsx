import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FcTabletAndroid } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { GiLaptop } from "react-icons/gi";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Create stunning websites tailored to your needs.",
      icon: <FcTabletAndroid className="h-12 w-12" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Craft native and cross-platform mobile apps for iOS and Android.",
      icon: <FcSmartphoneTablet className="h-12 w-12" />,
    },
    {
      title: "Desktop Application Development",
      description:
        "Craft native and cross-platform mobile apps for iOS and Android.",
      icon: <GiLaptop className="h-12 w-12 text-blue-500" />,
    },
    // Add more services as needed
  ];
  const [ref, inView] = useInView({ triggerOnce: true });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="mx-auto py-8 w-full dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5,}}
        className="div"
      >
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Our Services
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
    >
      {icon}
      <motion.h3
        className="text-xl font-semibold mb-2 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
        Learn More
      </button>
    </motion.div>
  );
}

export default Services;
