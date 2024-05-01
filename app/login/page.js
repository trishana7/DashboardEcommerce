export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="container">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-7 px-8">
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
                  placeholder="Your email address"
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
                  placeholder="Your secure password"
                />
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-lg"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
