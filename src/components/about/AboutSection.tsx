import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { BarChart3, Target, Users, Globe } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "Advanced Analytics",
      description:
        "Leverage powerful D3.js visualizations for deep data insights",
    },
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: "Precision Tools",
      description:
        "Professional-grade analysis tools for accurate results",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "User-Centric Design",
      description:
        "Intuitive interface built with modern React patterns",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Universal Access",
      description:
        "Cloud-based platform accessible from anywhere",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "5M+", label: "Analyses Run" },
    { value: "90+", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
        {/* Badge */}
        <Badge className="mb-4 px-4 py-2 rounded-full bg-gray-800 text-white shadow-lg">
          <span className="flex items-center gap-2">
            <span className="text-purple-400">★</span> ABOUT US
          </span>
        </Badge>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">Transforming</span>{" "}
          <span className="text-blue-900">Data into Decisions</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We're building the next generation of data analysis tools that empower professionals 
          to extract meaningful insights from complex datasets with unprecedented ease and precision.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <CardContent>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Story</h3>
          <p className="text-gray-300 leading-relaxed">
            Founded by data scientists and engineers who were frustrated with the 
            limitations of existing analysis tools, our platform was born from a desire 
            to make advanced analytics accessible to everyone.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Today, we combine cutting-edge D3.js visualizations with modern React architecture 
            to deliver a seamless experience that professionals trust for their most important data decisions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl font-bold text-blue-400">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
