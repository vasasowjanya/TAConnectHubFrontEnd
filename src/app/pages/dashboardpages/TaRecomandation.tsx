const TaRecomandation = () => {
  return (
    <div>
      <h1 className="text-lg">TA Recomandations</h1>
      <div className="py-4">
        <div className="flex items-center gap-10">
          <div>Name</div>
          <div>
            <select className="select select-bordered w-full rounded-none">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div>
            <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
              Recommand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaRecomandation;
