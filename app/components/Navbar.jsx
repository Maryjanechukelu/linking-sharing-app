import Image from "next/image"

const Navbar = () => (
  <div className="self-stretch flex flex-col items-start justify-start p-6">
    <div className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start py-4 pr-4 pl-6">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="w-[146px] relative h-8 flex items-center">
          <Image
            src="/logo-icon.svg"
            alt="Logo Icon"
            className="ml-4 w-[135px] h-[26.3px]"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/devlinks.svg"
            alt="Devlinks Logo"
            className="ml-4 w-[135px] h-[26.3px]"
            width={135}
            height={26.3}
            priority
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <button
            type="submit"
            className="rounded-lg bg-light-purple hover:bg-[#b8a7fc] flex flex-row items-center border border-purple justify-start py-[11px] px-[27px] gap-[8px]"
          >
            <Image
              src="/link-tag.svg"
              alt="Devlinks Logo"
              className="w-5 h-5 overflow-hidden shrink-0"
              width={20}
              height={20}
              priority
            />
            <h1 className="relative leading-[150%] font-semibold">Links</h1>
          </button>
          <div className="rounded-lg flex flex-row items-center justify-start py-[11px] px-[27px] gap-[8px] text-grey">
            <Image
              src="/user-icon.svg"
              alt="Devlinks Logo"
              className="w-6 h-6 overflow-hidden shrink-0"
              width={24}
              height={24}
              priority
            />
            <h1 className="relative text-xl leading-[150%] font-semibold">
              Profile Details
            </h1>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-lg flex flex-col items-start justify-start py-[11px] px-[27px] border-[1px] border-solid border-purple"
        >
          <div className="w-[60px] relative h-6">
            <h1 className="absolute top-[0px] left-[0px] leading-[150%] font-semibold">
              Preview
            </h1>
          </div>
        </button>
      </div>
    </div>
  </div>
)

export default Navbar
