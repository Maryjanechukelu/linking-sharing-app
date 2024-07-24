import Image from "next/image";

const MainContent = () => (
  <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start">
    <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start p-10 gap-[40px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <b className="self-stretch relative leading-[150%] text-lg">
          Customize your links
        </b>
        <h1 className="self-stretch relative text-md leading-[150%] text-grey">
          Add/edit/remove links below and then share all your profiles
          with the world!
        </h1>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px] text-base text-purple">
        <button
          type="submit"
          className="self-stretch rounded-lg flex flex-col items-center justify-center py-[11px] px-[27px] border-[1px] border-solid border-purple "
        >
          <div className="w-[108px] relative h-6">
            <h1 className="w-[100%] absolute leading-[100%] font-semibold">
              + Add new link
            </h1>
          </div>
        </button>
        <div className="self-stretch flex-1 rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center p-5 text-center text-13xl text-dark-grey">
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
            <Image
              src="/get-started-icon.svg"
              alt="Devlinks Logo"
              className="w-[249.5px] relative h-40"
              width={100}
              height={24}
              priority
            />
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <h1 className="w-[488px] relative leading-[150%] inline-block font-bold">
                Let’s get you started
              </h1>
              <p className="w-[488px] relative text-base leading-[150%] text-grey inline-block">
                Use the “Add new link” button to get started. Once you
                have more than one link, you can reorder and edit them.
                We’re here to help you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col items-start justify-end text-base text-white mt-10">
      <div className="self-stretch relative bg-borders h-px mt-10" />
      <div className="self-stretch flex flex-col items-end justify-start py-6 px-10">
        <button className="rounded-lg bg-purple hover:bg-[#b8a7fc] flex flex-col items-start justify-start py-[11px] px-[27px] opacity-[0.25]">
          <div className="w-[37px] relative h-6">
            <div className="absolute top-[0px] left-[0px] leading-[150%] font-semibold">
              Save
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
);

export default MainContent;
