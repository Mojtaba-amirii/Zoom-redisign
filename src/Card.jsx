export default function Card(props) {
  const { icon, title } = props;

  return (
    <div className="flex flex-col items-center p-6 border border-zoom-blue rounded-xl">
      {icon}
      <p className="text-xs md:text-base">{title}</p>
    </div>
  );
}
