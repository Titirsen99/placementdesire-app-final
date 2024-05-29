import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="p-5">
      <div className="flex justify-center">
        <span className="font-bold text-3xl text-center">
          Welcome to Interview Preparation!
        </span>
      </div>
      <br />
      <div className="flex justify-center">
        <span className="font-semibold text-2xl text-center">
          &quot;Unlock Your Potential, Ace Your Interviews!&quot;
        </span>
      </div>

      <div className="p-5 text-lime-950 font-semibold">
        <p>
          Congratulations on taking the first step towards securing your dream
          job! Interviews can be nerve-wracking, but with the right preparation,
          you can turn them into opportunities to shine. Remember, it&apos;s not just
          about what&apos;s on your resume; it&apos;s also about who you are as a person.
          Embracing Your Unique Traits Before diving into the nitty-gritty of
          common interview questions, let&apos;s take a moment to appreciate the
          diverse tapestry of personalities that make each of us unique. Your
          personality is your greatest asset, and understanding it can give you
          a distinct advantage in interviews.
        </p>

        <p>Many interviewers ask personality-based questions to get a better sense of who you are beyond your qualifications. Here are some common ones and tips on how to approach them:</p>
        <ol className="list-decimal pl-5">
          <li><strong>Tell me about yourself.</strong> Approach: This question might seem simple, but it&apos;s a chance to showcase your journey and how it aligns with the role. Focus on highlighting key experiences and skills relevant to the job.</li>
          <li><strong>How do you handle stress/pressure?</strong> Approach: Show your resilience by discussing specific strategies you use to manage stress. Whether it&apos;s deep breathing exercises, time management techniques, or seeking support from mentors, demonstrate your ability to stay composed under pressure.</li>
          <li><strong>Describe a challenge you&apos;ve overcome.</strong> Approach: Use the STAR method (Situation, Task, Action, Result) to structure your response. Talk about a specific challenge, the actions you took to address it, and the positive outcome. This demonstrates problem-solving skills and determination.</li>
          <li><strong>What motivates you?</strong> Approach: Share what drives you professionally and personally. Whether it&apos;s a passion for learning, making a difference in the community, or achieving personal growth, connect your motivation to the job you&apos;re applying for.</li>
          <li><strong>How do you handle conflicts with coworkers?</strong> Approach: Show your ability to navigate conflicts diplomatically. Discuss a time when you successfully resolved a conflict by actively listening, finding common ground, and working towards a mutually beneficial solution.</li>
        </ol>
        <p>Remember, these questions are not meant to catch you off guard but to understand how you approach challenges and collaborate with others. Practice your responses, but also be genuine and let your personality shine through. Also go through additional resource links provided.</p>
      </div>

      <div className="p-5">
        <h2 className="font-bold text-xl">Ready to Dive In?</h2>
        <h3 className="font-semibold text-lg">Explore Quiz Links:</h3>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfO7XhesJXHrqsZRl0T6DdodJmlp058zpO4rOFjEtTx1mIIyQ/viewform?usp=sf_link">
          <button className="bg-blue-500 text-white p-2 m-2 rounded-lg font-semibold">
            Java Quiz
          </button>
        </Link>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdbmtZ1hejhOSbyjPcE2tcXEwAOPOcNOCzwW_zfVMXWtzMZHw/viewform?usp=sf_link">
          <button className="bg-green-500 text-white p-2 m-2 rounded-lg font-semibold">
            Python Quiz
          </button>
        </Link>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScV7usN_BcGUx5TCZ9uR_cJ0jfkPAdxGn3iskLx5HZYEaGk9g/viewform?usp=sf_link">
          <button className="bg-yellow-500 text-white p-2 m-2 rounded-lg font-semibold">
            SQL Quiz
          </button>
        </Link>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeYQO7odN9g-gnhi81cU26OPFL8kGfT5hI5SGRT1WKYTiHSZw/viewform?usp=sf_link">
          <button className="bg-purple-500 text-white p-2 m-2 rounded-lg font-semibold">
            HTML/CSS Quiz
          </button>
        </Link>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc4VOl5o-OZs7D6hObUY1kj2y0nL7nzHWDTzcq53vDy6-O7hA/viewform?usp=sf_link">
          <button className="bg-red-500 text-white p-2 m-2 rounded-lg font-semibold">
            JavaScript Quiz
          </button>
        </Link>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg">Additional Resources:</h3>

        <ul className="list-disc pl-5">
          <li>
            <a href="https://toggl.com/blog/personality-questions-for-interview" className="text-blue-600 underline">
              Personality test
            </a>
          </li>
          <li>
            <a href="https://resources.workable.com/personality-interview-questions" className="text-blue-600 underline">
              Personality test
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">Java:</h4>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://www.cppbuzz.com/java/100-multiple-choice-questions-on-java" className="text-blue-600 underline">
              Java MCQ 1
            </a>
          </li>
          <li>
            <a href="https://www.careerride.com/mcq-topics/java-mcq-questions-and-answers-placement-tests-8.aspx" className="text-blue-600 underline">
              Java MCQ 2
            </a>
          </li>
          <li>
            <a href="https://iq.opengenus.org/questions-in-java/" className="text-blue-600 underline">
              Java MCQ 3
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">Python:</h4>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://www.interviewbit.com/python-mcq/" className="text-blue-600 underline">
              Python MCQ 1
            </a>
          </li>
          <li>
            <a href="https://www.includehelp.com/mcq/python-mcqs.aspx" className="text-blue-600 underline">
              Python MCQ 2
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">SQL:</h4>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://www.interviewbit.com/sql-mcq/" className="text-blue-600 underline">
              SQL MCQ 1
            </a>
          </li>
          <li>
            <a href="https://www.examveda.com/sql/practice-mcq-question-on-sql-miscellaneous/" className="text-blue-600 underline">
              SQL MCQ 2
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">HTML/CSS Fundamentals:</h4>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://www.geekshelp.in/2023/03/html-css-multiple-choice-questions-and-answers.html" className="text-blue-600 underline">
              HTML/CSS MCQ 1
            </a>
          </li>
          <li>
            <a href="https://www.interviewbit.com/css-mcq/" className="text-blue-600 underline">
              HTML/CSS MCQ 2
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">JavaScript:</h4>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://www.interviewbit.com/javascript-mcq/" className="text-blue-600 underline">
              JavaScript MCQ 1
            </a>
          </li>
          <li>
            <a href="https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions" className="text-blue-600 underline">
              JavaScript MCQ 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;