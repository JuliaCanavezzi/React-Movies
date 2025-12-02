interface FormInfoProps {
  title: string;
  info: string;
}

export function FormInfo({ info, title }: FormInfoProps) {
  return (
    <div className="font-bold">
      <h1 className="text-2xl">{title}</h1>
      <span className="text-xs text-zinc-500">{info}</span>
    </div>
  );
}
