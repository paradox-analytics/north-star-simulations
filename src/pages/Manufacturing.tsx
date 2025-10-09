import { ArrowRight, CheckCircle, Shield, Zap, Users, TrendingUp } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300">
              Manufacturing
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Transform Training and Operations with Immersive VR, AR, and XR Experiences
            </p>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Empowering manufacturing teams to learn, perform, and innovate in high-risk and high-precision environments through custom extended-reality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Future of Industrial Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Future of Industrial Training
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In manufacturing, every decision counts, and every skill must be mastered before it's put into practice. Our custom virtual reality (VR), augmented reality (AR), and mixed reality (XR) solutions provide a safe, scalable, and hyper-realistic way to train your workforce.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether it's assembly line simulation, equipment handling, or safety drills in hazardous environments, our immersive platforms replicate the precision and pressure of real-world scenarios, without the risk.
              </p>
            </div>
            <div className="relative">
              <img
                src="/image copy copy.png"
                alt="Factory worker with AR headset training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Risk-Free Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: High-Risk Environments */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="High-risk manufacturing simulation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Zero Risk Zone</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                High-Risk Environments, Zero Risk Training
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                From chemical processing plants to heavy machinery operations, certain situations are too dangerous to replicate, until now. Our XR simulations recreate high-risk scenarios with millimeter accuracy, allowing teams to practice emergency procedures, machine shutdown protocols, and equipment handling safely.
              </p>
              <p className="text-lg text-cyan-200 leading-relaxed font-semibold">
                The result: reduced downtime, fewer accidents, and faster skill acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AR-Powered Workflows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Enhance Productivity with AR-Powered Workflows
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Augmented Reality overlays deliver real-time data, visual instructions, and guided workflows directly in your employees' field of view. Whether it's maintenance support, quality inspections, or assembly assistance, AR reduces human error and accelerates task completion, keeping your operations running efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy.png"
                alt="AR holographic design visualization"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Instructions</h3>
                  <p className="text-sm text-gray-200">Holographic assembly guides</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy.png"
                alt="AR holographic quality inspection"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
                  <p className="text-sm text-gray-200">3D alignment verification</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy.png"
                alt="AR live metrics dashboard"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <TrendingUp className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Live Metrics</h3>
                  <p className="text-sm text-gray-200">HUD performance data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Custom Solutions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Custom Solutions Built for Your Industry
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Every manufacturing process is unique, and so are our solutions. We design and develop immersive applications tailored to your exact needs. From concept to deployment, we work closely with your training and engineering teams to integrate XR into your existing workflows, ensuring measurable ROI and scalable deployment across facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Tailored to your specific equipment and processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Seamless integration with existing systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Scalable across multiple facilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Ongoing support and iteration</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy.png"
                alt="IoT custom solutions for manufacturing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Real Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Real Results, Measurable Impact
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our clients have used XR to onboard new hires, reskill technicians, and reinforce safety culture, driving efficiency and confidence across every level of their organization.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-slate-700 font-semibold">Reduction in Training Time</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">60%</div>
              <p className="text-slate-700 font-semibold">Improved Retention Rates</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">0</div>
              <p className="text-slate-700 font-semibold">Downtime for Training</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-slate-700 font-semibold">Scalable Deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Virtual Factory
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Step into the future of industrial innovation. Partner with us to develop immersive VR, AR, and XR solutions that elevate safety, productivity, and performance across your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your Company Email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg"
              />
              <button className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105 shadow-xl whitespace-nowrap">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
