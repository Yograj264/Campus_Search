"use client";

import { motion } from "framer-motion";
import { Star, MapPin, DollarSign, GraduationCap } from "lucide-react";
import { College } from "@/data/colleges";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

interface CollegeCardProps {
  college: College;
  index: number;
}

export default function CollegeCard({ college, index }: CollegeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageSlider
          images={college.images}
          alt={college.name}
          height="h-48"
          showArrows={true}
          autoPlay={true}
          autoPlayInterval={4000}
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md z-10">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-semibold text-gray-800">{college.rating}</span>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          {college.type}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {college.name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">{college.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm">
              ₹{(college.fees.total / 100000).toFixed(1)}L / year
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-purple-600" />
            <span className="text-sm">Est. {college.established}</span>
          </div>
        </div>

        <Link
          href={`/college/${college.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
