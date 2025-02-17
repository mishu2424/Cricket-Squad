const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10 pt-10 space-y-5">
      <div className="-translate-y-30 rounded-xl border-4 p-4 glass">
      <div className="rounded-xl subscribe-section flex flex-col items-center lg:justify-center space-y-3 bg-white bg-[url('../../../assets/bg-shadow.png')] bg-cover bg-no-repeat  p-24 px-36">
        <h2 className="text-sm lg:text-xl font-bold text-center text-black">
          Subscribe to our Newsletter
        </h2>
        <p className="text-xs font-thin opacity-70 text-center text-black">
          Get the latest updates and news right in your inbox!
        </p>
        <form>
          <fieldset className="form-control w-80 flex flex-col space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered placeholder:text-black"
              />
              <button className="btn bg-purple-400 text-white">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
      <img
        className="w-20 mx-auto"
        src="../../../assets/logo-footer.png"
        alt=""
      />
      <div className="footer footer-container flex flex-col lg:flex-row justify-between">
        <div className="about-us">
          <h4 className="text-base font-bold">About Us</h4>
          <p className="text-xs opacity-70">
            We are a passionate team <br /> dedicated to providing the <br />{" "}
            best services to our customers.
          </p>
        </div>
        <nav>
          <h6 className="text-base font-bold">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="text-base font-bold">Subscribe</h6>
          <p className="text-xs opacity-70">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control w-80 flex flex-col space-y-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered join-item placeholder:text-black"
              />
              <button className="btn bg-purple-400 join-item border-none shadow-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <hr />
      <p className="text-xs opacity-70 text-center">
        &copy; 2024 Your Company All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
