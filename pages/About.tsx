import React from 'react';
import { Target, Heart, Eye, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">The Studio Story</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Small, independent, and fiercely dedicated to quality. We build the digital tools entrepreneurs need to succeed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Why "Lone Dog"?</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                In a world of massive agencies and impersonal website builders, we chose to stand apart. The name "Lone Dog Studios" represents independence, loyalty to our craft, and the relentless pursuit of the goal.
              </p>
              <p className="mb-4">
                We believe that every entrepreneur deserves a website that looks like a million bucks without costing it. We combine modern design aesthetics with data-driven UX principles to create sites that don't just sit there—they work for you.
              </p>
              <p>
                Founded by a specialist in UX design and AI-powered workflows, we leverage cutting-edge technology to deliver premium results at a fraction of the traditional agency timeline.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-brand-blue rounded-2xl transform rotate-3 opacity-10"></div>
             <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Creative workspace" 
              className="relative rounded-2xl shadow-lg w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Target size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Simplicity</h3>
              <p className="text-slate-600 text-sm">We cut through the noise. Clean design and clear code always win.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Eye size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Clarity</h3>
              <p className="text-slate-600 text-sm">No jargon. No hidden fees. Just clear communication and results.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <Heart size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Honesty</h3>
              <p className="text-slate-600 text-sm">We treat your budget like our own. We only sell what you need.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality</h3>
              <p className="text-slate-600 text-sm">Pixel-perfect details and robust performance are standard.</p>
            </div>
          </div>
        </div>

        {/* Process - Light Theme Update */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-navy">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <span className="text-6xl font-black text-slate-200 absolute -top-8 -left-4 select-none">01</span>
              <h3 className="text-xl font-bold text-brand-blue mb-2 relative z-10">Discover</h3>
              <p className="text-slate-600 relative z-10">We learn about your business, audience, and goals.</p>
            </div>
            <div className="relative">
              <span className="text-6xl font-black text-slate-200 absolute -top-8 -left-4 select-none">02</span>
              <h3 className="text-xl font-bold text-brand-blue mb-2 relative z-10">Design</h3>
              <p className="text-slate-600 relative z-10">We create a visual style and layout tailored to your brand.</p>
            </div>
            <div className="relative">
              <span className="text-6xl font-black text-slate-200 absolute -top-8 -left-4 select-none">03</span>
              <h3 className="text-xl font-bold text-brand-blue mb-2 relative z-10">Build</h3>
              <p className="text-slate-600 relative z-10">We code your site using modern, fast, secure technologies.</p>
            </div>
            <div className="relative">
              <span className="text-6xl font-black text-slate-200 absolute -top-8 -left-4 select-none">04</span>
              <h3 className="text-xl font-bold text-brand-blue mb-2 relative z-10">Launch</h3>
              <p className="text-slate-600 relative z-10">We handle the technical setup to get you live and growing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;