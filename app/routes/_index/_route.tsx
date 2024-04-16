import type { MetaFunction } from "@remix-run/node";
import { FaArrowRight, FaDollarSign, FaChartBar } from "react-icons/fa";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <section className="my-24 mx-auto">
        <header className="flex gap-8 items-center text-primary-50">
          <FaDollarSign className="text-lg" />
          <h2 className="m-0">A Central Space</h2>
        </header>
        <div className="flex gap-8 my-12">
          <div className="w-1/2 rounded-lg shadow-lg p-2 bg-primary-100 flex justify-center items-center transform -rotate-5">
            <img
              className="w-full rounded-md"
              src="images/expenses-management.jpg"
              alt="A list of expenses."
            />
          </div>
          <div className="w-1/2">
            <p>Manage your expenses in one central place.</p>
            <p>
              <Link className="cta" to="/expenses">
                <span>Get Started</span>
                <FaArrowRight className="text-lg" />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className="marketing-content">
          <p className="marketing-explanation">
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
          <div className="marketing-image">
            <img src="images/expenses-chart.jpg" alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}
