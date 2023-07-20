const Newsletter = () => {
  return (
    <section>
      <div className="px-[10rem] py-[8rem] flex flex-col justify-center items-center text-center reletive z-[1]">
        <div className="font-extrabold text-[7.5rem] leading-[150px] text-[#f2f3f7] absolute -z-[1]">
          Newsletter
        </div>
        <h1 className="mb-[1rem] font-bold text-[2rem] leading-[40px] tracking-[0.03em] text-[#212121] capitalize">
          subscribe our newsletter
        </h1>
        <p className="mb-[2rem] font-light text-[1rem] leading-[26px] text-[#212121]">
          Get the latest information and promo offers directly
        </p>

        <form>
          <input
            type="email"
            placeholder="Input email address"
            className="py-[5px] pr-[120px] pl-[20px] bg-[#fcfcfc] border-[gray] border-[1px] border-solid"
          />
          <button
            type="submit"
            className="px-[20px] py-[10px] ml-[10px] bg-[#000] text-[#fff] font-semibold text-[0.9rem] leading-[16px] capitalize"
          >
            get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
