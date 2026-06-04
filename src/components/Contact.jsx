import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', phone: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-20 transition-colors duration-300 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-3xl font-bold md:text-5xl text-textPrimary dark:text-white">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Visit our service center or contact us for a quick quote.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-6 transition-all duration-300 border border-gray-100 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg dark:border-gray-700">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-textPrimary dark:text-white">Visit Us</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Haware Centurian Mall, Nerul, Navi Mumbai, Maharashtra 400706</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 transition-all duration-300 border border-gray-100 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg dark:border-gray-700">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-textPrimary dark:text-white">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-300">+91 8108036576</p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Mon–Sat, 10 AM – 8 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 transition-all duration-300 border border-gray-100 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg dark:border-gray-700">
                                <div className="p-3 text-green-600 rounded-full bg-green-500/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-textPrimary dark:text-white">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-300">support@protontechnosystem.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-64 overflow-hidden border border-gray-200 shadow-md rounded-2xl dark:border-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.456637466763!2d73.0163!3d19.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c0c0c0c0c1%3A0x0!2sHaware%20Centurion%20Mall!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative p-8 overflow-hidden bg-white border border-gray-100 shadow-xl dark:bg-gray-800 md:p-10 rounded-3xl dark:border-gray-700">
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none bg-gradient-to-bl from-primary/10 to-transparent"></div>

                        <h3 className="mb-6 text-2xl font-bold text-textPrimary dark:text-white">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-textPrimary dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-textPrimary dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder="+91 8108036576"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-textPrimary dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 transition-all border border-gray-200 outline-none resize-none rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-textPrimary dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="Tell us about your device issue..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-[1.02]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle size={20} /> Sent Successfully
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
