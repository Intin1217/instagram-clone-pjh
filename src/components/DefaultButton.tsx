interface ButtonProps {
  name: string;
}

export default function DefaultButton({ name }: ButtonProps) {
  return (
    <button className="bg-gray-200 p-1 rounded text-sm font-bold hover:bg-gray-400">{name}</button>
  );
}
