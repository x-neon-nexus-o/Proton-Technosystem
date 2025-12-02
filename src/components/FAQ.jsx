import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What types of devices do you repair?",
        answer: "We specialize in repairing a wide range of electronics including smartphones, laptops, tablets, gaming consoles, and desktop computers. We handle major brands like Apple, Samsung, Dell, HP, and more."
    },
    {
        question: "How long does a typical repair take?",
        answer: "Most common repairs, such as screen or battery replacements, are completed within 24-48 hours. Complex issues like motherboard repairs may take 3-5 business days. We always provide an estimated timeline after diagnosis."
    },
    {
        question: "Do you offer a warranty on repairs?",
        answer: "Yes! We offer a standard 90-day warranty on all repairs and parts replaced. This covers any defects in the parts or workmanship. Physical or liquid damage after the repair is not covered."
    },
    {
        question: "Is there a diagnostic fee?",
        answer: "We offer a free initial consultation and diagnosis. If you choose not to proceed with the repair after we've opened the device for a deep inspection, a small service fee may apply, which will be communicated beforehand."
    },
    {
        question: "Do I need to back up my data before bringing my device in?",
        answer: "We highly recommend backing up your data if possible. While we take every precaution to protect your data, some repairs (especially software-related ones) may require a factory reset."
    },
    {
        question: "Can I get a quote online?",
        answer: "Absolutely! You can use the 'Get Quote' button in our menu to fill out a quick form with your device details and issue. We'll get back to you with an estimated price range."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <HelpCircle className="text-primary w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. Here are some of the most common queries we receive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? 'bg-gray-50 dark:bg-gray-700/50 shadow-md ring-1 ring-primary/20'
                                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-textPrimary dark:text-white'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                                    }`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
