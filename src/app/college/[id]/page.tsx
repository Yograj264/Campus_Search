"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  DollarSign,
  GraduationCap,
  Minus,
  Plus,
  Star,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import { College, colleges } from "@/data/colleges";

const lakhs = (value: number) => `₹${(value / 100000).toFixed(1)}L`;
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "courses", label: "Courses" },
  { id: "placements", label: "Placements" },
  { id: "reviews", label: "Reviews" },
  { id: "admission", label: "Admission" },
];

export default function CollegeDetails() {
  const { id } = useParams() as { id: string };
  const college = colleges.find((item) => item.id === id);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">College Not Found</h1>
          <Link href="/" className="font-medium text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const isCompared = selectedForCompare.includes(college.id);
  const toggleCompare = () =>
    setSelectedForCompare((current) =>
      current.includes(college.id) ? current.filter((value) => value !== college.id) : current.length < 3 ? [...current, college.id] : current
    );

  const stats = [
    { icon: DollarSign, label: "Annual Fees", value: lakhs(college.fees.total), color: "text-green-600" },
    { icon: GraduationCap, label: "Established", value: college.established, color: "text-blue-600" },
    { icon: Award, label: "Type", value: college.type, color: "text-purple-600" },
    { icon: Users, label: "Placement Rate", value: `${college.placements.placementRate}%`, color: "text-orange-600" },
  ];

  const content = {
    overview: (
      <>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">About {college.name}</h2>
        <p className="mb-6 leading-relaxed text-gray-600">{college.description}</p>
        <h3 className="mb-4 text-xl font-bold text-gray-800">Key Highlights</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4">
            <TrendingUp className="mt-1 h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-800">Excellent Placements</p>
              <p className="text-sm text-gray-600">
                Average package: {lakhs(college.placements.averagePackage)}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4">
            <Award className="mt-1 h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium text-gray-800">Top Recruiters</p>
              <p className="text-sm text-gray-600">
                {college.placements.topRecruiters.slice(0, 3).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    courses: (
      <>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Courses Offered</h2>
        <div className="space-y-4">
          {college.courses.map((course) => (
            <div
              key={course.id}
              className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-blue-300"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {course.duration}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4" />
                  <span>{lakhs(course.fees)}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{course.eligibility}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
    placements: (
      <>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Placement Statistics</h2>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Average Package", lakhs(college.placements.averagePackage), "from-blue-500 to-blue-600"],
            ["Highest Package", lakhs(college.placements.highestPackage), "from-green-500 to-green-600"],
            ["Placement Rate", `${college.placements.placementRate}%`, "from-purple-500 to-purple-600"],
          ].map(([label, value, gradient]) => (
            <div key={label} className={`rounded-lg bg-gradient-to-br ${gradient} p-6 text-white`}>
              <p className="mb-2 text-sm opacity-80">{label}</p>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>
        <h3 className="mb-4 text-xl font-bold text-gray-800">Top Recruiters</h3>
        <div className="flex flex-wrap gap-3">
          {college.placements.topRecruiters.map((recruiter) => (
            <span key={recruiter} className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-800">
              {recruiter}
            </span>
          ))}
        </div>
      </>
    ),
    reviews: (
      <>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Student Reviews</h2>
        <div className="space-y-6">
          {college.reviews.map((review) => (
            <div key={review.id} className="rounded-lg border border-gray-200 p-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{review.author}</h3>
                  {review.course && <p className="text-sm text-gray-600">{review.course}</p>}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < review.rating ? "fill-current text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="mt-2 text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </>
    ),
    admission: (
      <>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Admission Process</h2>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Application Process</h3>
          <ol className="space-y-3">
            {college.admission.process.map((step, index) => (
              <li key={step} className="flex items-start space-x-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
                  {index + 1}
                </span>
                <span className="text-gray-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Requirements</h3>
          <ul className="space-y-2">
            {college.admission.requirements.map((requirement) => (
              <li key={requirement} className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-gray-600">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-semibold text-gray-800">Application Deadline</h4>
            <p className="font-medium text-blue-600">{college.admission.deadlines}</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4">
            <h4 className="mb-2 font-semibold text-gray-800">Entrance Exams</h4>
            <div className="flex flex-wrap gap-2">
              {college.admission.entranceExams.map((exam) => (
                <span key={exam} className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  {exam}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    ),
  } as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/" className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="relative h-72">
              <ImageSlider
                images={college.images}
                alt={college.name}
                height="h-72"
                showArrows
                autoPlay
                autoPlayInterval={5000}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">{college.name}</h1>
                    <div className="flex items-center space-x-4 text-white/90">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{college.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-current text-yellow-400" />
                        <span>{college.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleCompare}
                    className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                      isCompared ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isCompared ? (
                      <span className="inline-flex items-center gap-2">
                        <Minus className="h-4 w-4" />
                        Remove from Compare
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add to Compare
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="rounded-lg bg-gray-50 p-4 text-center">
                  <Icon className={`mx-auto mb-2 h-6 w-6 ${color}`} />
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="text-lg font-bold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-6 py-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {content[activeTab as keyof typeof content]}
              </motion.div>
            </div>
          </div>

          {selectedForCompare.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-6 right-6 max-w-sm rounded-xl bg-white p-4 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  Compare ({selectedForCompare.length}/3)
                </h3>
                <button onClick={() => setSelectedForCompare([])} className="text-gray-400 hover:text-gray-600">
                  <Minus className="h-5 w-5" />
                </button>
              </div>
              <Link
                href="/compare"
                onClick={() => localStorage.setItem("compareColleges", JSON.stringify(selectedForCompare))}
                className="block w-full rounded-lg bg-blue-600 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700"
              >
                Compare Now
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
