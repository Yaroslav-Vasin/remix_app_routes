type InputProps = {
  text: string;
  func: (arg: string) => void;
};

export default function Input({ text, func }: InputProps) {
  return (
    <p className="flex flex-col">
      <label htmlFor="email">{text}</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={(e) => func(e.target.value)}
      />
    </p>
  );
}
