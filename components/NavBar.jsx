import Image from "next/image";
export default function Profile() {
  return (
    <>
      <aside className="h-screen bg-white fixed lg:sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl ">
        <div className="mb-10 flex items-center justify-between ">
          <div className=" p-2 bg-green-500 text-white rounded">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>

        <ul className="text-gray-500 font-semibold flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="active text-black bg-gray-100 flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <Image
                src="/dashboard.svg"
                alt="Vercel Logo"
                className="invert"
                width={20}
                height={20}
                priority
              />
              <span className="flex-grow pl-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/notification.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                Notifications
                <span className="bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs">
                  2
                </span>
              </span>
            </a>
          </li>
          <li className="border my-2"></li>
          <li>
            <a
              href="#"
              className="flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/marketing.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                <span className="flex-grow">Sales</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/marketing.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                <span className="flex-grow">Inventory</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/marketing.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                <span className="flex-grow">Customer</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <Image
                  src="/marketing.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                <span className="flex-grow">Marketing</span>
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
