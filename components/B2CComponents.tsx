import React, { useState } from 'react';
import { Package } from '../types';
import { COMPANY_DETAILS, CONTENT, POPULAR_DESTINATIONS } from '../constants';
import { MapPin, Calendar, ArrowRight, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Star, CheckCircle, Clock, Globe, Briefcase, Plane, FileText, AlertTriangle, ShieldCheck, Award } from 'lucide-react';

// Types for Navigation
type Page = 'HOME' | 'ABOUT' | 'PACKAGES' | 'VISA' | 'FLIGHTS' | 'CONTACT' | 'PRIVACY' | 'TERMS' | 'REFUND' | 'B2B_INFO' | 'GLOBAL_DMC';

// --- Shared Components ---

const Header: React.FC<{ onNavigate: (page: Page) => void, onOpenLogin: () => void }> = ({ onNavigate, onOpenLogin }) => (
  <header className="fixed w-full z-50 bg-brand-blue/95 backdrop-blur-sm text-white shadow-lg border-b border-brand-gold/20">
    <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => onNavigate('HOME')}
      >
        <img 
          src={COMPANY_DETAILS.logo} 
          alt="Idea Holiday Logo" 
          className="w-12 h-12 rounded-full border-2 border-brand-gold object-cover bg-white" 
        />
        <div className="flex flex-col">
          <span className="font-heading font-bold text-lg leading-tight tracking-wide">IDEA HOLIDAY</span>
          <span className="text-[10px] text-brand-gold uppercase tracking-widest">Private Limited</span>
        </div>
      </div>
      <nav className="hidden lg:flex gap-6 text-sm font-medium">
        <button onClick={() => onNavigate('HOME')} className="hover:text-brand-gold transition-colors">Home</button>
        <button onClick={() => onNavigate('ABOUT')} className="hover:text-brand-gold transition-colors">About Us</button>
        <button onClick={() => onNavigate('PACKAGES')} className="hover:text-brand-gold transition-colors">Tour Packages</button>
        <button onClick={() => onNavigate('VISA')} className="hover:text-brand-gold transition-colors">Visa Services</button>
        <button onClick={() => onNavigate('FLIGHTS')} className="hover:text-brand-gold transition-colors">Flights & Hotels</button>
        <button onClick={() => onNavigate('CONTACT')} className="hover:text-brand-gold transition-colors">Contact</button>
      </nav>
      <div className="flex gap-4 items-center mt-4 md:mt-0">
        <button onClick={onOpenLogin} className="hidden md:block px-5 py-2 border border-brand-gold text-brand-gold rounded-full text-sm hover:bg-brand-gold hover:text-brand-blue transition-all font-semibold">
          B2B Login
        </button>
        <button onClick={() => onNavigate('CONTACT')} className="bg-brand-gold text-brand-blue px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-gold/20 hover:scale-105 transition-transform">
          Get Quote
        </button>
      </div>
    </div>
    {/* Mobile Nav Bar - Simplified */}
    <div className="lg:hidden flex justify-between px-4 py-2 text-xs bg-brand-blue border-t border-gray-700 overflow-x-auto gap-4">
       <button onClick={() => onNavigate('PACKAGES')} className="whitespace-nowrap hover:text-brand-gold">Packages</button>
       <button onClick={() => onNavigate('VISA')} className="whitespace-nowrap hover:text-brand-gold">Visa</button>
       <button onClick={() => onNavigate('FLIGHTS')} className="whitespace-nowrap hover:text-brand-gold">Flights</button>
       <button onClick={() => onNavigate('CONTACT')} className="whitespace-nowrap hover:text-brand-gold">Contact</button>
    </div>
  </header>
);

const Footer: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
  <footer className="bg-brand-blue text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={COMPANY_DETAILS.logo} 
              alt="Idea Holiday Logo" 
              className="w-10 h-10 rounded-full border border-brand-gold object-cover bg-white" 
            />
            <span className="font-heading font-bold text-lg">IDEA HOLIDAY</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your Trusted Travel Partner for Domestic & International Journeys. Explore. Dream. Travel with Confidence.
          </p>
          <div className="flex gap-4">
            <a href={COMPANY_DETAILS.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
              <Facebook size={20} />
            </a>
            <a href={COMPANY_DETAILS.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
              <Instagram size={20} />
            </a>
            <a href={COMPANY_DETAILS.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={COMPANY_DETAILS.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-brand-gold">About Us</button></li>
            <li><button onClick={() => onNavigate('PACKAGES')} className="hover:text-brand-gold">Tour Packages</button></li>
            <li><button onClick={() => onNavigate('VISA')} className="hover:text-brand-gold">Visa Assistance</button></li>
            <li><button onClick={() => onNavigate('B2B_INFO')} className="hover:text-brand-gold">B2B Solutions</button></li>
            <li><button onClick={() => onNavigate('GLOBAL_DMC')} className="hover:text-brand-gold">Global DMC Solution</button></li>
            <li><button onClick={() => onNavigate('CONTACT')} className="hover:text-brand-gold">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><button onClick={() => onNavigate('PRIVACY')} className="hover:text-brand-gold">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('TERMS')} className="hover:text-brand-gold">Terms & Conditions</button></li>
            <li><button onClick={() => onNavigate('REFUND')} className="hover:text-brand-gold">Refund Policy</button></li>
            <li><div className="text-gray-600 flex gap-1 items-center mt-2"><AlertTriangle size={12}/> <span>Disclaimer</span></div></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin className="text-brand-gold shrink-0" size={18} />
              <span className="whitespace-pre-line">{COMPANY_DETAILS.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-brand-gold shrink-0" size={18} />
              <span>{COMPANY_DETAILS.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-brand-gold shrink-0" size={18} />
              <span>{COMPANY_DETAILS.email}</span>
            </li>
             <li className="flex gap-3">
              <Clock className="text-brand-gold shrink-0" size={18} />
              <div className="flex flex-col">
                <span>{COMPANY_DETAILS.businessHours.weekdays}</span>
                <span>{COMPANY_DETAILS.businessHours.sunday}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2024 Idea Holiday Private Limited. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Powered by Idea Holiday Tech</p>
      </div>
    </div>
  </footer>
);

const PageHeader: React.FC<{ title: string, subtitle?: string, bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-brand-blue">
      <img 
        src={bgImage || "https://picsum.photos/1920/1080?random=header"} 
        alt={title} 
        className="w-full h-full object-cover opacity-30"
      />
    </div>
    <div className="relative container mx-auto px-4 text-center z-10 pt-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </div>
);

export const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
    <div className="relative h-56 overflow-hidden">
      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-500" />
      <div className="absolute top-4 right-4 bg-brand-blue/90 text-brand-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
        {pkg.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center text-gray-500 text-xs mb-2 gap-2">
        <MapPin size={14} className="text-brand-gold" /> {pkg.location}
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <Calendar size={14} className="text-brand-gold" /> {pkg.duration}
      </div>
      <h3 className="font-heading font-bold text-xl text-brand-blue mb-2 line-clamp-2">{pkg.title}</h3>
      <div className="mt-auto pt-4 flex justify-between items-end border-t border-gray-100">
        <div>
          <span className="text-xs text-gray-500 block">Starting from</span>
          <span className="text-2xl font-bold text-brand-blue">₹{pkg.price.toLocaleString()}</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
);

const LeadForm = ({ title }: { title?: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-brand-gold">
    <h3 className="text-2xl font-heading font-bold text-brand-blue mb-2">{title || "Plan Your Trip"}</h3>
    <p className="text-gray-500 mb-6 text-sm">Fill the form and our experts will call you back.</p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50" />
        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50" />
      </div>
      <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50" />
      <input type="text" placeholder="Destination (e.g. Dubai, Bali)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50" />
      <textarea placeholder="Tell us about your requirements..." rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold bg-gray-50"></textarea>
      <button className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-blue/90 transition-colors shadow-lg">
        Send Enquiry
      </button>
    </form>
  </div>
);

// --- Page Components ---

const HomeContent: React.FC<{ packages: Package[], onNavigate: (page: Page) => void, onOpenLogin: () => void }> = ({ packages, onNavigate, onOpenLogin }) => (
  <>
    {/* Hero Section */}
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue">
        <img 
          src="https://picsum.photos/1920/1080?random=travel" 
          alt="Travel Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center z-10 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in-up">
          Welcome to <br/><span className="text-brand-gold">Idea Holiday Private Limited</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Your Trusted Travel Partner for Domestic & International Journeys. 
          <br/>Explore. Dream. Travel with Confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onNavigate('PACKAGES')} className="bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-brand-blue transition-all flex items-center justify-center gap-2">
            Explore Packages <ArrowRight size={20} />
          </button>
          <button onClick={() => onNavigate('CONTACT')} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-blue transition-all">
            Get Custom Quote
          </button>
          <button onClick={onOpenLogin} className="border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-brand-blue transition-all">
            B2B Login
          </button>
        </div>
      </div>
    </section>

    {/* Search Overlay */}
    <div className="container mx-auto px-4 relative -mt-10 z-20 mb-20">
      <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Destination</label>
          <input type="text" placeholder="Where do you want to go?" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-brand-gold outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Check In</label>
          <input type="date" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-brand-gold outline-none text-gray-600" />
        </div>
         <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Guests</label>
          <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-brand-gold outline-none text-gray-600">
            <option>2 Adults, 0 Kids</option>
            <option>2 Adults, 1 Kid</option>
            <option>4 Adults</option>
          </select>
        </div>
        <button className="w-full bg-brand-blue text-white p-3 rounded-lg font-bold hover:bg-brand-blue/90 transition-colors h-[50px]">
          Search Holidays
        </button>
      </div>
    </div>

    {/* Popular Destinations */}
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Top Choices</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mt-2">Popular Destinations</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {POPULAR_DESTINATIONS.map((dest, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl h-40 md:h-60 cursor-pointer shadow-md">
            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl tracking-wide">{dest.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Our Services */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue">Our Services</h2>
           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We offer a wide range of tour packages and services designed for every traveler.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div onClick={() => onNavigate('PACKAGES')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-4"><Globe size={24}/></div>
            <h3 className="font-bold text-lg mb-2">Domestic & International</h3>
            <p className="text-sm text-gray-500">Customized packages for destinations worldwide.</p>
          </div>
          <div onClick={() => onNavigate('PACKAGES')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4"><Star size={24}/></div>
            <h3 className="font-bold text-lg mb-2">Honeymoon & Family</h3>
            <p className="text-sm text-gray-500">Romantic getaways and fun-filled family vacations.</p>
          </div>
          <div onClick={() => onNavigate('VISA')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"><FileText size={24}/></div>
            <h3 className="font-bold text-lg mb-2">Visa Services</h3>
            <p className="text-sm text-gray-500">Expert guidance and processing for all countries.</p>
          </div>
          <div onClick={() => onNavigate('B2B_INFO')} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4"><Briefcase size={24}/></div>
            <h3 className="font-bold text-lg mb-2">B2B Solutions</h3>
            <p className="text-sm text-gray-500">Dedicated portal for agents and distributors.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Why Choose Idea Holiday?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mt-2 mb-6">Experience Travel Like Never Before</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Idea Holiday Private Limited is a professionally managed travel company. We help travelers and travel agents plan seamless, memorable journeys with transparent pricing and expert support.
          </p>
          <ul className="space-y-4">
            {[
              "Experienced Travel Experts",
              "Customized & Budget-Friendly Packages",
              "Trusted by Travel Agents Nationwide",
              "Transparent Pricing – No Hidden Charges",
              "Dedicated Customer Support"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle className="text-brand-gold" size={20} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <LeadForm />
      </div>
    </section>
  </>
);

const AboutPage = () => (
  <div className="animate-fade-in-up">
    <PageHeader title="About Us" subtitle="Simplifying travel planning with smart technology and expert guidance." />
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
         <div>
           <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">{CONTENT.about.title}</h2>
           <p className="text-gray-600 leading-relaxed text-lg mb-6">{CONTENT.about.intro}</p>
         </div>
         <div className="bg-gray-100 rounded-2xl h-[400px] overflow-hidden shadow-lg">
           <img src="https://picsum.photos/800/800?random=office" alt="About Us" className="w-full h-full object-cover" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-gold">
          <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
          <p className="text-gray-600 text-lg">{CONTENT.about.vision}</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-blue">
          <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h3>
          <p className="text-gray-600 text-lg">{CONTENT.about.mission}</p>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-t border-gray-200 pt-16">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Why Trust Us</span>
          <h3 className="text-3xl font-heading font-bold text-brand-blue mt-2">Certifications & Awards</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-28 h-28 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:border-brand-gold transition-colors duration-300">
                <ShieldCheck size={48} className="text-brand-blue" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">ISO 9001:2015</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">Certified Quality</p>
           </div>
           
           <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-28 h-28 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:border-brand-gold transition-colors duration-300">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">100% Travel Safe</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">Secure & Insured</p>
           </div>

           <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-28 h-28 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:border-brand-gold transition-colors duration-300">
                <Award size={48} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Excellence Award</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">Tourism Board 2023</p>
           </div>

           <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-28 h-28 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:border-brand-gold transition-colors duration-300">
                <Globe size={48} className="text-blue-500" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">IATA Accredited</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1">Global Network</p>
           </div>
        </div>
      </div>
    </section>
  </div>
);

const PackagesPage: React.FC<{ packages: Package[] }> = ({ packages }) => (
  <div className="animate-fade-in-up">
    <PageHeader title="Explore Our Tour Packages" subtitle="Domestic, International, Honeymoon, Family & Group Tours" bgImage="https://picsum.photos/1920/1080?random=packages" />
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {['All', 'Domestic', 'International', 'Honeymoon', 'Family'].map(cat => (
          <button key={cat} className="px-6 py-2 rounded-full border border-gray-300 hover:bg-brand-blue hover:text-white transition-colors text-sm font-semibold">
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
        {/* Mocking more packages for grid */}
         <PackageCard pkg={{...packages[0], id: 'p5', title: 'Vietnam Discovery', location: 'Vietnam', category: 'International', price: 65000}} />
         <PackageCard pkg={{...packages[2], id: 'p6', title: 'Kerala Backwaters', location: 'India', category: 'Domestic', price: 22000}} />
      </div>
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-brand-blue mb-4">Can't find what you're looking for?</h3>
        <p className="text-gray-600 mb-6">We specialize in customized itineraries. Tell us your dream destination, and we'll build it for you.</p>
        <button className="bg-brand-gold text-brand-blue px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          Contact for Personalized Itinerary
        </button>
      </div>
    </section>
  </div>
);

const VisaPage = () => (
  <div className="animate-fade-in-up">
    <PageHeader title="Visa Assistance Services" subtitle="Hassle-free visa processing for popular destinations." bgImage="https://picsum.photos/1920/1080?random=visa" />
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Professional Visa Assistance</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Navigating visa requirements can be complex. We provide professional guidance to ensure your application is accurate and submitted on time.
          </p>
          <h3 className="font-bold text-xl mb-4">Our Services Include:</h3>
          <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3"><CheckCircle className="text-green-500"/> Tourist Visa Guidance</li>
             <li className="flex items-center gap-3"><CheckCircle className="text-green-500"/> Document Checklist Preparation</li>
             <li className="flex items-center gap-3"><CheckCircle className="text-green-500"/> Application Form Support</li>
             <li className="flex items-center gap-3"><CheckCircle className="text-green-500"/> Processing Time Assistance</li>
          </ul>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-brand-blue">
            <p className="font-semibold">📧 Email us at <a href={`mailto:${COMPANY_DETAILS.email}`} className="underline">{COMPANY_DETAILS.email}</a> for visa enquiries.</p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
           <h3 className="text-xl font-bold mb-4">Enquire for Visa</h3>
           <form className="space-y-4">
             <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg bg-gray-50"/>
             <input type="text" placeholder="Contact Number" className="w-full p-3 border rounded-lg bg-gray-50"/>
             <input type="text" placeholder="Destination Country" className="w-full p-3 border rounded-lg bg-gray-50"/>
             <select className="w-full p-3 border rounded-lg bg-gray-50">
               <option>Tourist Visa</option>
               <option>Business Visa</option>
             </select>
             <button className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold">Submit Request</button>
           </form>
        </div>
      </div>
    </section>
  </div>
);

const FlightsPage = () => (
  <div className="animate-fade-in-up">
    <PageHeader title="Flight & Hotel Enquiry" subtitle="Get the best deals on flights and premium stays." bgImage="https://picsum.photos/1920/1080?random=flight" />
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-brand-blue text-white p-6 text-center">
          <h2 className="text-2xl font-bold">Looking for the best options?</h2>
          <p className="text-blue-200 text-sm mt-1">Submit your requirement and our travel expert will contact you.</p>
        </div>
        <div className="p-8 md:p-12">
           <div className="flex gap-4 mb-8 justify-center">
             <button className="flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-blue rounded-full font-bold shadow-md"><Plane size={20}/> Flights</button>
             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-600 rounded-full font-bold hover:bg-gray-50"><Briefcase size={20}/> Hotels</button>
           </div>
           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="col-span-2 md:col-span-1">
               <label className="block text-sm font-bold text-gray-700 mb-2">From</label>
               <input type="text" placeholder="City or Airport" className="w-full p-3 border border-gray-300 rounded-lg"/>
             </div>
             <div className="col-span-2 md:col-span-1">
               <label className="block text-sm font-bold text-gray-700 mb-2">To</label>
               <input type="text" placeholder="City or Airport" className="w-full p-3 border border-gray-300 rounded-lg"/>
             </div>
             <div>
               <label className="block text-sm font-bold text-gray-700 mb-2">Departure Date</label>
               <input type="date" className="w-full p-3 border border-gray-300 rounded-lg"/>
             </div>
             <div>
               <label className="block text-sm font-bold text-gray-700 mb-2">Passengers</label>
               <select className="w-full p-3 border border-gray-300 rounded-lg">
                 <option>1 Traveler</option>
                 <option>2 Travelers</option>
                 <option>3+ Travelers</option>
               </select>
             </div>
             <div className="col-span-2">
               <label className="block text-sm font-bold text-gray-700 mb-2">Contact Details</label>
               <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg mb-4"/>
               <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg"/>
             </div>
             <div className="col-span-2">
               <button className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">Find Best Fares</button>
             </div>
           </form>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="animate-fade-in-up">
    <PageHeader title="Contact Us" subtitle="We are here to help you plan your perfect trip." bgImage="https://picsum.photos/1920/1080?random=contact" />
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><MapPin className="text-brand-gold"/> Office Address</h3>
             <p className="text-gray-600 whitespace-pre-line">{COMPANY_DETAILS.address}</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Mail className="text-brand-gold"/> Email & Phone</h3>
             <p className="text-gray-600 mb-2">{COMPANY_DETAILS.email}</p>
             <p className="text-gray-600">{COMPANY_DETAILS.phone}</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
             <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Clock className="text-brand-gold"/> Business Hours</h3>
             <p className="text-gray-600">{COMPANY_DETAILS.businessHours.weekdays}</p>
             <p className="text-gray-600">{COMPANY_DETAILS.businessHours.sunday}</p>
           </div>
           
           <div className="bg-brand-blue text-white p-6 rounded-xl shadow-md">
             <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
             <div className="flex gap-4">
               <a href={COMPANY_DETAILS.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
                <Facebook size={20} />
               </a>
               <a href={COMPANY_DETAILS.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
                <Instagram size={20} />
               </a>
               <a href={COMPANY_DETAILS.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
                <Linkedin size={20} />
               </a>
               <a href={COMPANY_DETAILS.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
                <Youtube size={20} />
               </a>
             </div>
             <p className="text-xs text-gray-400 mt-4">Travel inspiration delivered daily!</p>
           </div>
        </div>
        <div className="lg:col-span-2">
           <LeadForm title="Send us a Message" />
        </div>
      </div>
    </section>
  </div>
);

const LegalPage: React.FC<{ title: string, content: string }> = ({ title, content }) => (
  <div className="animate-fade-in-up">
    <div className="bg-gray-100 py-12 text-center border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-blue">{title}</h1>
      </div>
    </div>
    <section className="py-16 container mx-auto px-4 max-w-4xl">
       <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 whitespace-pre-line text-gray-700 leading-relaxed">
         {content}
       </div>
    </section>
  </div>
);

const B2BInfoPage = ({ onOpenLogin }: { onOpenLogin: () => void }) => (
  <div className="animate-fade-in-up">
    <PageHeader title="Idea Holiday B2B Travel Portal" subtitle="Exclusive solutions for Travel Agents, Distributors & Partners." bgImage="https://picsum.photos/1920/1080?random=b2b" />
    <section className="py-20 container mx-auto px-4 text-center">
       <div className="max-w-4xl mx-auto">
         <h2 className="text-3xl font-bold text-brand-blue mb-8">Grow Your Travel Business</h2>
         <p className="text-lg text-gray-600 mb-12">
           Our B2B portal is designed exclusively to help you scale. Manage quotes, bookings, and agents with a commercial-grade platform similar to top industry tools.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
           {[
             "Smart Itinerary Builder",
             "Instant Quotation Generator",
             "Manual Pricing Control",
             "Agent-wise Margin Settings",
             "Downloadable Branded PDFs",
             "Dedicated Partner Support"
           ].map((feat, i) => (
             <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-3">
               <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20}/>
               <span className="font-semibold text-gray-800">{feat}</span>
             </div>
           ))}
         </div>

         <div className="bg-brand-blue text-white p-10 rounded-2xl shadow-xl">
           <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
           <p className="mb-8 text-blue-200">Join our network of successful travel partners today.</p>
           <button onClick={onOpenLogin} className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
             Login to B2B Portal
           </button>
         </div>
       </div>
    </section>
  </div>
);

const GlobalDMCPage = () => (
  <div className="animate-fade-in-up">
    <PageHeader title={CONTENT.globalDmc.title} subtitle={CONTENT.globalDmc.subtitle} bgImage="https://picsum.photos/1920/1080?random=dmc" />
    <section className="py-20 container mx-auto px-4">
       <div className="max-w-4xl mx-auto text-center">
         <p className="text-xl text-gray-600 mb-12 leading-relaxed">{CONTENT.globalDmc.intro}</p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            {CONTENT.globalDmc.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <Globe className="text-brand-gold shrink-0 mt-1" size={32} />
                    <div>
                        <span className="font-bold text-gray-800 text-lg block mb-1">{feat.title}</span>
                        <span className="text-sm text-gray-500">{feat.desc}</span>
                    </div>
                </div>
            ))}
         </div>
         <div className="bg-brand-blue text-white p-10 rounded-2xl shadow-xl">
           <h3 className="text-2xl font-bold mb-4">Ready to Go Global?</h3>
           <p className="mb-8 text-blue-200">Partner with us for seamless global operations and superior on-ground services.</p>
           <button className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
             Become a Global Partner
           </button>
         </div>
       </div>
    </section>
  </div>
);

// --- Main Container ---

export const B2CHome: React.FC<{ packages: Package[], onOpenLogin: () => void }> = ({ packages, onOpenLogin }) => {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  const renderPage = () => {
    switch(currentPage) {
      case 'HOME': return <HomeContent packages={packages} onNavigate={setCurrentPage} onOpenLogin={onOpenLogin} />;
      case 'ABOUT': return <AboutPage />;
      case 'PACKAGES': return <PackagesPage packages={packages} />;
      case 'VISA': return <VisaPage />;
      case 'FLIGHTS': return <FlightsPage />;
      case 'CONTACT': return <ContactPage />;
      case 'PRIVACY': return <LegalPage title="Privacy Policy" content={CONTENT.legal.privacy} />;
      case 'TERMS': return <LegalPage title="Terms & Conditions" content={CONTENT.legal.terms} />;
      case 'REFUND': return <LegalPage title="Refund & Cancellation Policy" content={CONTENT.legal.refund} />;
      case 'B2B_INFO': return <B2BInfoPage onOpenLogin={onOpenLogin} />;
      case 'GLOBAL_DMC': return <GlobalDMCPage />;
      default: return <HomeContent packages={packages} onNavigate={setCurrentPage} onOpenLogin={onOpenLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onNavigate={setCurrentPage} onOpenLogin={onOpenLogin} />
      <main className="flex-grow pt-20"> {/* Add padding top for fixed header */}
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${COMPANY_DETAILS.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center">
        <Phone size={24} />
      </a>
    </div>
  );
};