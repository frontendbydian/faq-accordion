import FAQItem from "./components/FAQItem";

type FAQType = {
  question: string;
  answer: string;
};

const faqdata: FAQType[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "  Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen min-h-screen mb-4 bg-custom-light-pink">
        <img
          src="/images/background-pattern-desktop.svg"
          alt="background image desktop"
          className="absolute top-0 left-0 hidden w-full md:block"
        />
        <img
          src="/images/background-pattern-mobile.svg"
          alt="background image desktop"
          className="absolute top-0 left-0 w-full md:hidden"
        />
        <section className="z-10 flex flex-col w-[85%] gap-7 p-6 md:p-10 mx-auto bg-white rounded-xl max-w-[600px]">
          <div className="flex items-center gap-6">
            <img
              src="/images/icon-star.svg"
              alt="star icon"
              className="w-6 h-6 md:w-10 md:h-10"
            />
            <h1 className="text-3xl font-bold md:text-[54px]">FAQs</h1>
          </div>
          <div className="flex flex-col w-full gap-4">
            {faqdata.map((item: FAQType, index: number) => {
              return (
                <FAQItem
                  key={index}
                  answer={item.answer}
                  question={item.question}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-custom-light-pink">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
          <br />
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
