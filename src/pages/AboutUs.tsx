import { Award, Users, Target, Lightbulb } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About North Star Simulations
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Building the future of immersive training through innovation, expertise, and custom-tailored solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower organizations with cutting-edge immersive training solutions that enhance preparedness, improve outcomes, and transform how critical skills are learned and applied.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the leading provider of custom immersive training systems, recognized for innovation, technical excellence, and transformative impact across government, enterprise, and public safety sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-slate-600">
              Our commitment to excellence and innovation drives everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Award-Winning Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Recognized with first place in the NIST CHARIoT Challenge for our innovative incident command simulation platform.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom-Tailored Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                Every project is uniquely designed to meet your specific training objectives, operational requirements, and organizational goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Expertise across Unity, Unreal Engine, AI/ML integration, IoT systems, and cutting-edge immersive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600">
              Experts in immersive technologies, AI, and experience design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src="/michael-image.jpeg"
                alt="Michael Carney"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Michael Carney</h3>
              <p className="text-cyan-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-slate-600 leading-relaxed">
                Unity Certified expert in immersive technologies and experience design with extensive projects for DoD, Energy, and FEMA. Specializes in modeling and simulation systems.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src="/jevon-image.jpeg"
                alt="Jevon Williams"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jevon Williams</h3>
              <p className="text-cyan-600 font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-slate-600 leading-relaxed">
                Specialist in emerging technologies, machine learning, artificial intelligence, and immersive systems. Leads technical strategy and innovation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
            Ready to discuss your project? We're here to bring your vision to life.
          </p>
          <a
            href="mailto:contact@northstarsimulations.com"
            className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
