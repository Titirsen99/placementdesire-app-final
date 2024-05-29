import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Shreya Sen',
    role: 'Lead Developer and Designer',
    image: '/images/shreya.jpeg',
    linkedin: 'https://www.linkedin.com/in/shreya-sen-150849220/',
  },
  {
    name: 'Priyanka Adhikary',
    role: 'Designer and Helper',
    image: '/images/priyanka.png',
    linkedin: 'https://www.linkedin.com/in/priyanka-adhikary-15590525b/',
  },
  {
    name: 'Supriti Chowdhury',
    role: 'Designer and Helper',
    image: '/images/supriti.jpeg',
    linkedin: 'https://www.linkedin.com/in/supriti-chowdhury-2ab237260/',
  },
  {
    name: 'Amisha Kumari',
    role: 'Designer and Helper',
    image: '/images/amisha.jpeg',
    linkedin: 'https://www.linkedin.com/in/amisha-k-578431272/',
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-10 bg-[#CECAB3] min-h-screen">
      <div className="about mb-8 p-10 bg-white rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Project</h2>
        <p className="text-lg text-gray-800">
          Placement Cracker is a Next.js-based platform tailored for students and job seekers to excel in placement interviews. Our platform offers comprehensive resources for coding rounds, aptitude tests, and essential interview preparation.
        </p>
      </div>

      <div className="features mb-8 p-10 bg-white rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li><span className="font-semibold text-pink-600">Coding Round Preparation:</span> Includes topic-wise tutorials, a vast array of practice problems, and detailed solutions.</li>
          <li><span className="font-semibold text-pink-600">Aptitude Test Preparation:</span> Covers Quantitative Aptitude, Logical Reasoning, and Verbal Ability with interactive quizzes for practice.</li>
          <li><span className="font-semibold text-pink-600">Important Coding Questions:</span> Features frequently asked questions in top tech companies and company-specific practice problems.</li>
        </ul>
      </div>

      <div className="team mb-8 p-10 bg-white rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Contributions</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li><span className="font-semibold text-pink-600">Shreya Sen:</span> Led the development and design, implemented core functionalities, and designed the overall architecture.</li>
          <li><span className="font-semibold text-pink-600">Priyanka Adhikary:</span> Contributed to UI/UX design and front-end components.</li>
          <li><span className="font-semibold text-pink-600">Supriti Chowdhury:</span> Designed interactive elements and supported front-end development.</li>
          <li><span className="font-semibold text-pink-600">Amisha Kumari:</span> Created graphic elements, enhanced visual appeal, and assisted with front-end tasks.</li>
        </ul>
      </div>

      <div className="tech-stack mb-8 p-10 bg-white rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li><span className="font-semibold text-pink-600">Client-side:</span> NEXT.JS</li>
          <li><span className="font-semibold text-pink-600">Server-side:</span> NEXT.JS</li>
          <li><span className="font-semibold text-pink-600">Database:</span> MongoDB, Railway PostgreSQL Database Service</li>
        </ul>
      </div>

      <div className="final-note mb-8 p-10 bg-white rounded shadow-lg w-full max-w-4xl">
        <p className="text-xl text-gray-900">
          Placement Cracker aims to empower candidates with the knowledge and tools to ace their interviews and achieve their career goals. Join us and take the next step toward your dream job!
        </p>
      </div>

      <div className="team-photos grid grid-cols-2 gap-8 mb-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white p-4 rounded shadow-lg">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <Image className="rounded-full h-[100px] w-[100px]" src={member.image} alt={member.name} width={100} height={100} />
            </a>
            <span className="font-semibold text-gray-900">{member.name.split(' ')[0]}</span>
            <span className="text-gray-700">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
