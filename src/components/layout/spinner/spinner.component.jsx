import spinner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto object-contain md:object-scale-down"
        src={spinner}
        alt="loading spinner"
      />
    </div>
  );
};

export default Spinner;
