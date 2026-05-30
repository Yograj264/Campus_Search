"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CollegeCard from "@/components/CollegeCard";
import SearchFilter from "@/components/SearchFilter";
import { colleges } from "@/data/colleges";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    state: "",
    type: "",
    minRating: 0,
    maxFees: 1000000,
  });

  const filteredColleges = useMemo(
    () =>
      colleges.filter((college) => {
        const query = searchQuery.toLowerCase();
        return (
          [college.name, college.location, ...college.courses.map((course) => course.name)].some((value) =>
            value.toLowerCase().includes(query)
          ) &&
          (!filters.state || college.state === filters.state) &&
          (!filters.type || college.type === filters.type) &&
          college.rating >= filters.minRating &&
          college.fees.total <= filters.maxFees
        );
      }),
    [searchQuery, filters]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Find Your Perfect College
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Search, compare, and discover the best colleges across India with detailed information about courses, placements, and reviews
          </p>
        </motion.div>

        <SearchFilter onSearch={setSearchQuery} onFilter={setFilters} />

        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {filteredColleges.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-xl text-gray-600">
              No colleges found matching your criteria
            </p>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college, index) => (
              <CollegeCard key={college.id} college={college} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
