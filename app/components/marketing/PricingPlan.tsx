interface PricingPlanProps {
  title: string;
  price: string;
  perks: string[];
  icon?: any;
}

function PricingPlan({ title, price, perks, icon }: PricingPlanProps) {
  const Icon = icon;
  return (
    <article>
      <header className="p-4">
        <div className="icon">
          <Icon className="w-16 h-16 text-lg flex justify-center items-center text-black border-2 border-white rounded-full mx-auto my-4" />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </header>
      <div className="plan-content">
        <ol>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ol>
        <div className="actions">
          <a className="" href="/not-implemented">
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}

export default PricingPlan;
