"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { colleges, discussions } from "@/data/colleges";
import { motion } from "framer-motion";
import { MessageSquare, ThumbsUp, Send, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function DiscussionsPage() {
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewQuestion, setShowNewQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCollege = !selectedCollege || discussion.collegeId === selectedCollege;
    const matchesSearch =
      discussion.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.answers.some((answer) =>
        answer.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCollege && matchesSearch;
  });

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      alert("Question submitted! (This would be saved to a backend in production)");
      setNewQuestion("");
      setShowNewQuestion(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                College Discussions
              </h1>
              <p className="text-gray-600">
                Ask questions, share experiences, and help others make informed decisions
              </p>
            </div>
            <button
              onClick={() => setShowNewQuestion(!showNewQuestion)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Ask Question</span>
            </button>
          </div>

          {showNewQuestion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Ask a New Question
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Select College
                </label>
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800 bg-white"
                >
                  <option value="" className="text-gray-800">Choose a college...</option>
                  {colleges.map((college) => (
                    <option key={college.id} value={college.id} className="text-gray-800">
                      {college.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Your Question
                </label>
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="What would you like to know about this college?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-800 bg-white"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewQuestion(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitQuestion}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit Question
                </button>
              </div>
            </motion.div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800 bg-white"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCollege}
                  onChange={(e) => setSelectedCollege(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none min-w-[200px] text-gray-800 bg-white"
                >
                  <option value="" className="text-gray-800">All Colleges</option>
                  {colleges.map((college) => (
                    <option key={college.id} value={college.id} className="text-gray-800">
                      {college.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredDiscussions.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  No Discussions Found
                </h2>
                <p className="text-gray-600">
                  Be the first to start a discussion about a college
                </p>
              </div>
            ) : (
              filteredDiscussions.map((discussion, index) => {
                const college = colleges.find((c) => c.id === discussion.collegeId);
                return (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          {college && (
                            <Link
                              href={`/college/${college.id}`}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-2 inline-block"
                            >
                              {college.name}
                            </Link>
                          )}
                          <h3 className="text-xl font-semibold text-gray-800">
                            {discussion.question}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{discussion.likes}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span>By {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.date}</span>
                        <span>•</span>
                        <span>{discussion.answers.length} answers</span>
                      </div>

                      {discussion.answers.length > 0 && (
                        <div className="border-t pt-4 mt-4">
                          <h4 className="font-medium text-gray-800 mb-3">Answers</h4>
                          <div className="space-y-3">
                            {discussion.answers.slice(0, 2).map((answer) => (
                              <div
                                key={answer.id}
                                className="bg-gray-50 rounded-lg p-4"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <span className="font-medium text-gray-800">
                                    {answer.author}
                                  </span>
                                  <div className="flex items-center space-x-1 text-gray-500">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span className="text-sm">{answer.likes}</span>
                                  </div>
                                </div>
                                <p className="text-gray-600 text-sm">{answer.content}</p>
                                <p className="text-xs text-gray-400 mt-2">{answer.date}</p>
                              </div>
                            ))}
                            {discussion.answers.length > 2 && (
                              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                View all {discussion.answers.length} answers
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t">
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                          <Send className="h-4 w-4" />
                          <span>Write an Answer</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
