import { useState } from "react";

const CategoryDrawer = ({ isDrawerOpen, setIsDrawerOpen, data }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState({
    accordionState: false,
    activeAccordionId: "",
  });
  return (
    // isDrawerOpen && (
    // <div className="w-full h-full">
    // <div className="fixed top-0 left-0 right-0 bottom-0 z-[110] flex">
    <>
      <div
        className={`transform transition-transform duration-200 ease-in-out fixed top-0 left-0 bottom-0 z-[111] dark:bg-[#121212] bg-white ${
          isDrawerOpen == true ? "translate-x-[0px] w-[15%]" : "translate-x-[-194px]"
        }`}
      >
        <div className="p-3">
          <img
            src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg"
            className="w-[170px]"
          />
        </div>
        <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between dark:text-white">
          Shop By Categories{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="cursor-pointer text-[20px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsDrawerOpen(false)}
          >
            <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
          </svg>
        </h3>
        <div className="scroll">
          <ul className="w-full dark:text-white">
            {data &&
              data?.length > 0 &&
              data?.map(({ id, categoryName, subNavbar, children }) => (
                <li key={id} className="list-none">
                  <button
                    className="p-[.45rem_.75rem] flex justify-between items-center w-full cursor-pointer"
                    onClick={() =>
                      setIsAccordionOpen({
                        accordionState: true,
                        activeAccordionId: id,
                      })
                    }
                  >
                    {categoryName}
                    <div className="w-[20px] h-[20x] border rounded-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </div>
                  </button>
                  {/* {
                              subNavbar && (
                                <ul>
                                  {
                                    children?.map(({subCategoryName,id,parentCategory}) => (
                                      <li key={id}>{subCategoryName}</li>
                                    ))
                                  }
                                </ul>
                              )
                            } */}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div
        className={` ${
          isDrawerOpen == true
            ? "w-full bg-[#8C93A0] opacity-[.8] fixed top-0 left-0 right-0 bottom-0 z-[110]"
            : "hidden"
        }`} onClick={() => setIsDrawerOpen(false)}
      ></div>
    </>
    // </div>
    // </div>
    // )
  );
};

export default CategoryDrawer;
