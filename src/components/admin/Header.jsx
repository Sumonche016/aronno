const Header = async () => {
  return (
    <div className=" bg-[#ffffff] px-2 font-500 w-full  sticky top-0 z-[49] shadow-deep  py-5">
      <div className="flex justify-between items-center conatiner mx-auto">
        {/* <GetTittleFromUrl /> */}
        <h1>Dashboard</h1>

        <div className=" text-xl flex w-[50%] gap-3 justify-end">
          <section className="flex gap-5 items-center text-gray-500">
            <div className="notification relative">
              <div className="notificationIcon "></div>
              <span className="absolute mt-[5px] rounded-full h-5 w-5 p-2 bg-red-600 text-white font-semibold flex justify-center items-center top-[-10px] ml-[.8rem] text-sm">
                6
              </span>
            </div>
          </section>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
