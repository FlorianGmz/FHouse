import data from "../data/data.json";

const HomeDiaporama = () => {
  return (
    <div>
      <img src={data.projects[0].image} alt="" />
    </div>
  );
};

export default HomeDiaporama;
