const BlogCard = ({ data }) => {
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };
  return (
    <a
      href={"/blog/" + data.Id}
      className="group rounded-md relative block bg-black"
    >
      <img
        alt="Developer"
        src={data.Image}
        className="absolute inset-0 h-[400px] rounded-md w-full object-cover opacity-50 transition-opacity group-hover:opacity-30"
      />

      <div className="relative p-4 sm:p-6 flex flex-col justify-end h-[400px]">
        <p className="text-sm font-medium uppercase tracking-widest text-[#34BE82]">
          {dateHandler(data.InsertDate)}
        </p>

        {/* <p className="text-sm font-semibold text-white sm:text-2xl">{data.Title}</p> */}

        <p className="text-base font-semibold text-white line-clamp-3">
          {data.Title}
        </p>
        <div className="text-sm text-white ">{data.AuthorName}</div>
        <p className="text-sm mt-2 text-white line-clamp-2">{data.Content}</p>
      </div>
    </a>
  );
};
export default BlogCard;
