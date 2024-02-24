import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What kind of project is this?",
    answer:
      "The project is a space where people who want to open their own online store in Telegram can create it, manage its appearance and fill it with goods. Users, in turn, can open these stores in Telegram and make purchases in them.",
    value: "item-1",
  },
  {
    question: "Is it possible to get your own bot?",
    answer:
      "Yes, to do this you need to register, enter your credentials and bot token.",
    value: "item-2",
  },
  {
    question: "Is it possible to test the functionality of the application?",
    answer:
      "Yes! You can try yourself as an administrator and user. To test the administrator role, you should create a free account. Once you log in, you can configure your bot and manage the composition of its products. To try yourself as a user, open the bot in telegram using one of the available links (https://t.me/test_shop_x_bot'), try to view the products or make a test payment.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="https://t.me/Kolya_Sotnichenko"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
