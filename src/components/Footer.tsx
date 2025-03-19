const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 p-5">
        <div className="flex flex-col md:flex-row items-center text-center justify-center md:text-left">
          <div className="flex flex-col w-full md:w-1/3 mb-5 md:mb-0">
            <img
              src="\icon-api.png"
              alt="icon-api"
              className="w-10 mb-2 mx-auto md:mx-0"
            />
            <div className="text-gray-500 mt-3">
              <span>
                Copyright © 2020 Landify UI Kit. <br />
                All rights reserved
              </span>
            </div>
            <div className="flex justify-center md:justify-start gap-5 mt-5">
              <div className="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center transition-transform duration-75 ease-in-out hover:scale-110">
                <img src="/Instagram.svg" alt="Instagram" className="w-7 h-7" />
              </div>
              <div className="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center transition-transform duration-75 ease-in-out hover:scale-110">
                <img src="/Path.svg" alt="Path" className="w-7 h-7" />
              </div>
              <div className="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center transition-transform duration-75 ease-in-out hover:scale-110">
                <img src="/Twitter.svg" alt="Twitter" className="w-7 h-7" />
              </div>
              <div className="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center transition-transform duration-75 ease-in-out hover:scale-110">
                <img src="/Youtube.svg" alt="YouTube" className="w-7 h-7" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-left gap-2 md:ml-10 mb-5 md:mb-0 md:w-1/4">
            <h1 className="text-2xl text-neutral-50">Stay up to date</h1>
            <input
              type="text"
              placeholder="Your email address"
              className="pl-3 w-full h-10 rounded-sm bg-gray-400 mt-3"
            />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  