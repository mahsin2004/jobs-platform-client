const EmployGuide = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-10 pb-28 pt-20">
      <div className="lg:flex lg:justify-between">
        <div className="">
          <img
            className="lg:rounded-bl-xl lg:rounded-tl-xl"
            src="https://i.postimg.cc/SschzPYc/employ.jpg"
            alt="Image"
          />
        </div>
        <div className="space-y-8 text-white bg-[#1f57c3] lg:rounded-br-xl lg:rounded-tr-xl px-10 py-10">
          <div className="space-y-6">
            <h4 className="text-3xl font-semibold">For talent</h4>
            <h3 className="text-4xl lg:text-7xl font-bold">
              Find great <br /> work
            </h3>
            <p className="text-lg">
              Meet clients you’re excited to work with and take <br /> your
              career or business to new heights.
            </p>
          </div>

          <div>
            <h1 className="h-[2px] rounded-full bg-white my-8"></h1>
            <div className="lg:flex lg:justify-between">
              <p>Find opportunities <br /> for every stage of your freelance career</p>
              <p>Control when, where, and how you work</p>
              <p>Explore different ways to earn</p>
            </div>
          </div>
          <button className="text-sm lg:text-xl text-[#1f57c3] bg-white px-6 py-2 rounded-full">
            Find opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployGuide;
