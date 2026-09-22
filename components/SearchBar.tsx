"use client";

import { useState,useEffect, ChangeEvent, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { allServicesData } from "@/lib/services-data";

interface Service {
  name: string;
  href: string;
  description: string;
  price: string;
  timeline: string;
  icon: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
   const words = ["Trademark Registration","Trademark Class Finder", "Taxation", "Copyrights", "Gst Registration","Gst Filing","FSSAI Registration","ISO Registration","ITR Filing"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(120); // default typing speed
  
    useEffect(() => {
      const currentWord = words[currentWordIndex];
  
      const type = () => {
        if (!isDeleting) {
          // Typing forward
          setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
          setSpeed(120);
          if (displayedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000); // wait 1s before deleting
          }
        } else {
          // Deleting backward
          setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));
          setSpeed(60);
          if (displayedText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      };
  
      const timer = setTimeout(type, speed);
      return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentWordIndex, speed, words]);
  

  // 🪄 Flatten all services from the nested structure (Memoized)
  const allServices: Service[] = useMemo(() => {
    const services: Service[] = [];
    allServicesData.forEach((main) => {
      main.categories.forEach((cat) => {
        cat.services.forEach((service) => {
          services.push(service);
        });
      });
    });
    return services;
  }, []);

  // 🧭 Filtered search results
  const filtered = query.trim()
    ? allServices.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative w-full sm:w-[430px] mt-4">
      {/* 🔍 Search Icon */}
      <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
        <Search className="w-6 h-6" />
      </span>

      {/* 🧡 Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={displayedText}
        className="w-full pl-14 pr-5 py-1 text-lg rounded-full border-2 border-gray-300 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/30 focus:outline-none text-gray-800 shadow-lg transition-all"
      />

      {/* 📄 Search Results */}
      {filtered.length > 0 && (
        <ul className="absolute mt-2 w-full bg-white rounded-xl shadow-2xl overflow-hidden z-10 max-h-60 overflow-y-auto custom-scrollbar border border-gray-200">
          {filtered.map((service) => (
            <li
              key={service.href}
              className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-gray-800 text-lg"
            >
              <Link href={service.href} className="block w-full h-full">
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
