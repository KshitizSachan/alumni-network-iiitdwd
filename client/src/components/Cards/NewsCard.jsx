import Bgnewscard1 from "../../assets/Components/Cards/Bgnewscard1.svg";

const NewsCard = (props) => {
  const rank=props.rank;
  const shouldBlur = (value) =>{
    if(rank == -1 && value != 'jobPosition')
      return 'blur-sm';
    else if(rank == 3 && value == 'postedBy')
      return 'blur-sm';
    return '';
  }

  const link = props.link ? props.link : "https://www.google.co.in/";
  return (
    <a href={link}>
      <div className="my-10 m-auto rounded-2xl sm:w-3/4 w-11/12 overflow-hidden">

        <div
          className="relative rounded-2xl bg-cover p-4  bg-opacity-100"
          style={{
            backgroundImage: `url(${
              Bgnewscard1
            })`,
          }}
        >
          <div className="absolute top-0 left-0 size-full bg-black/40"></div>
          <div className="lg:mr-48 sm:ml-5 mb-5 relative">
            <h3 className="text-3xl  font-normal text-white">
              {props.title}
            </h3>
            <p className="text-gray-200  font-thin text-sm pt-5">
              {props.description}
            </p>
            {props.tags?
              (<div className="flex mt-4 gap-4">
                {props.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-md border p-4 md:max-h-8 flex place-items-center rounded-2xl text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>) : null}
          </div>

        </div>

      </div>
    </a>
  );
};

export default NewsCard;