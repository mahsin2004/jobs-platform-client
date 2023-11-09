import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = 'Blogs | Online Jobs'
  },[])
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div
        className="hero h-[300px] rounded-b-lg"
        style={{
          backgroundImage: "url(https://i.postimg.cc/xT7P2RnM/blog.jpg)",
        }}
      ></div>
      <div className=" py-5 lg:py-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-1.5 border-l-8 py-3 px-3 rounded-md text-4xl font-semibold  text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            What is an access token and refresh token? <br /> How do they work
            and where should we store them on the client-side?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className=" rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://i.postimg.cc/LsFWTv1m/token.png"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="sm:order-1">
            <h2 className="text-base xl:leading-tight text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-bold text-base">Access Token:</span> An access token
                is a short-lived credential that grants the client access to a
                specific resource or API on behalf of an authenticated user. The
                access token is used to make authenticated requests to protected
                resources or APIs on behalf of the user. Access tokens are
                typically short-lived to enhance security. When they expire, the
                client must obtain a new one.
              </p>
              <p className="mt-4 text-base">
                <span className="font-bold">Refresh Token:</span> A refresh
                token is a long-lived credential that is used to obtain a new
                access token when the original access token expires. The refresh
                token is typically only exchanged with the authorization server
                and is stored securely. It enables the client to maintain
                continuous access to resources without the need for the user to
                re-enter their credentials.
              </p>
            </h2>

            <div className="mt-3 sm:mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 sm:h-14 sm:w-14 rounded-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocLZd0LFmrVeND-diXEuiZKRdZy_nSqhZdmZsadOTBck_A=s96-c"
                  alt="Image Description"
                />
              </div>

              <div className="ml-3 sm:ml-4">
                <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                  Md Mahsin Mia
                </p>
                <p className="text-xs text-gray-500">
                  MERN Stack Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-5 lg:pb-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-1.5 border-l-8 py-3 px-3 rounded-md text-4xl font-semibold  text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            What is express js? What is Node Js?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className=" rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://i.postimg.cc/VNV8mpZm/nodeJs.png"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="sm:order-1">
            <h2 className="text-base xl:leading-tight text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-bold text-base">Express js:</span> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. It is one of the most popular and widely used frameworks for building web and API applications in the JavaScript ecosystem. Express.js simplifies the process of building web applications by providing a set of features and tools to handle tasks such as routing, middleware, request handling, and more
              </p>
              <p className="mt-4 text-base">
                <span className="font-bold">Node Js:</span> Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.
              </p>
              
            </h2>

            <div className="mt-3 sm:mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 sm:h-14 sm:w-14 rounded-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocLZd0LFmrVeND-diXEuiZKRdZy_nSqhZdmZsadOTBck_A=s96-c"
                  alt="Image Description"
                />
              </div>

              <div className="ml-3 sm:ml-4">
                <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                  Md Mahsin Mia
                </p>
                <p className="text-xs text-gray-500">
                  MERN Stack Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
