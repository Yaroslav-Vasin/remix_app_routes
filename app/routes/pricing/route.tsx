import { FaTrophy, FaHandshake } from "react-icons/fa";
import PricingPlan from "~/components/marketing/PricingPlan";

const PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: FaHandshake,
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: FaTrophy,
  },
];

export default function PricingPage() {
  return (
    <main className="text-center" id="pricing">
      <h2>Great Product, Simple Pricing</h2>
      <ol className="w-96 mx-auto flex justify-center gap-8 mt-12">
        {PRICING_PLANS.map((plan) => (
          <li
            key={plan.id}
            className="bg-white rounded-lg overflow-hidden shadow-md text-gray-500 w-1/2"
          >
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}
