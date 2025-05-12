import React from "react";
import ImageSwipe from "../Request/ImageSwipe";
import seo from "../../assets/seo.png";
import salesFunnel from "../../assets/salesFunnel.png";
import manual from "../../assets/manual.png";
import social from "../../assets/social.png";
import cred from "../../assets/cred.png";
const data = [
  {
    image: seo,
    title: "No Search Engine Visibility",
    facts: [
      {
        stat: "77%",
        desc: "of Consumers Use Google When Looking for Local Business Information.",
      },
      {
        stat: "76%",
        desc: "of people who search a service on their smartphone physically visit that service provider within 24 hours.",
      },
    ],
    description: [
      "People don’t search Facebook or Instagram for goods and services — they search Google.",
      "Without a website, you won’t show up on search engines.",
      "You’re invisible to potential customers unless they already know your name.",
      "That means relying on word of mouth or paid ads just to get noticed.",
    ],
  },
  {
    image: salesFunnel,
    title: "Sales Funnel",
    facts: [
      {
        stat: "70%",
        desc: "of small businesses lose leads because they take too long to respond or forget to follow up.",
      },
      {
        stat: "50%",
        desc: "of customers go with the first business that replies them — even if others are cheaper.",
      },
    ],
    description: [
      "On Instagram, customers wait hours for replies and must ask everything manually — pricing, availability, portfolio, etc.",
      "This wastes time for both you and the customer.",
      "On a website, everything is clear and available instantly — services, photos, prices, reviews.",
      "You can guide visitors from interest to decision automatically with a built-in sales funnel.",
    ],
  },
  {
    image: manual,
    title: "You Explain and do Everything Manually",
    facts: [
      {
        stat: "78%",
        desc: "of customers buy from the business that replies first — not necessarily the best or cheapest.",
      },
      {
        stat: "70%",
        desc: "of small businesses lose leads because they take too long to respond or forget to follow up.",
      },
    ],
    description: [
      "You repeat yourself constantly: sending pricing, menus, photos, and past work manually over chat.",
      "This is time-consuming, inconsistent, and prone to error.",
      "A website answers FAQs for you — 24/7 — showing exactly what you offer without effort.",
      "You can even automate quoting, bookings, or consultations.",
      "That means less work and more closed deals.",
    ],
  },
  {
    image: cred,
    title: "No Website = No Credibility",
    facts: [
      {
        stat: "70%",
        desc: "of people don’t trust a business without a website.",
      },
      {
        stat: "75%",
        desc: "judge a company’s credibility based on its website design.",
      },
    ],
    description: [
      "No website? People assume you're not legit, unprofessional, or even fake.",
      "Social media alone doesn’t build enough trust, especially with strangers.",
      "A proper website shows reviews, service photos, business info, and contact details — all in one place.",
      "It builds confidence and positions you as a reliable professional.",
    ],
  },
  {
    image: social,
    title: "You Lose Sales on Social Media",
    facts: [
      {
        stat: "85%",
        desc: "of people expect to find business info like pricing and services online — instantly.",
      },
      {
        stat: "74%",
        desc: "say they’ll move on to another provider if they don’t get quick info or a response.",
      },
    ],
    description: [
      "A user sees a random post like “Pipe Repair – $50” and clicks your profile.",
      "Instead of helpful info, they find memes, old promos, or scattered posts.",
      "They can't easily find pricing, service list, or next steps.",
      "There’s no structure or call to action — just “DM me” or a vague link in bio.",
      "That frustration makes them leave and choose someone else who’s more clear and professional.",
    ],
  },
];
  
const Problems = () => {
  return (
    <div className="bg-white py-4 sm:px-20">
      <div className="">
        <ImageSwipe
          images={data}
          className={"w-full sm:h-[600px] h-[300px] object-cover rounded-md"}
        />
        <div></div>
      </div>
    </div>
  );
};

export default Problems;
