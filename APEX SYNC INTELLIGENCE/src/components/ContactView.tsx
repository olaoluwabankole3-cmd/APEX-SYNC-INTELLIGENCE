/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Mail, Globe, MapPin, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { ContactInquiry, PageId } from '../types';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What services does Apex Sync provide?',
    answer: 'We provide specialized Intelligence Engineering capabilities, including Intelligent Systems Design, Enterprise secure model fine-tuning, strategic AI technology roadmap advisory, and highly selective Custom Product Development.'
  },
  {
    question: 'Do you offer custom AI development?',
    answer: 'Yes, but selectively. We partner with leaders and enterprise teams whose projects align with our expertise in memory-synchronization, sovereign data hosting, and long-term organizational context preservation.'
  },
  {
    question: 'How can I request a product demonstration?',
    answer: 'You can submit an inquiry through this form under the "Business" category. Our design and systems architects will review your request and schedule a live, high-context briefing of Executive Intelligence.'
  },
  {
    question: 'How do partnerships and investment conversations work?',
    answer: 'We maintain open channels with select research institutions, universities, and technology providers. For both partnerships and investor relations, submit a detailed brief selecting the matching inquiry category.'
  }
];

interface ContactViewProps {
  onPageChange: (page: PageId) => void;
}

export default function ContactView({ onPageChange }: ContactViewProps) {
  const [category, setCategory] = useState<ContactInquiry['category']>('Business');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const categories: ContactInquiry['category'][] = [
    'Business', 'Partnerships', 'Careers', 'Investors', 'Media', 'Support', 'General'
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormSubmitted(true);
    setTimeout(() => {
      // Clear states
      setName('');
      setEmail('');
      setOrg('');
      setSubject('');
      setMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div id="contact-view" className="w-full pt-20">
      {/* Hero Header */}
      <section id="contact-hero" className="py-20 relative overflow-hidden border-b border-carbon-gray">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-apex-gold/5 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            RELATIONSHIP EXPERIENCE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
            Let's Start a Conversation.
          </h1>
          <p className="font-sans text-lg text-platinum-gray leading-relaxed max-w-2xl mx-auto">
            Great breakthroughs begin with meaningful dialogue. Our systems and design team are ready to review your operational context and coordinate opportunities.
          </p>
        </div>
      </section>

      {/* Main Section: Form & Context Column */}
      <section id="contact-main" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-obsidian border border-carbon-gray rounded-sm p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  id="contact-success"
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center gap-4 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-apex-gold/15 border border-apex-gold/40 flex items-center justify-center mb-2">
                    <Check size={32} className="text-apex-gold animate-bounce" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ivory-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="font-sans text-sm text-steel-gray max-w-md leading-relaxed">
                    Thank you. Your message has been securely compiled into our synchronization pipeline. A member of the Apex Sync partner team will review your inquiry and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      onPageChange('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 bg-apex-gold text-apex-black font-sans font-semibold text-xs px-6 py-3 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none uppercase tracking-wider"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              ) : (
                <motion.div key="contact-form-block" className="flex flex-col">
                  {/* Category Selection triggers */}
                  <div className="mb-8">
                    <span className="block font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-3">
                      Select Inquiry Category *
                    </span>
                    <div id="contact-category-tabs" className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          id={`category-${cat.toLowerCase()}`}
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border transition-all cursor-pointer rounded focus:outline-none ${
                            category === cat
                              ? 'bg-apex-gold border-apex-gold text-apex-black font-semibold'
                              : 'bg-graphite/40 border-carbon-gray/75 text-platinum-gray hover:text-ivory-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* HTML Input Form */}
                  <form id="contact-form" onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-[10px] text-steel-gray uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Marcus Aurelius"
                          className="w-full bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/20"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-steel-gray uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. marcus@philosophy.co"
                          className="w-full bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-[10px] text-steel-gray uppercase tracking-wider mb-2">
                          Organization (Optional)
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          value={org}
                          onChange={(e) => setOrg(e.target.value)}
                          placeholder="e.g. Rome Enterprise"
                          className="w-full bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/20"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-steel-gray uppercase tracking-wider mb-2">
                          Subject (Optional)
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Enterprise Integration Brief"
                          className="w-full bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-steel-gray uppercase tracking-wider mb-2">
                        Describe Your Objective / Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your requirements or specific focus areas..."
                        className="w-full bg-graphite/60 border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/20 resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      className="bg-apex-gold hover:bg-secondary-gold text-apex-black font-sans font-semibold text-sm py-4 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      Submit Message <Send size={14} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: FAQs Accordion & Direct coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
                FAQ // ORIENTATION
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ivory-white mb-6">
                Frequently Answered Queries
              </h2>

              <div id="contact-faqs" className="flex flex-col gap-4">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-carbon-gray/60 rounded bg-obsidian/30 overflow-hidden"
                    >
                      <button
                        id={`faq-btn-${idx}`}
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between font-display font-medium text-sm text-ivory-white hover:text-apex-gold transition-colors focus:outline-none"
                      >
                        {faq.question}
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={`faq-content-${idx}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-5 pb-4 font-sans text-xs text-platinum-gray leading-relaxed"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct contact coordinates */}
            <div className="border-t border-carbon-gray/50 pt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-mono text-xs text-platinum-gray">
                <Mail size={16} className="text-apex-gold" />
                <span>partner@apexsync.tech</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-platinum-gray">
                <Clock size={16} className="text-apex-gold" />
                <span>Symmetric Remote // GMT Timezone</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-platinum-gray">
                <MapPin size={16} className="text-apex-gold" />
                <span>London Headquarters, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
