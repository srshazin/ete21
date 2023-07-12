import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Circles
      height="50"
      width="50"
      color="#bababa"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
    />
  );
};

export default Spinner;
