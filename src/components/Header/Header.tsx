export const Header = () => {
  return (
    <nav className="bg-white fixed w-full top-0 start-0  dark:border-gray-600 z-[100]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={require("../../assets/images/logo.png")}
            className="h-5"
            alt="super-sales-logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="font-bold text-primary text-base py-2 px-[33px] rounded-full border-border-dark bg-surface hover:bg-yellow-400 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            style={{
              borderWidth: "1px 1px 6px 1px",
            }}
          >
            Try for free
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.14286 10H17.8571C18.4255 10 18.9705 10.2258 19.3724 10.6276C19.7742 11.0295 20 11.5745 20 12.1429C20 12.7112 19.7742 13.2562 19.3724 13.6581C18.9705 14.0599 18.4255 14.2857 17.8571 14.2857H7.14286C6.57454 14.2857 6.02949 14.0599 5.62763 13.6581C5.22576 13.2562 5 12.7112 5 12.1429C5 11.5745 5.22576 11.0295 5.62763 10.6276C6.02949 10.2258 6.57454 10 7.14286 10ZM22.1429 27.1429H32.8571C33.4255 27.1429 33.9705 27.3686 34.3724 27.7705C34.7742 28.1723 35 28.7174 35 29.2857C35 29.854 34.7742 30.3991 34.3724 30.8009C33.9705 31.2028 33.4255 31.4286 32.8571 31.4286H22.1429C21.5745 31.4286 21.0295 31.2028 20.6276 30.8009C20.2258 30.3991 20 29.854 20 29.2857C20 28.7174 20.2258 28.1723 20.6276 27.7705C21.0295 27.3686 21.5745 27.1429 22.1429 27.1429ZM7.14286 18.5714H32.8571C33.4255 18.5714 33.9705 18.7972 34.3724 19.1991C34.7742 19.6009 35 20.146 35 20.7143C35 21.2826 34.7742 21.8277 34.3724 22.2295C33.9705 22.6314 33.4255 22.8571 32.8571 22.8571H7.14286C6.57454 22.8571 6.02949 22.6314 5.62763 22.2295C5.22576 21.8277 5 21.2826 5 20.7143C5 20.146 5.22576 19.6009 5.62763 19.1991C6.02949 18.7972 6.57454 18.5714 7.14286 18.5714Z"
                fill="#414141"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <a
                href="/"
                className="font-bold text-black text-base border-border-dark px-6 py-2 rounded-full"
                style={{
                  borderWidth: "1px 1px 6px 1px",
                }}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-black text-base">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-black text-base">
                About
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-black text-base">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="font-bold text-black text-base">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
