import React from "react";
import ImageSwipe from "../Request/ImageSwipe";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/cleanUI.png";
const images = [img1, img2];
const data = [
  {
    image: img1,
    title: "No Search Engine Visibility",
    facts: [
      {
        stat: "76%",
        desc: "of people who search a service on their smartphone physically visit that service provider within 24 hours.",
      },
      {
        stat: "84%",
        desc: "of homeowners use Google before selecting a home service provider.",
      },
    ],
    description:
      "You can't be found through Google searches unless you're on a site or directory. You rely only on word of mouth or paid ads to get noticed.",
  },
  {
    image: img2,
    title: "Slow Replies Lose Customers",
    facts: [
      {
        stat: "78%",
        desc: "of customers buy from the company that responds to their inquiry first.",
      },
      {
        stat: "50%",
        desc: "of leads go with the first business to follow up — even if others are cheaper.",
      },
    ],
    description:
      "When customers message on WhatsApp or Instagram and don’t get a quick reply, they move on. A website keeps them engaged with instant info: pricing, FAQs, service details, contact number, or even a quote form — no waiting, no drop-off.",
  },
  {
    image: img1,
    title: "You Explain Everything Manually",
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
    description:
      "You waste time typing out prices, services, and answers again and again on WhatsApp. A website does the talking for you — 24/7. Visitors instantly see what you offer, your prices, photos, contact options, and more. That means fewer lost leads and more conversions.",
  },
  {
    image: img1,
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
    description:
      "Without a website, your business can seem unprofessional or even fake. A clean, branded site builds trust instantly — with testimonials, reviews, service photos, location, and verified contact info. It tells people you're legit before they even call.",
  },
  {
    image: img1,
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
    description:
      "On Instagram or Facebook, your posts disappear in feeds. Customers DM, wait, and often leave. With a website, everything’s organized: services, pricing, FAQs, and contact — no back-and-forth. You capture more leads while you sleep, Instagram DM flow: Customer waits hours for replies, gets tired of asking questions, leaves. ✅ Website flow: Customer finds your site on Google, reads everything, and books you without even messaging.",
  },
];
const Problems = () => {
  return (
    <div className="bg-white py-4">
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
