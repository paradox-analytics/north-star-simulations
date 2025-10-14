import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ManufacturingPage from './pages/Manufacturing';
import EmergencyServicesPage from './pages/EmergencyServices';
import ConstructionPage from './pages/Construction';
import CriticalInfrastructurePage from './pages/CriticalInfrastructure';
import { ChevronRight, Shield, Factory, HardHat, Zap } from 'lucide-react';

function UseCasesPage() {
  const useCases = [
    {
      title: 'Emergency Services & First Responders',
      icon: Shield,
      description: 'Immersive training for police, fire, EMS, and first responders in high-risk scenarios.',
      gradient: 'from-red-500 to-orange-500',
      image: '/image copy copy copy copy copy copy copy.png',
      link: '/solutions/emergency'
    },
    {
      title: 'Manufacturing & Industrial',
      icon: Factory,
      description: 'Safety training and operational simulations for manufacturing facilities and microchip production.',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/image copy copy.png',
      link: '/solutions/manufacturing'
    },
    {
      title: 'Commercial Construction',
      icon: HardHat,
      description: 'Safety protocols and hazard awareness training for construction sites and skilled trades.',
      gradient: 'from-yellow-500 to-orange-500',
      image: '/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png',
      link: '/solutions/construction'
    },
    {
      title: 'Critical Infrastructure & Digital Twins',
      icon: Zap,
      description: 'Training and monitoring systems for power grids, energy facilities, and critical infrastructure.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
      link: '/solutions/infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              High-Risk Training Solutions
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Specialized immersive training systems designed for high-stakes environments where preparation saves lives and protects critical operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <Link
                  key={useCase.link}
                  to={useCase.link}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <div className="inline-flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700">
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/solutions/emergency" element={<EmergencyServicesPage />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
          <Route path="/solutions/construction" element={<ConstructionPage />} />
          <Route path="/solutions/infrastructure" element={<CriticalInfrastructurePage />} />
        </Routes>

        <footer className="bg-white text-slate-600 py-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/north-star-logo copy copy.png" alt="North Star Simulations" className="h-16" />
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Custom immersive training systems and experiences for government, enterprise, and research organizations.
                </p>
                <p className="text-sm text-slate-500">
                  Based in Tulsa, Oklahoma | Part of Gradient Technology Incubator
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <p>© 2025 North Star Simulations. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
