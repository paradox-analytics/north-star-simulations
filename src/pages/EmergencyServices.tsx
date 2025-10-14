import { CheckCircle, Shield, Flame, Users, AlertTriangle } from 'lucide-react';

export default function EmergencyServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <section className="relative bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-orange-200 to-red-300">
              Emergency Services
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Prepare First Responders for Critical Moments with Immersive VR and AR Training
            </p>
            <p className="text-xl text-red-100 leading-relaxed max-w-3xl">
              Equipping firefighters, paramedics, and emergency personnel with the skills and confidence to act decisively in life-threatening situations through realistic, repeatable training scenarios.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Training That Saves Lives
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                When seconds matter, preparation is everything. Our immersive VR and AR training solutions allow first responders to experience high-stress, high-stakes scenarios in a controlled environment, building muscle memory and decision-making skills that translate directly to the field.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From structure fires and hazmat incidents to mass casualty events and search and rescue operations, our platforms simulate the chaos, urgency, and complexity of real emergencies, ensuring your teams are always ready.
              </p>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy copy.png"
                alt="VR emergency response training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-red-600 to-orange-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Safe Simulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy.png"
                alt="Firefighter VR scenario training"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Critical Training</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Realistic Scenarios, Repeatable Training
              </h2>
              <p className="text-lg text-red-100 leading-relaxed mb-6">
                Real-world emergencies are unpredictable and dangerous. Our VR simulations recreate the intensity, sensory overload, and split-second decisions of actual incidents, allowing responders to train repeatedly without putting anyone at risk. Practice until perfect, then practice again.
              </p>
              <p className="text-lg text-orange-200 leading-relaxed font-semibold">
                The result: faster response times, better coordination, and more lives saved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Training for Every Emergency
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Our XR platforms cover the full spectrum of emergency response scenarios. Train for structural firefighting, medical triage, hazardous materials handling, vehicle extrication, and multi-agency coordination with unparalleled realism and detail.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Firefighter AR interface training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <Flame className="w-8 h-8 text-orange-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Fire Suppression</h3>
                  <p className="text-sm text-gray-200">Structural fire scenarios</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="VR fire scenario training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Medical Response</h3>
                  <p className="text-sm text-gray-200">Triage and treatment protocols</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Hazmat training"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">Hazmat Operations</h3>
                  <p className="text-sm text-gray-200">Chemical incident response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Custom Training Solutions for Your Department
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Every department has unique challenges, equipment, and protocols. We create tailored VR and AR training experiences that match your specific needs, from recreating your local geography and building layouts to simulating your exact equipment and standard operating procedures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Customized to your department's SOPs and equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Realistic recreation of your jurisdiction's buildings and terrain</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Multi-user scenarios for team coordination training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Performance analytics and skill assessment tools</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                alt="Multi-user VR firefighter training"
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
              Proven Results, Better Outcomes
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Departments using our VR training platforms report improved response times, increased confidence, better team coordination, and enhanced safety outcomes for both responders and civilians.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-red-600 mb-2">50%</div>
              <p className="text-slate-700 font-semibold">Faster Response Times</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">75%</div>
              <p className="text-slate-700 font-semibold">Improved Skill Retention</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-slate-700 font-semibold">Safe Training Environment</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">∞</div>
              <p className="text-slate-700 font-semibold">Repeatable Scenarios</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 mx-auto mb-6 text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your Department's Training
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Partner with us to develop cutting-edge VR and AR training solutions that prepare your first responders for the most challenging situations. When lives are on the line, be confident your team is ready.
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
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
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
