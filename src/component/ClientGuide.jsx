import { TbEdit } from "react-icons/tb";
import { BsPinAngle } from "react-icons/bs";
import { RiShieldStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClientGuide = () => {
  return (
    <div className="py-28 px-8 max-w-[1440px] mx-auto ">
      <div className="lg:flex lg:gap-6 lg:justify-between lg:items-center">
        <div>
          <img
            className="lg:w-[550px]"
            src="https://i.postimg.cc/7ZRGBvC7/client-Guide.gif"
            alt="animation"
          />
        </div>
        <div className="space-y-6">
          <h2 className=" text-5xl font-semibold text-gray-700">
            Up your work game, it’s easy
          </h2>
          <div className="space-y-5">
            <div className="flex gap-2">
              <div>
                <TbEdit className="text-2xl"></TbEdit>
              </div>
              <div>
                <h4>No cost to join</h4>
                <p>
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </p>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <BsPinAngle className="text-2xl"></BsPinAngle>
              </div>
              <div>
                <h4>Post a job and hire top talent</h4>
                <p>
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!
                </p>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <RiShieldStarFill className="text-2xl"></RiShieldStarFill>
              </div>
              <div>
                <h4>Work with the best—without breaking the bank</h4>
                <p>
                  Dream jobs makes it affordable to up your work and take
                  advantage of low transaction rates.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link to="/register" className="text-xl bg-gray-700 text-white px-6 py-3 rounded-full mr-4">
              Register for free
            </Link>
            <button className="text-xl border-gray-800 border-2 text-gray-700 px-6 py-2 rounded-full">
              Learn how to hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGuide;
