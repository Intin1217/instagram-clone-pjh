interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export default function DefaultButton({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 p-1 rounded text-sm font-bold hover:bg-gray-400"
    >
      {name}
    </button>
  );
}
