const JobCard = (props: { color: string; title: string; location: string }) => {
  return (
    <div
      className={`square w-80 h-32 text-gray-600 p-6 font-light bg-white my-20 rounded-3xl text-3xl ${
        props.color === "white"
          ? "bg-white"
          : props.color === "pink"
          ? "bg-light-pink"
          : "bg-light-green"
      }`}
    >
      <span className="text-sm block font-semibold">{props.location}</span>
      {props.title}
    </div>
  );
};

export default JobCard;
