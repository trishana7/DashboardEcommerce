export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="container">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-gray-200">
              Register your account
            </div>
            <div className="pb-7 pt-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-800"
                    id="first_name"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-800"
                    id="last_name"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800"
                  id="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 w-full rounded-lg"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <p className="text-center my-4">
            <a
              href="/login"
              className="text-gray-600 text-sm no-underline hover:text-blue-800"
            >
              I already have an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
