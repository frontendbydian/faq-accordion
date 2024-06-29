import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      {" "}
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold md:text-lg">{question}</h2>
        <button
          className="flex max-w-6 min-w-6 md:max-w-8 md:min-w-8"
          onClick={() => setShow(!show)}
        >
          <img
            src={`/images/icon-${show ? "plus" : "minus"}.svg`}
            alt="hide button"
            className="object-cover w-full h-full"
          />
        </button>
      </div>
      <div
        className={`${
          !show ? "max-h-0" : "max-h-96"
        } overflow-hidden transition-[max-height] ease-in-out  duration-500`}
      >
        <p className="text-sm md:text-base text-custom-grayish-purple">
          {answer}
        </p>
      </div>
    </>
  );
}
