import React from "react";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Create stunning websites tailored to your needs.",
      icon: "web-development-icon.svg",
    },
    {
      title: "Mobile App Development",
      description:
        "Craft native and cross-platform mobile apps for iOS and Android.",
      icon: "mobile-app-icon.svg",
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto py-8 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center">
      <img src={icon} alt={title} className="h-16 w-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
        Learn More
      </button>
    </div>
  );
}

export default Services;
