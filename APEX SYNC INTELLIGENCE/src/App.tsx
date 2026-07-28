/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Component, ErrorInfo, ReactNode, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, X, Brain } from 'lucide-react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import EcosystemView from './components/EcosystemView';
import JournalView from './components/JournalView';
import CareersView from './components/CareersView';
import ContactView from './components/ContactView';
import CustomCursor from './components/CustomCursor';

// 3D Error Boundary to catch GLTF loading failures (e.g. 404) and fall back gracefully
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn("3D Logo asset load error, falling back to procedural gold model:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Sub-component that renders a beautiful reflective gold torus knot procedurally
function LogoModel() {
  return <FallbackGoldLogo />;
}

// Beautiful fallback geometry when './gold_logo.glb' is not loaded or missing
function FallbackGoldLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Dynamic mouse tracking tilt
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.4;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, 
        targetX + (state.clock.getElapsedTime() * 0.12), 
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <mesh castShadow receiveShadow scale={0.45}>
          <torusKnotGeometry args={[1, 0.35, 120, 16]} />
          <meshPhysicalMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.15}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Center>
    </group>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [siteLoaded, setSiteLoaded] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [secretLetterOpen, setSecretLetterOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  // Initial premium page load sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoaded(true);
    }, 1200);

    // Logging the hidden developer easter egg console message
    console.log(
      '%cCurious enough to inspect the console? \nWe like curious people. \nIf you\'re passionate about building thoughtful technology, we\'d love to meet you someday. \n— Apex Sync Engineering',
      'color: #C9A227; font-family: monospace; font-size: 13px; font-weight: bold; line-height: 1.5; padding: 10px;'
    );

    return () => clearTimeout(timer);
  }, []);

  // Tracks logo click secret
  const handleLogoClick = () => {
    setLogoClicks((prev) => {
      const next = prev + 1;
      if (next === 7) {
        setSecretLetterOpen(true);
        return 0; // reset
      }
      return next;
    });
  };

  // Render active view component
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutView onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesView onPageChange={setCurrentPage} />;
      case 'ecosystem':
        return <EcosystemView onPageChange={setCurrentPage} />;
      case 'journal':
        return <JournalView onPageChange={setCurrentPage} />;
      case 'careers':
        return <CareersView onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactView onPageChange={setCurrentPage} />;
      default:
        return <HomeView onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-apex-black text-ivory-white selection:bg-apex-gold/25 selection:text-ivory-white flex flex-col justify-between relative">
      <AnimatePresence mode="wait">
        {!siteLoaded ? (
          /* Premium cinematic logo-coming-online loader */
          <motion.div
            key="site-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-apex-black z-[100] flex flex-col items-center justify-center gap-6"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <span className="absolute inset-0 bg-apex-gold rounded-full opacity-15 animate-ping" />
              <img 
                src="https://lh3.googleusercontent.com/d/1IDBwdJa-WOG5uKA-WTJsKTrau1dzkgnb" 
                alt="Apex Sync Logo Loader" 
                referrerPolicy="no-referrer"
                className="w-18 h-18 object-contain animate-pulse filter drop-shadow-[0_0_16px_rgba(201,162,39,0.6)] brightness-115 contrast-105"
              />
            </div>
            <div className="text-center">
              <span className="font-display font-semibold text-lg tracking-[0.2em] text-ivory-white block">
                APEX <span className="text-apex-gold">SYNC</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-steel-gray mt-1 block">
                INITIALIZING COGNITIVE_GRAPH_V1
              </span>
            </div>
            {/* Animated gold progress line */}
            <div className="w-40 h-[2px] bg-carbon-gray rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                className="relative h-full bg-apex-gold w-1/2"
              />
            </div>
          </motion.div>
        ) : (
          /* Real website layout */
          <motion.div
            key="site-ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-grow flex flex-col justify-between relative"
          >
            {/* Beautiful looping 3D background animation */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
              <CanvasErrorBoundary fallback={
                <div className="absolute inset-0 bg-gradient-to-tr from-apex-black to-obsidian opacity-20 flex items-center justify-center pointer-events-none">
                  <div className="w-[300px] h-[300px] bg-apex-gold/5 rounded-full blur-[100px] animate-pulse" />
                </div>
              }>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                  <directionalLight position={[-5, -5, -2]} intensity={0.8} color="#FFE4B5" />
                  <Suspense fallback={null}>
                    <LogoModel />
                  </Suspense>
                </Canvas>
              </CanvasErrorBoundary>
            </div>

            {/* Header (Includes easter egg trigger in logo) */}
            <Header 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
              onLogoClick={handleLogoClick}
            />

            {/* Content view with dynamic sliding cross-fades */}
            <main className="flex-grow pb-20 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {renderCurrentView()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Footer */}
            <div className="relative z-10">
              <Footer onPageChange={setCurrentPage} onOpenLegalModal={setLegalModalType} />
            </div>

            {/* Legal Modals */}
            <AnimatePresence>
              {legalModalType && (
                <div id="legal-modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setLegalModalType(null)}
                    className="absolute inset-0 bg-apex-black/90 backdrop-blur-sm"
                  />

                  {/* Modal Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-xl bg-obsidian border border-carbon-gray p-8 rounded shadow-2xl z-10 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-apex-gold/5 rounded-full blur-[40px]" />

                    <div className="flex items-center justify-between mb-6 border-b border-carbon-gray pb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-apex-gold" size={16} />
                        <span className="font-mono text-[10px] text-apex-gold uppercase tracking-wider">
                          {legalModalType === 'privacy' && 'Sovereign Privacy Directive // PRIV_SEC_OK'}
                          {legalModalType === 'terms' && 'Sovereign Tenancy Terms // OPS_SEC_OK'}
                          {legalModalType === 'cookies' && 'Sovereign Session Directive // STATE_OK'}
                        </span>
                      </div>
                      <button
                        id="close-legal-modal"
                        onClick={() => setLegalModalType(null)}
                        className="text-platinum-gray hover:text-ivory-white cursor-pointer focus:outline-none"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {legalModalType === 'privacy' && (
                      <div className="font-sans text-xs text-platinum-gray leading-relaxed flex flex-col gap-5">
                        <h3 className="font-display font-bold text-xl text-ivory-white">
                          Your context is your absolute property.
                        </h3>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">1. DATA SOVEREIGNTY POSTURE</h4>
                          <p className="text-steel-gray">
                            At Apex Sync, we believe intelligence should be continuous but completely sovereign. We construct single-tenant secure container environments. Your weights, logs, vectors, and memories remain strictly yours and are never aggregated or shared.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">2. ZERO EXTERNAL INGESTS</h4>
                          <p className="text-steel-gray">
                            Our synchronization engines communicate strictly over audited proxy nodes. No third-party LLMs, ad networks, or data-scraping brokers are permitted within our application framework sandbox.
                          </p>
                        </div>
                      </div>
                    )}

                    {legalModalType === 'terms' && (
                      <div className="font-sans text-xs text-platinum-gray leading-relaxed flex flex-col gap-5">
                        <h3 className="font-display font-bold text-xl text-ivory-white">
                          Sovereign Tenancy Agreement
                        </h3>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">1. INTENDED SERVICE CLASS</h4>
                          <p className="text-steel-gray">
                            All intelligent systems are delivered as enterprise-class digital infrastructure. By engaging with our sandbox tools, client teams agree to preserve the strict compliance context parameters detailed in individual client tenancy contracts.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">2. TENANCY SANCTIONS</h4>
                          <p className="text-steel-gray">
                            We reserve the right to immediately suspend or sever sandbox access for connections or automated workloads attempting system probing, prompt injection attacks, or general network saturation.
                          </p>
                        </div>
                      </div>
                    )}

                    {legalModalType === 'cookies' && (
                      <div className="font-sans text-xs text-platinum-gray leading-relaxed flex flex-col gap-5">
                        <h3 className="font-display font-bold text-xl text-ivory-white">
                          Zero-Tracking Session Directive
                        </h3>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">1. STATE ENCAPSULATION</h4>
                          <p className="text-steel-gray">
                            This digital operating stage does not employ commercial targeting cookies, advertising pixels, or analytics trackers. We use strictly local states to cache active variables (such as category filters and active articles) inside your local browser memory.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] text-apex-gold uppercase tracking-widest mb-1.5">2. VOLUNTARY OPT-IN</h4>
                          <p className="text-steel-gray">
                            Any form submissions (e.g. general inquiries, job applications) directly transfer context into our secure pipeline and are processed as explicit, voluntary synchronization actions under complete security.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 border-t border-carbon-gray pt-4 flex justify-between items-center font-mono text-[9px] text-smoke-gray">
                      <span>APEX SYNC LEGAL CORP</span>
                      <span>SECURE_DIGITAL_HQ_OK</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Hidden Secret letter overlay modal */}
            <AnimatePresence>
              {secretLetterOpen && (
                <div id="secret-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSecretLetterOpen(false)}
                    className="absolute inset-0 bg-apex-black"
                  />

                  {/* Envelope Document */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-xl bg-obsidian border border-apex-gold p-8 rounded shadow-2xl z-10 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-apex-gold/5 rounded-full blur-[40px]" />

                    <div className="flex items-center justify-between mb-6 border-b border-carbon-gray pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="text-apex-gold" size={16} />
                        <span className="font-mono text-[10px] text-apex-gold uppercase tracking-wider">
                          ORIGINAL FOUNDER DIRECTIVE // INTERNAL_MEMO
                        </span>
                      </div>
                      <button
                        id="close-secret-modal"
                        onClick={() => setSecretLetterOpen(false)}
                        className="text-platinum-gray hover:text-ivory-white cursor-pointer focus:outline-none"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <h3 className="font-display font-bold text-xl text-ivory-white mb-4">
                      Every breakthrough begins with a question.
                    </h3>

                    <div className="font-sans text-xs text-platinum-gray leading-relaxed flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
                      <p>
                        To the curious reader,
                      </p>
                      <p>
                        We did not build Apex Sync to chase temporary artificial intelligence trends. We built it because we saw a future where the relationship between humans and software will change fundamentally.
                      </p>
                      <p>
                        For decades, software has been something humans operated. Tomorrow, software will become something humans collaborate with. Systems that remember, understand, and grow alongside us.
                      </p>
                      <p>
                        This is the digital headquarters of a global technology company. Excellence is a continuous process. Thank you for exploring.
                      </p>
                      <p className="font-semibold text-apex-gold">
                        — The Founders of Apex Sync
                      </p>
                    </div>

                    <div className="mt-8 border-t border-carbon-gray pt-4 flex justify-between items-center font-mono text-[9px] text-smoke-gray">
                      <span>EST. OCTOBER 2025</span>
                      <span>MD_AUTHENTICATION_OK</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Custom magnetic interactive cursor with particles */}
            <CustomCursor />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
