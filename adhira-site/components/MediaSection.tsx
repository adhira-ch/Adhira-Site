"use client";
import { useState } from "react";
import { featuredArticles } from "@/data";
import { Marquee } from "./ui/Marquee";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const MediaSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<null | typeof featuredArticles[0]>(null);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Featured <span className="text-purple">In</span>
      </h2>

      <Marquee className="max-w-6xl w-full mx-auto" pauseOnHover>
        {featuredArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-72 bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50 mx-4"
          >
            {/* Clicking the image opens fullscreen modal */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking the image
                setSelectedArticle(article);
              }}
              className="w-full h-40"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={288}
                height={160}
                className="w-full h-40 object-cover"
              />
            </button>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              <p className="text-sm text-gray-400">
                {article.description.length > 50
                  ? article.description.substring(0, 50) + "..."
                  : article.description}
              </p>
              <span className="text-xs text-purple font-semibold block mt-2">
                {article.publisher}
              </span>
            </div>
          </a>
        ))}
      </Marquee>

      {/* Fullscreen Image Viewbox Modal with Full Details */}
      <Dialog open={!!selectedArticle} onClose={() => setSelectedArticle(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        {selectedArticle && (
          <div className="relative max-w-4xl p-4 bg-gray-900 rounded-lg shadow-lg text-white">
            <button
              className="absolute top-4 right-4 text-xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
              onClick={() => setSelectedArticle(null)}
            >
              ✕
            </button>
            <div className="flex justify-center">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="rounded-lg center h-96"
              />
            </div>
            <div className="mt-4 p-4">
              <h3 className="text-2xl font-bold">{selectedArticle.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{selectedArticle.description}</p>
              <span className="text-md text-purple font-semibold block mt-2">
                {selectedArticle.publisher}
              </span>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default MediaSection;