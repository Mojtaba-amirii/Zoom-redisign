export default function Card(props) {
  const { icon, title } = props;

  return (
    <div className="flex flex-col items-center justify-center p-6 border border-zoom-blue rounded-xl h-[8rem]">
      {icon}
      <p className="text-xs md:text-base">{title}</p>
    </div>
  );
}
