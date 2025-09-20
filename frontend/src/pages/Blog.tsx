// src/pages/Blog.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useState } from "react";
import { BookOpen, Heart, Leaf, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Managing Stress in Daily Life",
    excerpt:
      "Learn practical strategies to manage stress and maintain balance in your daily routine.",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    bg: "from-[#fde2d3] to-[#fff6ef]",
  },
  {
    id: 2,
    title: "Mindfulness Techniques",
    excerpt:
      "Explore simple mindfulness exercises that help calm your mind and improve focus.",
    icon: <Leaf className="w-10 h-10 text-green-500" />,
    bg: "from-[#fef7e1] to-[#fffaf0]",
  },
  {
    id: 3,
    title: "Healthy Daily Habits",
    excerpt:
      "Discover daily habits that promote long-term mental well-being and resilience.",
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    bg: "from-[#e9f7fc] to-[#f5fcff]",
  },
  {
    id: 4,
    title: "Coping with Loneliness",
    excerpt:
      "Practical tips to manage feelings of loneliness and build meaningful connections.",
    icon: <Users className="w-10 h-10 text-purple-500" />,
    bg: "from-[#f7e9ff] to-[#faf4ff]",
  },
];

export default function Blog() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#3a2f2f]">
          Blog & Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore educational articles, mindfulness tips, and trusted external
          resources for your mental well-being.
        </p>
      </section>

      {/* Articles Section */}
      <section className="px-6 md:px-12 lg:px-20 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#3a2f2f]">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${blog.bg} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                {blog.icon}
                <h3 className="text-xl font-bold">{blog.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-sm font-medium text-[#3a2f2f] hover:text-[#6b4e3d] transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* External Resources Section */}
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-gradient-to-br from-[#fff6ef] to-[#fdf6ec] mt-10 rounded-t-3xl shadow-inner">
        <h2 className="text-2xl font-semibold mb-6 text-[#3a2f2f]">
          External Resources
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <a
              href="https://www.who.int/health-topics/mental-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              WHO – Mental Health Resources
            </a>
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <a
              href="https://www.mhanational.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mental Health America
            </a>
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <a
              href="https://findahelpline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Global Helplines Directory
            </a>
          </li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
    
  );
}
