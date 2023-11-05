const Statistics = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:pr-6 xl:pr-12">
              <p className="text-6xl font-bold leading-10 text-blue-500">
                92%
                <span className="ml-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-gray-800 dark:text-gray-300">
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  +7% this month
                </span>
              </p>
              <p className="mt-2 sm:mt-3 text-gray-500">
                of U.S. adults have bought from businesses using Space
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-3xl font-semibold text-blue-500">99.95%</p>
                <p className="mt-1 text-gray-500">in fulfilling orders</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-blue-500">2,000+</p>
                <p className="mt-1 text-gray-500">partner with Preline</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-blue-500">85%</p>
                <p className="mt-1 text-gray-500">this year alone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
