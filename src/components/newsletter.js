export default function Newsletter() {
  return (
    <div className="bg-primary">
      <div className="container lg:max-w-screen-xl flex items-center justify-between flex-wrap gap-[20px] py-[90px]">
        <div>
          <h3 className="lg:text-[48px] lg:leading-[58px] text-[32px] leading-[38px] font-bold text-white"> Join our mailing list</h3>
          <p className="lg:text-[16px] lg:leading-[30px] text-[15px] leading-[27px] text-white">
            Stay up to date with our special offers.
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px]">
          <input className="sm:w-[350px] w-[250px]" type="text" placeholder="Email address" />
          <button className="btn-dark">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
