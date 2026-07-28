/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, X, Check, Heart, Shield, Sparkles } from 'lucide-react';
import { OpenRole, PageId } from '../types';
import { OPEN_ROLES } from '../data';

interface CareersViewProps {
  onPageChange: (page: PageId) => void;
}

export default function CareersView({ onPageChange }: CareersViewProps) {
  const [selectedRole, setSelectedRole] = useState<OpenRole | null>(null);
  const [applyFormOpen, setApplyFormOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantLinkedin, setApplicantLinkedin] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');

  const handleApplyClick = (role: OpenRole) => {
    setSelectedRole(role);
    setApplyFormOpen(true);
    setSubmitSuccess(false);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    // Simulate safe secure database save or API call
    setSubmitSuccess(true);
    setTimeout(() => {
      // Clear form
      setApplicantName('');
      setApplicantEmail('');
      setApplicantLinkedin('');
      setApplicantNotes('');
      // Close overlay after delay
      setApplyFormOpen(false);
      setSelectedRole(null);
    }, 2500);
  };

  return (
    <div id="careers-view" className="w-full pt-20">
      {/* Hero Header */}
      <section id="careers-hero" className="py-20 relative overflow-hidden border-b border-carbon-gray">
        <div className="absolute top-1/4 right-1/4 w-[320px] h-[320px] bg-apex-gold/5 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            BUILD WITH US
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-white mb-6">
            Help Us Engineer the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-gold to-champagne-gold">
              Future of Cognitive Software.
            </span>
          </h1>
          <p className="font-sans text-lg text-platinum-gray leading-relaxed max-w-2xl mx-auto">
            We are looking for long-term builders, researchers, and designers who believe in precision, structural discipline, and technology that serves human vision.
          </p>
        </div>
      </section>

      {/* Our Culture Principles Section */}
      <section id="careers-culture" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            OUR MINDSET
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white mb-4">
            How We Build Together
          </h2>
          <p className="font-sans text-base text-platinum-gray leading-relaxed">
            We are not a hyperactive startup chasing headlines. We value sustainable pace, deep attention, and deliberate execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-obsidian border border-carbon-gray p-6 rounded-sm hover:border-apex-gold/30 transition-colors">
            <h3 className="font-display font-semibold text-base text-ivory-white mb-2">Curiosity First</h3>
            <p className="font-sans text-xs text-steel-gray leading-relaxed">
              We admire teammates who ask better questions rather than providing rapid, unvetted answers. Learning is a continuous lifecycle.
            </p>
          </div>
          <div className="bg-obsidian border border-carbon-gray p-6 rounded-sm hover:border-apex-gold/30 transition-colors">
            <h3 className="font-display font-semibold text-base text-ivory-white mb-2">Extreme Ownership</h3>
            <p className="font-sans text-xs text-steel-gray leading-relaxed">
              Builders take responsibility for the health of systems. We leave files, documents, and code better than we encountered them.
            </p>
          </div>
          <div className="bg-obsidian border border-carbon-gray p-6 rounded-sm hover:border-apex-gold/30 transition-colors">
            <h3 className="font-display font-semibold text-base text-ivory-white mb-2">Clear Writing</h3>
            <p className="font-sans text-xs text-steel-gray leading-relaxed">
              Strong writing reduces coordination overhead. We document decisions, keep meetings concise, and value quiet, deep-work sessions.
            </p>
          </div>
          <div className="bg-obsidian border border-carbon-gray p-6 rounded-sm hover:border-apex-gold/30 transition-colors">
            <h3 className="font-display font-semibold text-base text-ivory-white mb-2">Uncompromising Craft</h3>
            <p className="font-sans text-xs text-steel-gray leading-relaxed">
              Every detail—from visual typography hierarchy to exception-handling routes—matters. We are built to endure for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Listing */}
      <section id="open-roles-section" className="bg-obsidian border-y border-carbon-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
              ACTIVE VACANCIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ivory-white">
              Open Technical Opportunities
            </h2>
            <p className="font-sans text-sm text-platinum-gray mt-2">
              All roles support a hybrid or fully remote setup with high autonomy and structural ownership.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-apex-black border border-carbon-gray rounded-sm p-8 hover:border-apex-gold/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded bg-carbon-gray/50 border border-carbon-gray/50 text-[10px] font-mono text-apex-gold uppercase tracking-widest">
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-steel-gray">
                      <MapPin size={12} /> {role.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-steel-gray">
                      <Clock size={12} /> {role.type}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ivory-white mb-3">
                    {role.title}
                  </h3>
                  <p className="font-sans text-sm text-platinum-gray mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-2">
                        Requirements:
                      </h5>
                      <ul className="flex flex-col gap-1.5">
                        {role.requirements.map((req, id) => (
                          <li key={id} className="font-sans text-xs text-steel-gray leading-normal">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-2">
                        What We Offer:
                      </h5>
                      <ul className="flex flex-col gap-1.5">
                        {role.benefits.map((ben, id) => (
                          <li key={id} className="font-sans text-xs text-steel-gray leading-normal">
                            • {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-end h-full items-end lg:items-center">
                  <button
                    id={`apply-${role.id}`}
                    onClick={() => handleApplyClick(role)}
                    className="w-full lg:w-auto bg-transparent hover:bg-apex-gold hover:text-apex-black border border-apex-gold text-apex-gold font-sans font-semibold text-xs px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer focus:outline-none"
                  >
                    Apply for this Role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Inquiry CTA Experience */}
      <section id="careers-general-cta" className="py-24 bg-obsidian border-t border-carbon-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-apex-gold uppercase tracking-widest mb-3 block">
            NOT FINDING A MATCH?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ivory-white mb-6">
            We are always looking for exceptional talent.
          </h2>
          <p className="font-sans text-sm text-platinum-gray leading-relaxed max-w-xl mx-auto mb-8">
            If you do not see a listing matching your exact capabilities but believe your perspective aligns with our focus on secure architectures, durable context synchronizations, and pixel perfection, submit a general inquiry.
          </p>
          <button
            onClick={() => {
              onPageChange('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-transparent hover:bg-apex-gold hover:text-apex-black border border-apex-gold text-apex-gold font-sans font-semibold text-xs px-8 py-3.5 rounded-sm transition-all duration-300 cursor-pointer focus:outline-none uppercase tracking-wider"
          >
            Submit General Career Briefing
          </button>
        </div>
      </section>

      {/* Slide-in Apply Modal Dialog */}
      <AnimatePresence>
        {applyFormOpen && selectedRole && (
          <div id="apply-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              id="apply-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyFormOpen(false)}
              className="absolute inset-0 bg-apex-black/80"
            />

            {/* Sidebar content */}
            <motion.div
              id="apply-modal-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl h-screen bg-obsidian border-l border-carbon-gray p-6 sm:p-8 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-carbon-gray pb-4">
                  <div>
                    <span className="font-mono text-[10px] text-apex-gold uppercase tracking-wider block mb-1">
                      SUBMIT AN APPLICATION
                    </span>
                    <h3 className="font-display font-bold text-lg text-ivory-white">
                      {selectedRole.title}
                    </h3>
                  </div>
                  <button
                    id="close-apply-modal"
                    onClick={() => setApplyFormOpen(false)}
                    className="text-platinum-gray hover:text-ivory-white cursor-pointer focus:outline-none p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                {submitSuccess ? (
                  <motion.div
                    id="apply-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-apex-gold/15 border border-apex-gold/40 flex items-center justify-center">
                      <Check size={28} className="text-apex-gold animate-bounce" />
                    </div>
                    <h4 className="font-display font-semibold text-xl text-ivory-white">
                      Application Submitted Successfully
                    </h4>
                    <p className="font-sans text-sm text-steel-gray max-w-sm leading-relaxed">
                      Thank you. Our engineering team review pipeline has captured your context successfully. We will follow up via email within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form id="apply-form" onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="applicant-name"
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-graphite border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/30"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="applicant-email"
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g. elena@rosto.tech"
                        className="w-full bg-graphite border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/30"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-2">
                        LinkedIn / Portfolio URL *
                      </label>
                      <input
                        id="applicant-linkedin"
                        type="url"
                        required
                        value={applicantLinkedin}
                        onChange={(e) => setApplicantLinkedin(e.target.value)}
                        placeholder="e.g. https://linkedin.com/in/elena-rostova"
                        className="w-full bg-graphite border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/30"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-apex-gold uppercase tracking-wider mb-2">
                        Brief Background Overview
                      </label>
                      <textarea
                        id="applicant-notes"
                        rows={4}
                        value={applicantNotes}
                        onChange={(e) => setApplicantNotes(e.target.value)}
                        placeholder="Describe your core expertise in RAG pipelines, design systems, or human-AI cooperative interfaces..."
                        className="w-full bg-graphite border border-carbon-gray rounded px-4 py-3 font-sans text-sm text-ivory-white focus:outline-none focus:border-apex-gold focus:ring-1 focus:ring-apex-gold/30 resize-none"
                      />
                    </div>

                    <button
                      id="applicant-submit"
                      type="submit"
                      className="w-full bg-apex-gold hover:bg-secondary-gold text-apex-black font-sans font-semibold text-sm py-4 rounded-sm transition-all focus:outline-none mt-4 cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>

              <div className="border-t border-carbon-gray pt-4 text-center">
                <p className="font-mono text-[9px] text-smoke-gray leading-normal uppercase">
                  🔐 Bank-Grade Encryption safeguards applicant privacy.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
