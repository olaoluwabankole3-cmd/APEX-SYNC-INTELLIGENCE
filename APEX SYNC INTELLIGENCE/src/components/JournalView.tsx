/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Calendar, User, Sparkles } from 'lucide-react';
import { JournalArticle, PageId } from '../types';
import { JOURNAL_ARTICLES } from '../data';

interface JournalViewProps {
  onPageChange: (page: PageId) => void;
}

export default function JournalView({ onPageChange }: JournalViewProps) {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Research', 'Design', 'Leadership'];

  const filteredArticles = selectedCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter(a => a.category === selectedCategory);

  const selectedArticle = JOURNAL_ARTICLES.find(a => a.id === selectedArticleId);

  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="journal-view" className="w-full pt-20">
      <AnimatePresence mode="wait">
        {!selectedArticleId ? (
          /* LIST VIEW */
          <motion.div
            key="journal-list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto px-6 py-12"
          >
            {/* Header block */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
                KNOWLEDGE JOURNAL
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory-white mb-4">
                Apex Sync Publications
              </h1>
              <p className="font-sans text-base text-platinum-gray leading-relaxed">
                We believe in educating before we promote. Our Knowledge Journal documents research findings, engineering trade-offs, design principles, and strategic vision.
              </p>
            </div>

            {/* Filtration buttons */}
            <div id="journal-category-filters" className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  id={`filter-${cat.toLowerCase()}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 text-xs font-mono tracking-wider uppercase border rounded-full transition-all cursor-pointer focus:outline-none ${
                    selectedCategory === cat
                      ? 'bg-apex-gold border-apex-gold text-apex-black font-semibold'
                      : 'bg-obsidian border-carbon-gray text-platinum-gray hover:text-ivory-white hover:border-steel-gray'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Post Card (High emphasis) */}
            {selectedCategory === 'All' && (
              <div className="mb-16">
                <h3 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-4">
                  ★ FEATURED PUBLICATION
                </h3>
                {JOURNAL_ARTICLES.filter(a => a.featured).map((article) => (
                  <div
                    key={article.id}
                    onClick={() => handleArticleClick(article.id)}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-obsidian border border-carbon-gray p-8 rounded-sm hover:border-apex-gold/40 cursor-pointer transition-all duration-300 group"
                  >
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-2.5 py-1 rounded bg-carbon-gray/50 border border-carbon-gray text-[10px] font-mono text-apex-gold">
                            {article.category}
                          </span>
                          <span className="font-mono text-xs text-steel-gray">{article.date}</span>
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ivory-white mb-4 group-hover:text-apex-gold transition-colors">
                          {article.title}
                        </h2>
                        <p className="font-sans text-sm sm:text-base text-platinum-gray leading-relaxed mb-6">
                          {article.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-6 font-mono text-[11px] text-steel-gray">
                        <span className="flex items-center gap-1.5">
                          <User size={12} /> {article.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                    </div>
                    {/* Visual container inside featured card */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-carbon-gray/20 to-apex-black border border-carbon-gray/40 rounded p-6 flex flex-col justify-between aspect-[4/3] lg:aspect-auto">
                      <BookOpen size={28} className="text-apex-gold" />
                      <div>
                        <span className="font-mono text-[10px] text-smoke-gray block">RECONSTRUCTING CONTEXT</span>
                        <span className="font-mono text-xs text-platinum-gray">Apex Memory Graph System // Trace</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* General Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(a => !a.featured || selectedCategory !== 'All').map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article.id)}
                  className="bg-obsidian border border-carbon-gray rounded-sm p-6 cursor-pointer hover:border-apex-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded bg-carbon-gray/30 border border-carbon-gray/50 text-[10px] font-mono text-apex-gold">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-steel-gray">{article.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-ivory-white mb-2 group-hover:text-apex-gold transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-platinum-gray leading-relaxed line-clamp-3 mb-6">
                      {article.subtitle}
                    </p>
                  </div>
                  <div className="border-t border-carbon-gray/40 pt-4 flex items-center justify-between font-mono text-[10px] text-steel-gray">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* READ VIEW */
          <motion.div
            key="journal-read"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-6 py-12"
          >
            {/* Back trigger */}
            <button
              id="back-to-journal"
              onClick={handleBack}
              className="inline-flex items-center gap-2 font-mono text-xs text-apex-gold hover:text-champagne-gold mb-10 cursor-pointer focus:outline-none"
            >
              <ArrowLeft size={14} /> BACK TO PUBLICATIONS
            </button>

            {/* Article Editorial Header */}
            {selectedArticle && (
              <article>
                <header className="mb-12 border-b border-carbon-gray/40 pb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-2.5 py-1 rounded bg-apex-gold/15 border border-apex-gold/30 text-[10px] font-mono text-apex-gold uppercase tracking-wider">
                      {selectedArticle.category}
                    </span>
                    <span className="font-mono text-xs text-steel-gray flex items-center gap-1.5">
                      <Calendar size={12} /> {selectedArticle.date}
                    </span>
                    <span className="font-mono text-xs text-steel-gray flex items-center gap-1.5">
                      <Clock size={12} /> {selectedArticle.readTime}
                    </span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-white mb-6 leading-tight">
                    {selectedArticle.title}
                  </h1>
                  <p className="font-sans text-lg sm:text-xl text-platinum-gray leading-relaxed">
                    {selectedArticle.subtitle}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-carbon-gray/50 border border-carbon-gray flex items-center justify-center font-mono text-xs text-apex-gold font-semibold">
                      AS
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-semibold text-ivory-white">{selectedArticle.author}</span>
                      <span className="block font-mono text-[9px] text-smoke-gray uppercase tracking-widest">PUBLISHED RESEARCH</span>
                    </div>
                  </div>
                </header>

                {/* Article Copy with maximum character line-width constraint for excellent readability */}
                <div id="journal-article-body" className="font-sans text-base text-platinum-gray leading-relaxed max-w-[70ch] mx-auto flex flex-col gap-6">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx} className="mb-2 select-text selection:bg-apex-gold/30 first-of-type:text-lg first-of-type:text-ivory-white">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Footer and final call */}
                <div className="mt-16 pt-10 border-t border-carbon-gray/30 text-center">
                  <span className="font-mono text-xs text-smoke-gray uppercase tracking-widest block mb-4">
                    End of Publication // Apex Sync Journal
                  </span>
                  <div className="bg-obsidian border border-carbon-gray p-8 rounded-sm max-w-xl mx-auto">
                    <h3 className="font-display font-semibold text-lg text-ivory-white mb-2">
                      Interested in our engineering outcomes?
                    </h3>
                    <p className="font-sans text-xs text-steel-gray mb-6 leading-relaxed">
                      We construct permanent, secure technology assets. Reach out to discuss the structural integration of Executive Intelligence in your enterprise.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => {
                          onPageChange('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-apex-gold text-apex-black font-sans font-semibold text-xs px-5 py-2.5 rounded-sm hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none"
                      >
                        Contact Partnership Team
                      </button>
                      <button
                        onClick={() => handleArticleClick(selectedArticle.id === 'synchronization-pulse' ? 'quiet-confidence' : 'synchronization-pulse')}
                        className="text-xs font-mono text-apex-gold hover:text-champagne-gold focus:outline-none"
                      >
                        READ NEXT CONTRIBUTION →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
