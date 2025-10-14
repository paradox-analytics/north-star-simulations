import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 text-center sticky top-0 z-50">
        <p className="text-sm md:text-base font-semibold">
          See How We Took 1st Place at the{' '}
          <a
            href="https://www.nist.gov/ctl/pscr/team-north-star-simulations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-100 transition-colors"
          >
            NIST Chariot Challenge
          </a>
        </p>
      </div>
      <nav className="bg-white border-b border-slate-200 sticky top-[52px] z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/north-star-logo copy copy.png" alt="North Star Simulations" className="h-20" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-cyan-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </Link>

            <div
              className="relative group"
            >
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className={`flex items-center space-x-1 transition-colors ${
                  location.pathname.includes('/solutions') || location.pathname.includes('/use-cases') ? 'text-cyan-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSolutionsOpen(false)}
                  />
                  <div
                    className="fixed md:absolute top-[140px] md:top-full left-0 right-0 md:left-1/2 md:-translate-x-1/2 mt-0 md:mt-2 mx-0 md:mx-auto w-full md:w-[calc(100vw-2rem)] md:max-w-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-none md:rounded-lg shadow-2xl border-t md:border border-slate-700 p-4 md:p-8 max-h-[calc(100vh-140px)] md:max-h-none overflow-y-auto z-20"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <Link
                      to="/solutions/emergency"
                      className="group relative bg-slate-800/50 hover:bg-gradient-to-br hover:from-red-600/20 hover:to-orange-600/20 rounded-lg p-4 md:p-6 transition-all border border-slate-700 hover:border-red-500/50"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-red-400 transition-colors">Emergency Services</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Police, Fire, EMS, First Responders</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/manufacturing"
                      className="group relative bg-slate-800/50 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-cyan-600/20 rounded-lg p-4 md:p-6 transition-all border border-slate-700 hover:border-blue-500/50"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-blue-400 transition-colors">Manufacturing</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Industrial & Microchip Production</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/construction"
                      className="group relative bg-slate-800/50 hover:bg-gradient-to-br hover:from-yellow-600/20 hover:to-orange-600/20 rounded-lg p-4 md:p-6 transition-all border border-slate-700 hover:border-yellow-500/50"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-yellow-400 transition-colors">Construction</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Commercial & Skilled Trades Safety</p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solutions/infrastructure"
                      className="group relative bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 rounded-lg p-4 md:p-6 transition-all border border-slate-700 hover:border-purple-500/50"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-purple-400 transition-colors">Critical Infrastructure</h3>
                          <p className="text-slate-400 text-xs md:text-sm">Power Grids & Digital Twins</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <Link
                      to="/use-cases"
                      className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      View All Solutions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                </>
              )}
            </div>

            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-cyan-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              About Us
            </Link>
            <form
              name="email-capture"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData as any).toString()
                })
                .then(() => {
                  alert("Thank you! We'll be in touch soon.");
                  (e.target as HTMLFormElement).reset();
                })
                .catch(() => alert("Error submitting form. Please try again."));
              }}
              className="flex items-center space-x-2"
            >
              <input type="hidden" name="form-name" value="email-capture" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm w-48"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all whitespace-nowrap text-sm font-medium"
              >
                Schedule Consultation
              </button>
            </form>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/use-cases"
              className="block py-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Solutions Overview
            </Link>
            <Link
              to="/solutions/emergency"
              className="block py-2 pl-4 text-slate-600 hover:text-slate-900 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Emergency Services
            </Link>
            <Link
              to="/solutions/manufacturing"
              className="block py-2 pl-4 text-slate-600 hover:text-slate-900 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Manufacturing
            </Link>
            <Link
              to="/solutions/construction"
              className="block py-2 pl-4 text-slate-600 hover:text-slate-900 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Construction
            </Link>
            <Link
              to="/solutions/infrastructure"
              className="block py-2 pl-4 text-slate-600 hover:text-slate-900 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Critical Infrastructure
            </Link>
            <Link
              to="/about"
              className="block py-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <form
              name="email-capture"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData as any).toString()
                })
                .then(() => {
                  alert("Thank you! We'll be in touch soon.");
                  (e.target as HTMLFormElement).reset();
                  setIsOpen(false);
                })
                .catch(() => alert("Error submitting form. Please try again."));
              }}
              className="mt-4 space-y-2"
            >
              <input type="hidden" name="form-name" value="email-capture" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="w-full text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
