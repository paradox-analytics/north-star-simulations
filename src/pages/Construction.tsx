import { ArrowRight, CheckCircle, HardHat, Zap, Users, Building2 } from 'lucide-react';

export default function Construction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <section className="relative bg-gradient-to-br from-amber-900 via-slate-900 to-orange-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300">
              Construction
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Build Safer, Smarter, Faster with VR and AR Technology
            </p>
            <p className="text-xl text-amber-100 leading-relaxed max-w-3xl">
              Revolutionizing construction training, safety, and project visualization through immersive extended reality experiences that reduce risk, accelerate timelines, and improve outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Virtual Training for Real-World Safety
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Construction sites are inherently dangerous. Falls, equipment accidents, and structural failures can happen in an instant. Our VR training platforms allow workers to experience hazardous scenarios, practice safety protocols, and learn proper equipment operation in a completely safe environment.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From scaffolding safety and crane operation to confined space entry and fall protection, our immersive simulations prepare your workforce for the realities of the job site, ensuring everyone goes home safe at the end of the day.
              </p>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="VR construction safety training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-600 to-orange-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">Zero</p>
                <p className="text-sm">On-Site Training Risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="AR construction visualization"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">3D Visualization</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                See the Future Before You Build It
              </h2>
              <p className="text-lg text-amber-100 leading-relaxed mb-6">
                Augmented Reality transforms how teams visualize and execute construction projects. Overlay BIM models directly onto job sites, verify installations in real-time, identify conflicts before they become costly problems, and coordinate trades with precision that traditional methods can't match.
              </p>
              <p className="text-lg text-orange-200 leading-relaxed font-semibold">
                The result: fewer errors, reduced rework, and projects completed on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Solutions for Modern Construction
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Our XR platforms address every phase of construction, from pre-construction planning and safety training to on-site coordination and quality control. Transform how your teams learn, plan, and execute.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Construction safety training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <HardHat className="w-8 h-8 text-amber-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Safety Training</h3>
                  <p className="text-sm text-gray-200">OSHA-compliant VR scenarios</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="AR BIM overlay visualization"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">BIM Integration</h3>
                  <p className="text-sm text-gray-200">AR model overlay on site</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Equipment operation training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Equipment Training</h3>
                  <p className="text-sm text-gray-200">Heavy machinery simulation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Tailored Solutions for Your Projects
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Every construction project has unique challenges, specifications, and safety requirements. We develop custom VR and AR applications that align with your specific needs, from residential builds to large-scale infrastructure projects, ensuring seamless integration with your existing workflows and tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Custom safety scenarios based on your project types</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Integration with your BIM and project management tools</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Multi-user collaboration for trade coordination</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Deployment across all your job sites</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Custom construction XR solutions"
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
              Proven Impact on Safety and Efficiency
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Construction companies using our XR solutions report significant improvements in safety compliance, project timelines, cost savings, and worker confidence, leading to better outcomes for all stakeholders.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-amber-600 mb-2">65%</div>
              <p className="text-slate-700 font-semibold">Reduction in Safety Incidents</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-slate-700 font-semibold">Faster Training Completion</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">45%</div>
              <p className="text-slate-700 font-semibold">Fewer Rework Hours</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-slate-700 font-semibold">Repeatable Training</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 mx-auto mb-6 text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future with XR Technology
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Transform your construction operations with immersive VR and AR solutions. Improve safety, reduce costs, and deliver projects with unprecedented precision and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your Company Email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg"
              />
              <button className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105 shadow-xl whitespace-nowrap">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
