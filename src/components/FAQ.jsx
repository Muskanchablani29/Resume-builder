import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: "Thank you for your question! We will get back to you shortly." }]);
      setNewQuestion("");
    }
  };

  const faqData = [
    {
      question: "What is the Resume Builder website?",
      answer: "The Resume Builder website is a tool that helps you create professional resumes quickly and easily. You can customize templates, fonts, colors, and layouts to create a resume that suits your style and needs.",
    },
    {
      question: "How do I use the Resume Builder?",
      answer: "To use the Resume Builder, simply sign up or log in, choose a template, and start adding your information. You can customize the design and preview your resume in real-time before downloading it in PDF or DOCX format.",
    },
    {
      question: "Is the Resume Builder free to use?",
      answer: "Yes, the basic version of the Resume Builder is free to use. However, there may be premium features and templates available for a fee.",
    },
    {
      question: "Can I save my progress and come back later?",
      answer: "Yes, you can save your progress at any time and come back later to continue editing your resume. Just make sure to log in with the same account.",
    },
    {
      question: "How can I get help if I have a problem?",
      answer: "If you need help, you can visit our Help Center or contact our support team at support@resumebuilder.com.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}

      <h3>Ask a Question</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newQuestion}
          onChange={handleInputChange}
          placeholder="Type your question here..."
        />
        <button type="submit">Submit</button>
      </form>

      {questions.length > 0 && (
        <div className="user-questions">
          <h3>Your Questions</h3>
          {questions.map((q, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{q.question}</div>
              <div className="faq-answer">{q.answer}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
