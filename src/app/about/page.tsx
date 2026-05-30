"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Shield, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: GraduationCap,
      title: "Comprehensive Database",
      description: "Access detailed information about hundreds of colleges across India",
    },
    {
      icon: Target,
      title: "Smart Comparison",
      description: "Compare up to 3 colleges side by side to make informed decisions",
    },
    {
      icon: Users,
      title: "Community Reviews",
      description: "Read authentic reviews from current students and alumni",
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "All data is verified and regularly updated for accuracy",
    },
    {
      icon: Zap,
      title: "Easy Search",
      description: "Find colleges by location, course, fees, or rating with powerful filters",
    },
    {
      icon: Heart,
      title: "Student Focused",
      description: "Designed by students, for students to simplify college selection",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Campus Search
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted companion in finding the perfect college for your academic journey
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Campus Search is dedicated to helping students make informed decisions about their higher education. We believe that every student deserves access to accurate, comprehensive, and easy-to-understand information about colleges. Our platform bridges the gap between students and their dream institutions by providing detailed insights, real reviews, and powerful comparison tools.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Get Started Today</h2>
            <p className="text-lg text-center mb-6 opacity-90">
              Join thousands of students who found their perfect college through Campus Search
            </p>
            <div className="flex justify-center">
              <a
                href="/"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Browse Colleges
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
