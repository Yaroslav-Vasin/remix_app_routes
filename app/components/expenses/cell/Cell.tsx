interface CellProps {
  number: number;
  label: string;
}

export default function Cell({ number, label }: CellProps) {
  return (
    <div>
      <dt className="text-xl">{label}</dt>
      <dd className="m-0 text-4xl">${number.toFixed(2)}</dd>
    </div>
  );
}
