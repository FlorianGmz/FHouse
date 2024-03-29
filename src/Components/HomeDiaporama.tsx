import data from "../data/projects.json";

const HomeDiaporama = () => {
  return (
    <div>
      <img src={data[0].image} alt="" />
    </div>
  );
};

export default HomeDiaporama;
