import { CheckCircle, Shield, Zap, Users, Network } from 'lucide-react';

export default function CriticalInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <section className="relative bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-300">
              Critical Infrastructure
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Protect and Maintain Essential Systems with Advanced XR Training
            </p>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              Empowering the teams who keep our power, water, transportation, and communication systems running through immersive training that prepares them for complex operations and emergency response.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Mission-Critical Training for Essential Services
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Critical infrastructure operators face unique challenges. System failures can affect millions, maintenance windows are limited, and the complexity of interconnected systems demands expertise that traditional training struggles to deliver. Our VR and AR solutions change that equation.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From power grid operations and water treatment facilities to telecommunications networks and transportation systems, our immersive platforms allow operators to train on realistic digital twins of their infrastructure, building competence without risking operational continuity.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="VR critical infrastructure training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm">Readiness Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Emergency response simulation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Zero Downtime</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Train for Emergencies Without Creating Them
              </h2>
              <p className="text-lg text-teal-100 leading-relaxed mb-6">
                When infrastructure fails, the consequences are severe. Our XR simulations recreate emergency scenarios with unprecedented realism, allowing your teams to practice crisis response, system recovery, and multi-agency coordination without disrupting operations or endangering personnel.
              </p>
              <p className="text-lg text-cyan-200 leading-relaxed font-semibold">
                The result: faster recovery times, better coordination, and resilient systems that communities depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Training Across All Infrastructure Sectors
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Our XR platforms support training for power generation and distribution, water and wastewater systems, transportation networks, telecommunications infrastructure, and more, with realistic simulations tailored to each sector's unique requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Power grid operations training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Power Systems</h3>
                  <p className="text-sm text-gray-200">Grid operations and maintenance</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Water treatment facilities"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Water Systems</h3>
                  <p className="text-sm text-gray-200">Treatment and distribution</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Telecommunications infrastructure"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <Network className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Communications</h3>
                  <p className="text-sm text-gray-200">Network infrastructure ops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Digital Twins of Your Critical Systems
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                We create high-fidelity digital replicas of your specific infrastructure systems, from control rooms and substations to treatment plants and network operations centers. These digital twins enable your teams to train on your exact equipment, procedures, and workflows in a risk-free virtual environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Exact replicas of your control systems and equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Scenario libraries covering normal ops and emergencies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Multi-user training for coordinated response</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Performance analytics and certification tracking</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Custom infrastructure XR solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Measurable Improvements in Operational Excellence
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Infrastructure operators using our XR training platforms report enhanced operator competency, faster incident response, reduced errors, and improved safety outcomes across their operations.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-teal-600 mb-2">55%</div>
              <p className="text-slate-700 font-semibold">Faster Emergency Response</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">70%</div>
              <p className="text-slate-700 font-semibold">Improved Skill Retention</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">80%</div>
              <p className="text-slate-700 font-semibold">Reduction in Training Costs</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-slate-700 font-semibold">Scenario Variations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strengthen Your Infrastructure Operations
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Partner with us to develop advanced XR training solutions that prepare your operators for every scenario. Ensure the resilience and reliability of the critical systems our society depends on.
            </p>
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
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
            >
              <input type="hidden" name="form-name" value="email-capture" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter your Company Email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Schedule a Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
