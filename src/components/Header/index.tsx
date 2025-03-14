import { Link } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import LogoIcon from '../../assets/logo 1.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import { MdSearch } from 'react-icons/md';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-primary drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none h-[65px]">
      <div className="flex items-center justify-between w-full px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* قسم اللوغو */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* زر القائمة الجانبية */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>

          {/* اللوغو */}
          <Link className="block flex-shrink-0 lg:w-full lg:ml-7" to="/">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        {/* قسم البحث والأيقونات */}
        <div className="flex flex-1  justify-between items-center gap-6">
          {/* حقل البحث - أقصى اليسار */}
          <div className="relative  w-full mx-20">
            <MdSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray"
              size={20}
            />
            <input
              type="text"
              placeholder="Search anything here...."
              className="w-full font-light text-sm pl-12 pr-4 py-1.5 rounded-lg bg-white text-[#A5A5A5] border border-gray focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* الأيقونات - أقصى اليمين */}
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownMessage />
            <DropdownNotification />
            <DropdownUser />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
