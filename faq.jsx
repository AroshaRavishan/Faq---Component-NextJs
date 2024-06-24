'use client';
import React, { useState } from 'react';

const PlusIcon = () => (
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.15308V21.8478" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.65259 11.4368H22.3474" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 7.5V6h12v1.5H2z" />
    </svg>
);

const Faqs = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const toggleFaqs = (index) => {
        if (activeFaqIndex === index) {
            setActiveFaqIndex(null);
        } else {
            setActiveFaqIndex(index);
        }
    };

    const Faqs = [
        {
            title: 'Faq Title 1',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
            ]
        },
        {
            title: 'Faq Title 2',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
            ]
        },
        {
            title: 'Faq Title 3',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
            ]
        },
        {
            title: 'Faq Title 4',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
            ]
        },
        {
            title: 'Faq Title 5',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
            ]
        },
        {
            title: 'Faq Title 6',
            descriptions: [
                { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
            ]
        },
        // Add more Faqs if needed
    ];

    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right">
                    <div className="my-14 lg:my-28">
                        <div className="flex justify-center">
                            <div className="rounded-lg border border-gray-300 bg-white text-Blue-200 text-base font-normal py-2.5 px-8 w-max">FAQ’S</div>
                        </div>
                        <h1 className="text-black-900 font-semibold text-xl sm:text-4xl w-full xl:w-3/4 mx-auto mt-7 lg:mt-10 text-center">Frequently Asked Questions</h1>
                        <p className="text-base sm:text-xl font-medium text-gray-400 w-full xl:w-3/5 mx-auto text-center mt-6 lg:mt-12">
                            Find detailed answers to common questions about our services, courses, accreditation, and how our reseller program works.
                        </p>
                        <div className="mt-10 lg:mt-20  w-full lg:w-3/4 mx-auto">
                            <div className="accordion">
                                {Faqs.map((Faq, index) => (
                                    <div key={index} className={`border border-gray-300 rounded-xl mb-3 py-6 px-7 ${activeFaqIndex === index ? 'border-gray-300' : ''}`}>
                                        <div className=" bg-white flex items-center justify-between cursor-pointer rounded-xl" onClick={() => toggleFaqs(index)}>
                                            <div>
                                                <span className="text-gray-400 font-normal text-base sm:text-lg">{Faq.title}</span>
                                            </div>
                                            {activeFaqIndex === index ? <MinusIcon /> : <PlusIcon />}
                                        </div>
                                        {activeFaqIndex === index && (
                                            <div className="bg-white rounded-xl">
                                                {Faq.descriptions.map((description, descriptionIndex) => (
                                                    <div key={descriptionIndex} className="flex justify-between items-center mt-2.5">
                                                        <div className="flex gap-2 items-center mt-4">
                                                            <div className="text-gray-400 font-normal text-base sm:text-lg">{description.title}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1"></div>
            </div>
        </div>
    );
};

export default Faqs;
