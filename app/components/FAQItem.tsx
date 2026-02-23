"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-txt pr-8 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-border group-hover:border-primary flex items-center justify-center transition-all duration-300 ${
            open ? "bg-primary border-primary rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-colors ${open ? "text-white" : "text-txt-tertiary group-hover:text-primary"}`}
          >
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div>
          <p className="pb-5 text-txt-secondary leading-relaxed pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
