import PropTypes from 'prop-types'
import { TbCoinFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { ToastContainer } from 'react-toastify';
const Header = ({handleCredits, coin}) => {
  return (
    <header className="w-[90vw] mx-auto space-y-3">
      <div className="navbar bg-base-100 py-4 my-3">
        <div className="flex-1">
          <a className="btn btn-ghost">
            <img src="../../../assets/logo.png" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-10">
          <div className="links flex items-center gap-5">
            <ul className=" items-center gap-3 opacity-80 hidden lg:flex">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
              </ul>
            </div>
            <div className="coin-btn">
              <button className="btn px-8 py-2">
                <span className='px-2'>{coin}</span>
                Coin{" "}
                <TbCoinFilled className="text-amber-500 size-4"></TbCoinFilled>
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div>
                <CgProfile className="size-8"></CgProfile>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative rounded-lg banner flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-gray-900 to-gray-100 bg-[url('../../../assets/bg-shadow.png')] bg-cover bg-no-repeat bg-center p-10">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 banner-picture">
          <img src="../../../assets/banner-main.png" alt="" />
        </div>

        <div className="relative z-10 banner-details flex flex-col items-center justify-center gap-5">
          <h2 className="text-base md:text-3xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-sm opacity-80 font-semibold text-white">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="claim-credit p-1 border-4 rounded-md border-[#E7FE29]">
            <button onClick={handleCredits} className="btn px-10 py-2 border-none bg-[#E7FE29]">
              Claim Free Credit
            </button>
            <ToastContainer autoClose={3000}/>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes={
  handleCredits:PropTypes.func.isRequired,
  coin:PropTypes.number,
}
export default Header;
