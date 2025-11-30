import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { ServiceTier } from '../types';

const tiers: ServiceTier[] = [
  {
    name: "Starter",
    price: "$900",
    description: "Perfect for new businesses needing a professional digital business card.",
    features: [
      "Up to 3 Custom Pages",
      "Mobile-Responsive Design",
      "Contact Form",
      "Domain & DNS Setup Assistance",
      "Stock Image Sourcing",
      "Fast 2-Week Turnaround"
    ]
  },
  {
    name: "Professional",
    price: "$2,500",
    description: "The complete package for growing small businesses and service providers.",
    recommended: true,
    features: [
      "Up to 6 Custom Pages",
      "Advanced Form Integrations",
      "CRM & Calendar Sync (Calendly)",
      "Basic SEO Optimization",
      "Google Analytics Setup",
      "Visual Branding Kit (Colors/Fonts)",
      "One Round of Revisions"
    ]
  },
  {
    name: "Premium UX",
    price: "$5,000+",
    description: "High-end strategy and custom development for scaling brands.",
    features: [
      "Full UX Strategy Workshop",
      "Unlimited Core Pages",
      "Custom Web App Components",
      "Database Integration (Supabase)",
      "Wireframing & Prototyping",
      "Priority Support Channel",
      "Complete Brand Redesign"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600">
            No hidden monthly fees. No confusing jargon. Just a one-time investment in your business's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl bg-white shadow-lg border ${
                tier.recommended 
                  ? 'border-brand-blue ring-4 ring-blue-50 scale-105 z-10' 
                  : 'border-slate-100 hover:border-slate-300 transition-colors'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-green text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-navy">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  {tier.name !== "Premium UX" && <span className="ml-1 text-slate-500">/project</span>}
                </div>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed min-h-[60px]">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-bold transition-all ${
                  tier.recommended
                    ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-md'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Choose {tier.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Need something specific?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. If these packages don't quite fit your needs, let's chat about a custom solution.
          </p>
          <Link to="/contact" className="text-brand-blue font-bold hover:text-brand-navy underline decoration-2 underline-offset-4">
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;