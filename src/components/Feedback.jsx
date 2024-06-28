import React, { useState, useEffect } from "react";

const feedbacks = [
  {
    text: "They have always provided high quality food, known that presentation is important & had a willingness to evolve with the times and trends.",
    name: "John Kurian",
  },
  {
    text: "From planning the menu to execution, it was flawless.",
    name: "Sandra Emmanuel",
  },
  {
    text: "They made the whole night feel light and fun, and completely kept the tone we were setting.",
    name: "T Unnithan",
  },
  {
    text: "Every client has walked away thrilled with the wedding and how delicious the food was!",
    name: "Suresh Kurup",
  },
  {
    text: "Delicious food and impeccable service! Thank you for making our event unforgettable.",
    name: "Manjula KU",
  },
];

const Feedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFeedbackChange = (index) => {
    setCurrentFeedback(index);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="md:text-5xl my-10 sm:text-3xl text-2xl text-center italic font-serif py-2">
          {feedbacks[currentFeedback].text}
        </h2>
        <p className="text-center my-10 text-gray-600 text-xl mt-2">
          - {feedbacks[currentFeedback].name}
        </p>
        <div className="flex justify-center mt-4">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 my-10 mx-1 rounded-full ${
                currentFeedback === index ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => handleFeedbackChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
