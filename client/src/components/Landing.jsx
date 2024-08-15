const Landing = () => {
  return (
    <div className="w-screen min-h-screen flex gap-2">
      <div className="w-1/2 h-full bg-black/90 flex justify-center items-center">
        <div className="relative">
          <img src="/gameImages/toa.webp" alt="Elden Ring" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center WBE opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-500">
            <img src="/gameImages/toaLogo.png" className="w-5/6" />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col gap-2">
        <div className="relative">
          <img
            src="/gameImages/elden.webp"
            alt="Elden Ring"
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center WBE opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-500">
            <img src="/gameImages/eldenLogo.webp" className="w-5/6" />
          </div>
        </div>

        <div className="relative">
          <img
            src="/gameImages/sf6.webp"
            alt="Street Fighter 6"
            className="w-full "
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center WBE opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-500">
            <img src="/gameImages/sf6Logo.webp" className="w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
