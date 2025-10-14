import { Award, Eye, Box, Radio, Lightbulb, GraduationCap, Briefcase, Code, Workflow, BarChart3, Zap, Users, Search, PenTool, RefreshCw, Database } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Video/Image Background Container */}
        <div className="absolute inset-0 z-0">
          {/* Hero Image */}
          <img
            src="/vr-training.png"
            alt="VR Training"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-slate-900/85"></div>

          {/* Additional vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">NIST CHARIoT Challenge Winner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Custom Immersive Training Systems & Experiences
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-10 drop-shadow-md">
              We design and develop tailored AR, VR, and XR solutions for government agencies, enterprises, and organizations seeking transformative training and simulation technologies.
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
              className="flex flex-col sm:flex-row gap-4 max-w-2xl"
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
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all hover:scale-105 shadow-2xl whitespace-nowrap"
              >
                Schedule a Free Consultation
              </button>
            </form>
          </div>
        </div>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Transforming Training Through Immersive Technology
            </h2>
            <p className="text-xl text-slate-600">
              From concept to deployment, we build immersive experiences tailored to your specific training and operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Transformation Architects</h3>
              <p className="text-slate-600 leading-relaxed">
                We bridge the gap between people, processes, and technology, designing strategies that enhance human performance and accelerate digital transformation across your organization.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Testing & Validation Innovators</h3>
              <p className="text-slate-600 leading-relaxed">
                Our experts define meaningful metrics and turn data into a strategic asset, allowing you to test, validate, and optimize digital solutions for measurable ROI.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid XR Enablement Specialists</h3>
              <p className="text-slate-600 leading-relaxed">
                We fast-track Extended Reality (XR) adoption by capturing expert knowledge and transforming it into immersive, performance-driven training and operational support solutions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High-Tech Talent & Consulting Partners</h3>
              <p className="text-slate-600 leading-relaxed">
                From UX/UI design and agile development to data science, human factors engineering, and systems integration, we deliver the specialized talent and consulting expertise that enable digital growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How We Do It
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Insight-Driven Research</h3>
              <p className="text-slate-600 leading-relaxed">
                Effective innovation starts with understanding people. Our research approach focuses on how humans interact with technology, ensuring every solution enhances usability, strengthens engagement, and drives meaningful performance outcomes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <PenTool className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Human-Centered Design</h3>
              <p className="text-slate-600 leading-relaxed">
                We design with people in mind, not just technology. By involving end users from concept to deployment, we create solutions that feel natural, perform seamlessly, and integrate effortlessly into real-world workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Agile Development Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Our agile methodology blends speed with precision. Through iterative design, continuous feedback, and rigorous testing, we deliver reliable, scalable, and adaptable software built to evolve with your mission and technology ecosystem.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Applied Data Science</h3>
              <p className="text-slate-600 leading-relaxed">
                Our data science team transforms complex data into actionable intelligence. By integrating diverse data sources, we empower users to enhance health, human performance, and operational readiness across connected devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Cutting-edge technology stack for immersive experience development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-colors">
              <Eye className="w-8 h-8 text-cyan-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">AR/VR/MR/XR</h4>
              <p className="text-sm text-slate-600">Unity, Unreal Engine, WebXR, ARKit, ARCore</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-colors">
              <Box className="w-8 h-8 text-cyan-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">3D Modeling</h4>
              <p className="text-sm text-slate-600">Real-time rendering, photogrammetry, procedural generation</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-colors">
              <Radio className="w-8 h-8 text-cyan-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">IoT Integration</h4>
              <p className="text-sm text-slate-600">Real-time sensor data, environmental monitoring</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-cyan-500 transition-colors">
              <Lightbulb className="w-8 h-8 text-cyan-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Machine Learning</h4>
              <p className="text-sm text-slate-600">AI-driven scenarios, behavior analysis, predictive models</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-slate-600">
              A showcase of our custom development capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 text-white">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Award-Winning Innovation</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Incident Command Simulation Platform</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A comprehensive immersive training solution for fire safety emergency response teams, featuring dynamic 3D environments, realistic high-risk scenarios, and FEMA NIMS compliance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-200">Immersive Storytelling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-200">Realistic Interactions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-200">Unique Incident Experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-200">Dynamic 3D Environments</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-12 flex items-center justify-center">
                <img
                  src="/fire-safety-sim-optimized.gif"
                  alt="Incident Command Simulation Platform - Fire Safety Training"
                  className="max-w-md w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Delivering custom solutions across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Government & Defense</h3>
              <p className="text-slate-600">
                Training simulations for DoD, Energy, FEMA, and public safety agencies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise & Corporate</h3>
              <p className="text-slate-600">
                Custom training experiences for workforce development and skills enhancement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technology & Research</h3>
              <p className="text-slate-600">
                Innovation partnerships for cutting-edge simulation and AI research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
            Let's discuss your training challenges and create an immersive experience tailored to your organization's needs.
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
              className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Schedule a Free Consultation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
