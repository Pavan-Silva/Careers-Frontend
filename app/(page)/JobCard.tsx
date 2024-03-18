const JobCard = (props: { color: string; title: string; location: string }) => {
  return (
    <div
      className={`w-80 h-32 p-6 my-20 rounded-3xl ${
        props.color === "pink"
          ? "bg-light-pink"
          : props.color === "green"
          ? "bg-light-green"
          : "bg-white"
      }`}
    >
      <span className="text-sm block text-gray-500">{props.location}</span>
      <span className="text-[1.5em] text-gray-600">{props.title}</span>
    </div>
  );
};

export default JobCard;
