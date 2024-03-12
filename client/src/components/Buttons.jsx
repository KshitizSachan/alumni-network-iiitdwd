import PropTypes from "prop-types";

const PrimaryButton = ({ name }) => {
  PrimaryButton.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <button
      className= "flex justify-center items-center p-2 m-2 text-md font-semibold text-white max-h-9 bg-primaryPink rounded-md border border-primaryPink hover:bg-hoverpink hover:text-white transition duration-300 ease-in-out "
      style={{ letterSpacing: '0.075em', borderWidth: '1.25px'}}
    >
      {name}
    </button>
  );
};

const BorderButton = ({name}) => {
  return (
    <button
      className= "flex justify-center items-center p-2 m-2 text-md font-semibold max-h-9  text-primaryPink bg-white rounded-md border border-primaryPink hover:bg-primaryPink hover:text-white hover:shadow-md transition duration-300 ease-in-out  "
      style={{ letterSpacing: '0.075em' ,borderWidth: '1.25px'}}
    >
      {name}
    </button>
  );
};

const SecondaryButton = () => {
  return (
    <>
      <div>Secondary Button Component</div>
    </>
  );
};

export { PrimaryButton, BorderButton, SecondaryButton };
