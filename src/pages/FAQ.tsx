import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQCategory {
  name: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    name: "Fabric Guide",
    questions: [
      {
        question: "What makes bamboo fabric good for sleepwear?",
        answer: "Bamboo fabric excels as sleepwear due to its natural properties: exceptional softness, superior breathability, and effective moisture-wicking capabilities. It's also hypoallergenic, naturally antibacterial, and temperature-regulating, making it perfect for sensitive skin and comfortable sleep in any season."
      },
      {
        question: "How does bamboo fabric compare to other natural materials?",
        answer: "Bamboo fabric offers several advantages over other natural materials. Compared to cotton, it's softer, more moisture-wicking, and has natural antibacterial properties. Versus silk, bamboo is more durable and easier to care for. It's also more sustainable than most traditional fabrics, requiring less water and no pesticides to grow."
      },
      {
        question: "Is bamboo fabric truly sustainable?",
        answer: "Bamboo is one of the most sustainable fabric sources available. The plant grows rapidly without pesticides, requires minimal water, and regenerates naturally. However, the processing method matters - look for products using closed-loop lyocell processing, which is more environmentally friendly than traditional viscose production."
      },
      {
        question: "What's the difference between bamboo viscose and bamboo lyocell?",
        answer: "While both are derived from bamboo, the manufacturing process differs significantly. Bamboo viscose uses chemical solvents that can impact the environment. Bamboo lyocell, produced in a closed-loop system, is more eco-friendly as chemicals are recycled and reused. Lyocell typically results in a slightly more durable fabric."
      }
    ]
  },
  {
    name: "Care Guide",
    questions: [
      {
        question: "How do I care for my bamboo sleepwear?",
        answer: "To maintain bamboo sleepwear: wash in cold water on a gentle cycle, avoid fabric softeners and bleach, tumble dry on low or air dry, and store in a cool, dry place. For best results, turn garments inside out before washing and avoid direct sunlight when drying to prevent fading."
      },
      {
        question: "Can I put bamboo fabric in the dryer?",
        answer: "Yes, but with care. Use a low heat setting and remove items promptly to prevent wrinkles. Air drying is ideal for preserving the fabric's softness and extending its lifespan. If using a dryer, avoid high heat which can damage the fibers and cause shrinkage."
      },
      {
        question: "How often should I wash bamboo sleepwear?",
        answer: "While bamboo fabric has natural antibacterial properties, regular washing is still recommended. Wash after 2-3 wears or immediately if soiled. The fabric's durability allows for frequent washing without degradation, but always follow care instructions to maintain quality."
      },
      {
        question: "Will bamboo fabric shrink in the wash?",
        answer: "High-quality bamboo fabric typically experiences minimal shrinkage when cared for properly. To prevent shrinkage, wash in cold water and avoid high heat drying. Most bamboo garments are pre-shrunk, but it's recommended to check the care label for specific instructions."
      }
    ]
  },
  {
    name: "Sleep Science",
    questions: [
      {
        question: "How does bamboo fabric improve sleep quality?",
        answer: "Bamboo fabric enhances sleep quality through multiple mechanisms: temperature regulation keeps you comfortable throughout the night, moisture-wicking properties prevent night sweats, and the soft texture reduces skin irritation. The fabric's breathability also promotes better air circulation, creating an optimal sleep environment."
      },
      {
        question: "Is bamboo fabric good for hot sleepers?",
        answer: "Yes, bamboo fabric is excellent for hot sleepers. Its unique fiber structure creates micro-gaps for enhanced ventilation, while its moisture-wicking properties help regulate body temperature. Studies show bamboo fabric can keep you 3-4 degrees cooler than cotton during warm nights."
      },
      {
        question: "Can bamboo fabric help with night sweats?",
        answer: "Bamboo fabric is highly effective against night sweats due to its exceptional moisture-wicking properties. The fabric can absorb up to 40% more moisture than cotton while maintaining breathability. This helps keep you dry and comfortable throughout the night, reducing sleep disruptions."
      },
      {
        question: "Does bamboo fabric affect sleep cycles?",
        answer: "Research suggests that bamboo fabric can positively impact sleep cycles by maintaining optimal sleep temperature. The body needs to cool down slightly to initiate and maintain deep sleep, and bamboo's temperature-regulating properties help maintain this ideal temperature throughout the night."
      },
      {
        question: "How does bamboo fabric compare to synthetic cooling fabrics?",
        answer: "Unlike synthetic cooling fabrics that often use chemical treatments, bamboo provides natural temperature regulation through its fiber structure. While synthetic fabrics may lose their cooling properties over time, bamboo maintains its temperature-regulating capabilities throughout its lifetime and is more environmentally friendly."
      }
    ]
  },
  {
    name: "Health & Allergies",
    questions: [
      {
        question: "Are bamboo fabrics hypoallergenic?",
        answer: "Yes, bamboo fabrics are naturally hypoallergenic. They resist dust mites, mold, and mildew, making them ideal for allergy sufferers. The fabric's smooth fibers and natural antibacterial properties also help prevent skin irritation and allergic reactions common with other materials."
      },
      {
        question: "Can bamboo fabric help with skin conditions?",
        answer: "Bamboo fabric can benefit various skin conditions due to its smooth fibers, antibacterial properties, and excellent moisture management. It's particularly helpful for eczema, sensitive skin, and heat rash. The fabric's natural temperature regulation also helps prevent skin irritation from sweating."
      },
      {
        question: "Is bamboo fabric antibacterial?",
        answer: "Yes, bamboo fabric contains natural antibacterial and antifungal properties from a bio-agent called 'bamboo kun.' This helps reduce bacteria growth by up to 99.8%, minimizing odors and maintaining freshness. These properties persist even after multiple washes."
      },
      {
        question: "How does bamboo fabric benefit respiratory health?",
        answer: "Bamboo fabric's natural resistance to dust mites, mold, and mildew makes it an excellent choice for those with respiratory conditions like asthma or allergies. The fabric's ability to regulate humidity and resist allergen accumulation helps create a healthier sleeping environment."
      },
      {
        question: "Is bamboo fabric safe for babies and children?",
        answer: "Yes, bamboo fabric is particularly suitable for babies and children due to its gentle, hypoallergenic nature. The fabric's softness prevents skin irritation, while its temperature-regulating properties help maintain comfortable body temperature. The natural antibacterial properties also make it ideal for sensitive young skin."
      },
      {
        question: "Can bamboo fabric help with menopausal night sweats?",
        answer: "Bamboo fabric is particularly effective for managing menopausal night sweats. Its superior moisture-wicking capabilities and temperature regulation help minimize discomfort during hot flashes. The fabric's ability to absorb excess moisture while maintaining breathability makes it an ideal choice for women experiencing menopause symptoms."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = React.useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Frequently Asked Questions About Bamboo Sleepwear | BambooSleepReviews</title>
        <meta name="description" content="Find answers to common questions about bamboo sleepwear, including care instructions, benefits, and sustainability. Expert guidance from BambooSleepReviews." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqCategories.map((category) => (
          <div key={category.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-green-50 dark:bg-green-900 flex justify-between items-center"
              onClick={() => toggleCategory(category.name)}
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{category.name}</h2>
              {openCategory === category.name ? (
                <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            
            {openCategory === category.name && (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.questions.map((q) => (
                  <div key={q.question} className="px-6">
                    <button
                      className="w-full py-4 text-left flex justify-between items-center"
                      onClick={() => toggleQuestion(q.question)}
                    >
                      <h3 className="text-gray-800 dark:text-white font-medium pr-4">{q.question}</h3>
                      {openQuestion === q.question ? (
                        <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                    {openQuestion === q.question && (
                      <div className="pb-4 text-gray-600 dark:text-gray-300">
                        {q.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;