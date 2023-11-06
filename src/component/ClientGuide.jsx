const ClientGuide = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <img
            className="w-[600px]"
            src="https://i.postimg.cc/7ZRGBvC7/client-Guide.gif"
            alt="animation"
          />
        </div>
        <div>
          <h2 className=" text-5xl font-medium">
            Up your work game, it’s easy
          </h2>
          <div>
            <h4>No cost to join</h4>
            <p>Register and browse professionals, explore projects, or even book a consultation.</p>
          </div>
          <div>
            <h4>Post a job and hire top talent</h4>
            <p>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
          </div>
          <div>
            <h4>Work with the best—without breaking the bank</h4>
            <p>Dream jobs makes it affordable to up your work and take advantage of low transaction rates.</p>
          </div>
          
          <div>
            <button className="text-xl bg-black text-white px-6 py-2 rounded-full mr-4">
              Register for free
            </button>
            <button className="text-xl bg-black text-white px-6 py-2 rounded-full">
              Learn how to hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGuide;
