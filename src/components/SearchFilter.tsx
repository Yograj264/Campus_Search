"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterState) => void;
}

interface FilterState {
  state: string;
  type: string;
  minRating: number;
  maxFees: number;
}

type SelectOption = { label: string; value: string };

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | number;
  options: SelectOption[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-800">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-gray-800">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function SearchFilter({ onSearch, onFilter }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    state: "",
    type: "",
    minRating: 0,
    maxFees: 1000000,
  });

  const states = ["Maharashtra", "Delhi", "Tamil Nadu", "Rajasthan", "Karnataka", "Telangana"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (key: keyof FilterState, value: string | number) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilter(next);
  };

  const fields = [
    {
      label: "State",
      value: filters.state,
      onChange: (value: string) => handleFilterChange("state", value),
      options: [{ label: "All States", value: "" }, ...states.map((state) => ({ label: state, value: state }))],
    },
    {
      label: "Type",
      value: filters.type,
      onChange: (value: string) => handleFilterChange("type", value),
      options: [
        { label: "All Types", value: "" },
        { label: "Public", value: "Public" },
        { label: "Private", value: "Private" },
      ],
    },
    {
      label: "Min Rating",
      value: filters.minRating,
      onChange: (value: string) => handleFilterChange("minRating", Number(value)),
      options: [
        { label: "Any Rating", value: "0" },
        { label: "4+ Stars", value: "4" },
        { label: "4.5+ Stars", value: "4.5" },
      ],
    },
    {
      label: "Max Fees (₹/year)",
      value: filters.maxFees,
      onChange: (value: string) => handleFilterChange("maxFees", Number(value)),
      options: [
        { label: "Any Fees", value: "1000000" },
        { label: "Up to ₹3L", value: "300000" },
        { label: "Up to ₹5L", value: "500000" },
        { label: "Up to ₹7L", value: "700000" },
      ],
    },
  ];

  const clearFilters = () => {
    const cleared = { state: "", type: "", minRating: 0, maxFees: 1000000 };
    setFilters(cleared);
    onFilter(cleared);
  };

  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges by name, location, or courses..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center space-x-2 rounded-lg bg-gray-100 px-6 py-3 text-gray-800 transition-colors hover:bg-gray-200"
        >
          <SlidersHorizontal className="h-5 w-5 text-gray-700" />
          <span className="font-medium text-gray-800">Filters</span>
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 border-t border-gray-200 pt-6"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {fields.map((field) => (
                <SelectField key={field.label} {...field} />
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-800"
              >
                <X className="h-4 w-4" />
                <span className="text-sm font-medium">Clear Filters</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
