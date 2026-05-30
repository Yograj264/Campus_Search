"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DollarSign, GraduationCap, Star, TrendingUp, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import { College, colleges } from "@/data/colleges";

const lakhs = (value: number) => `₹${(value / 100000).toFixed(1)}L`;

export default function ComparePage() {
  const [selectedColleges, setSelectedColleges] = useState<College[]>([]);
  const [availableColleges, setAvailableColleges] = useState<College[]>(colleges);

  useEffect(() => {
    const stored = localStorage.getItem("compareColleges");
    if (!stored) return;
    const ids = JSON.parse(stored);
    setSelectedColleges(colleges.filter((college) => ids.includes(college.id)));
    setAvailableColleges(colleges.filter((college) => !ids.includes(college.id)));
  }, []);

  const addCollege = (college: College) => {
    if (selectedColleges.length >= 3) return;
    const next = [...selectedColleges, college];
    setSelectedColleges(next);
    setAvailableColleges(availableColleges.filter((item) => item.id !== college.id));
    localStorage.setItem("compareColleges", JSON.stringify(next.map((item) => item.id)));
  };

  const removeCollege = (collegeId: string) => {
    const next = selectedColleges.filter((college) => college.id !== collegeId);
    setSelectedColleges(next);
    setAvailableColleges([
      ...availableColleges,
      ...selectedColleges.filter((college) => college.id === collegeId),
    ]);
    localStorage.setItem("compareColleges", JSON.stringify(next.map((item) => item.id)));
  };

  const rows = [
    {
      label: "Rating",
      render: (college: College) => (
        <div className="flex items-center justify-center">
          <Star className="mr-1 h-4 w-4 fill-current text-yellow-500" />
          <span className="font-semibold">{college.rating}</span>
        </div>
      ),
    },
    {
      label: "Type",
      render: (college: College) => (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {college.type}
        </span>
      ),
    },
    {
      label: "Established",
      render: (college: College) => college.established,
    },
    {
      label: "Annual Fees",
      render: (college: College) => (
        <div className="flex items-center justify-center">
          <DollarSign className="mr-1 h-4 w-4 text-green-600" />
          <span className="font-semibold">{lakhs(college.fees.total)}</span>
        </div>
      ),
    },
    {
      label: "Placement Rate",
      render: (college: College) => (
        <span className="text-lg font-bold text-green-600">{college.placements.placementRate}%</span>
      ),
    },
    {
      label: "Average Package",
      render: (college: College) => (
        <div className="flex items-center justify-center">
          <TrendingUp className="mr-1 h-4 w-4 text-blue-600" />
          <span className="font-semibold">{lakhs(college.placements.averagePackage)}</span>
        </div>
      ),
    },
    {
      label: "Highest Package",
      render: (college: College) => (
        <span className="font-bold text-purple-600">{lakhs(college.placements.highestPackage)}</span>
      ),
    },
    {
      label: "Top Recruiters",
      render: (college: College) => (
        <div className="flex flex-wrap justify-center gap-1">
          {college.placements.topRecruiters.slice(0, 3).map((recruiter) => (
            <span key={recruiter} className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-700">
              {recruiter}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Courses",
      render: (college: College) => (
        <div className="space-y-1">
          {college.courses.slice(0, 3).map((course) => (
            <p key={course.id} className="text-sm text-gray-600">
              {course.name}
            </p>
          ))}
        </div>
      ),
    },
    {
      label: "Action",
      render: (college: College) => (
        <Link
          href={`/college/${college.id}`}
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          View Details
        </Link>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-gray-800">Compare Colleges</h1>
              <p className="text-gray-600">
                Select up to 3 colleges to compare their features side by side
              </p>
            </div>
            <Link href="/" className="font-medium text-blue-600 hover:text-blue-700">
              Back to Search
            </Link>
          </div>

          {selectedColleges.length === 0 ? (
            <div className="rounded-xl bg-white p-12 text-center shadow-lg">
              <GraduationCap className="mx-auto mb-4 h-16 w-16 text-gray-300" />
              <h2 className="mb-2 text-2xl font-bold text-gray-800">No Colleges Selected</h2>
              <p className="mb-6 text-gray-600">
                Add colleges from the search page to start comparing
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Browse Colleges
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Add More Colleges ({selectedColleges.length}/3)
                </h3>
                {availableColleges.length > 0 && selectedColleges.length < 3 ? (
                  <div className="flex flex-wrap gap-2">
                    {availableColleges.slice(0, 6).map((college) => (
                      <button
                        key={college.id}
                        onClick={() => addCollege(college)}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 transition-colors hover:border-blue-500 hover:bg-blue-50"
                      >
                        {college.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">
                    {selectedColleges.length >= 3
                      ? "Maximum 3 colleges can be compared"
                      : "All colleges are already selected"}
                  </p>
                )}
              </div>

              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="min-w-[200px] p-4 text-left font-semibold text-gray-800">
                          Feature
                        </th>
                        {selectedColleges.map((college) => (
                          <th key={college.id} className="min-w-[250px] p-4 text-center">
                            <div className="relative">
                              <img
                                src={college.images[0]}
                                alt={college.name}
                                className="mb-2 h-32 w-full rounded-lg object-cover"
                              />
                              <button
                                onClick={() => removeCollege(college.id)}
                                className="absolute right-2 top-2 rounded-full bg-white p-1 shadow hover:bg-red-50"
                              >
                                <X className="h-4 w-4 text-gray-600 hover:text-red-600" />
                              </button>
                            </div>
                            <h3 className="text-sm font-bold text-gray-800">{college.name}</h3>
                            <p className="text-xs text-gray-600">{college.location}</p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={row.label} className={`border-b ${index % 2 ? "bg-gray-50" : ""}`}>
                          <td className="p-4 font-medium text-gray-800">{row.label}</td>
                          {selectedColleges.map((college) => (
                            <td key={college.id} className="p-4 text-center">
                              {row.render(college)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
