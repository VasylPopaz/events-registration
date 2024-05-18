const Home = () => {
  return (
    <section className="flex h-[80vh] justify-center items-center">
      <div className="flex flex-col gap-[10px] justify-center items-center text-text-color">
        <h1 className="font-semibold text-[32px] text-center w-[700px]">
          Welcome to EventGo!
        </h1>
        <p className="text-[24px] text-center w-[300px]  md:w-[700px]">
          Join us today and elevate your event experience
        </p>
      </div>
    </section>
  );
};

export default Home;
