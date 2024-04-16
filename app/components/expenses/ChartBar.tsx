interface ChartBarProps {
  maxValue: number;
  value: number;
  label: string;
}

const ChartBar = ({ maxValue, value, label }: ChartBarProps) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="h-40 flex flex-col flex-end">
        <div
          className="bg-gray-800 rounded-md"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="mt-2">{label}</div>
    </div>
  );
};

export default ChartBar;
