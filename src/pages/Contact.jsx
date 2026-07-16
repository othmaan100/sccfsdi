import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-primary font-semibold text-xs tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-sahel-dark">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-sahel-dark/70 max-w-2xl mx-auto">
          Contact our headquarters in Bauchi or speak directly to our Yobe field office in Potiskum. We respond to all queries.
        </p>
      </section>

      {/* Main Grid: Info Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* HQ Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sahel-border shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-sahel-dark">Yobe Headquarters</h3>
                  <span className="text-xs text-primary font-semibold tracking-wider uppercase">Central Administration</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-sahel-dark/80">
                <li className="flex items-start">
                  <MapPin size={18} className="text-primary mr-3 shrink-0 mt-0.5" />
                  <span>No.124 Adamu Jajere Layout, Tudun-Wada, Dogo- Nini Potiskum LGA, Yobe State.</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-primary mr-3 shrink-0" />
                  <span>+234 (0) 7036803864, 08036860969</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-primary mr-3 shrink-0" />
                  <span>sahelccfsdi@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Clock size={18} className="text-primary mr-3 shrink-0 mt-0.5" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Field Office Card */}
            <div className="bg-sahel-dark text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-6 border-b-8 border-accent">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 text-accent p-3 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Yobe Field Office</h3>
                  <span className="text-xs text-accent font-semibold tracking-wider uppercase">Nursery &amp; Field Coordination</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-white/85">
                <li className="flex items-start">
                  <MapPin size={18} className="text-accent mr-3 shrink-0 mt-0.5" />
                  <span>Near LGA Secretariat, Potiskum, Yobe State, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-accent mr-3 shrink-0" />
                  <span>+234 (0) 703 680 3864, 0803 686 0969</span>
                </li>

                <li className="flex items-center">
                  <Mail size={18} className="text-accent mr-3 shrink-0" />
                  <span>sahelccfsdi@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Clock size={18} className="text-accent mr-3 shrink-0 mt-0.5" />
                  <span>Mon - Sat: 7:30 AM - 4:30 PM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-sahel-border shadow-xl">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display font-bold text-xl text-sahel-dark">Contact Message Sent</h3>
                <p className="text-sm text-sahel-dark/70 max-w-md">
                  Thank you for writing to us. Our administrative staff will review your message and reach back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-sahel-dark mb-2">Send a Message</h3>
                  <p className="text-xs sm:text-sm text-sahel-dark/70">Complete the form below to reach our communication desk.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">First &amp; Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-sahel-light px-4 py-3 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-sahel-light px-4 py-3 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Phone Number</label>
                    <input
                      type="text"
                      className="w-full bg-sahel-light px-4 py-3 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-sahel-dark block">Inquiry Type</label>
                    <select
                      className="w-full bg-sahel-light px-4 py-3 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm appearance-none"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Request</option>
                      <option value="media">Media &amp; Communications</option>
                      <option value="careers">Careers &amp; Volunteering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sahel-dark block">Message Content</label>
                  <textarea
                    rows={6}
                    placeholder="Write your query details here..."
                    className="w-full bg-sahel-light px-4 py-3 rounded-xl border border-sahel-border focus:outline-none focus:border-primary text-sm"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-4 rounded-xl transition-smooth flex items-center justify-center space-x-2 text-sm shadow-md active:scale-95"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
