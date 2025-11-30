import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Zap, Smartphone, CheckCircle, Code, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Diverse entrepreneurs working together on a laptop" 
            className="w-full h-full object-cover object-center"
          />
          {/* White Overlay for Text Readability (Light Theme) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 md:to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 text-center md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Websites for <br/>
              {/* Gradient Text Effect */}
              <span className="text-gradient-brand">Entrepreneurs.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
              Stop struggling with DIY builders. We design and build professional, high-performing websites that help you launch fast and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-blue hover:brightness-110 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Build My Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-bold rounded-lg text-slate-700 hover:text-brand-blue hover:border-brand-blue hover:bg-white transition-all bg-white/50 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl font-bold text-slate-900">Built for speed, designed for impact.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-sky-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Fast Turnaround</h4>
              <p className="text-slate-600 leading-relaxed">
                We know time is money. Our streamlined process gets your site live in weeks, not months, without cutting corners on quality.
              </p>
            </div>
            
            <div className="p-8 bg-sky-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-lime-100 text-brand-green rounded-lg flex items-center justify-center mb-6">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Mobile-First Design</h4>
              <p className="text-slate-600 leading-relaxed">
                Over 60% of web traffic is mobile. Your site will look stunning and function perfectly on every device, from phones to desktops.
              </p>
            </div>

            <div className="p-8 bg-sky-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                <Layout size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">UX-Backed Layouts</h4>
              <p className="text-slate-600 leading-relaxed">
                Pretty isn't enough. We use proven user experience principles to structure your content and drive conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tailored solutions for every stage of business.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you're just starting out or scaling up, we build digital homes for all types of visionaries.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Landing Pages for Campaigns",
                  "Small Business Service Sites",
                  "Real Estate Agent Portfolios",
                  "Restaurant & Retail Digital Presence",
                  "Consultant & Coaching Profiles"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <CheckCircle className="text-brand-green mr-3 h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/pricing" className="text-brand-blue font-bold hover:text-blue-700 inline-flex items-center">
                View Service Tiers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <PenTool className="h-8 w-8 text-brand-green mb-4" />
                  <h4 className="font-bold text-slate-900">Branding</h4>
                  <p className="text-sm text-slate-500 mt-1">Logos & Identity</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Layout className="h-8 w-8 text-brand-blue mb-4" />
                  <h4 className="font-bold text-slate-900">Web Design</h4>
                  <p className="text-sm text-slate-500 mt-1">Responsive & Clean</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Code className="h-8 w-8 text-indigo-500 mb-4" />
                  <h4 className="font-bold text-slate-900">Development</h4>
                  <p className="text-sm text-slate-500 mt-1">React & Modern Tech</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                  <h4 className="font-bold text-slate-900">Optimization</h4>
                  <p className="text-sm text-slate-500 mt-1">SEO & Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip - Gradient Background */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's build your website together.</h2>
          <p className="text-white/90 text-lg mb-10 font-medium">
            Ready to professionalize your online presence? Get a free quote today.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-blue font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-slate-50 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;