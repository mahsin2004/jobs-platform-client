const NewsLetter = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:pb-28 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <a className="group relative block" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900 before:z-[-1]">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                alt="Image Description"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-1">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                      src="https://i.ibb.co/Vq2ZcmV/p3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-white">Gloria</h4>
                    <p className="text-xs text-white">Jan 09, 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-1">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white">
                  Dream jobs enables us to differentiate ourselves from our
                  competitors and produce content at a higher caliber.
                </h3>
                <p className="mt-2 text-white">
                  Josh Machiz, Chief Digital Officer
                </p>
              </div>
            </div>
          </a>

          <a className="group relative block" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900 before:z-[-1]">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-1">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                      src="https://i.ibb.co/WVYzLDQ/p5.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ml-2.5 sm:ml-4">
                    <h4 className="font-semibold text-white">Gloria</h4>
                    <p className="text-xs text-white">May 30, 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-1">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  One of the advantages of utilizing freelancers is finding
                  talent with different skills quickly as our needs change.
                </h3>
                <p className="mt-2 text-white/[.8]">
                  Carol Taylor, Director of Content Experience
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
