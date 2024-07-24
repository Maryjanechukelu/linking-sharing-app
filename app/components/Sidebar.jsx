const LeftSidebar = () => (
  <div className="hidden-lg self-stretch w-[560px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center p-6 box-border">
    <div className="w-[307px] relative h-[631px] bg-gray-200 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center">
      <div className="bg-gray-300 h-6 w-full rounded-t-xl mb-4"></div>
      <div className="w-full flex flex-col items-start justify-start gap-[20px]">
        <div className="w-full relative rounded-lg bg-whitesmoke h-11" />
        <div className="w-full relative rounded-lg bg-whitesmoke h-11" />
        <div className="w-full relative rounded-lg bg-whitesmoke h-11" />
        <div className="w-full relative rounded-lg bg-whitesmoke h-11" />
        <div className="w-full relative rounded-lg bg-whitesmoke h-11" />
      </div>
      <div className="bg-gray-300 h-6 w-full rounded-b-xl mt-4"></div>
    </div>
  </div>
);

export default LeftSidebar;
