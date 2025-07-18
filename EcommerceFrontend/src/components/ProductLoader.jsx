const ProductLoader = ({skeltonNo, classes}) => {
  return (
    // {
    //     Array.from({length: skeltonNo}).map((value, index) => (
    //         <div className={`${classes}`} key={index}>
    //             <div className="flex-1 space-y-4 py-1">
    //                 <div className=" bg-gray-200 rounded animate-pulse w-full h-[200px]"></div>
    //                 <div className="space-y-2">
    //                 <div className="h-2 bg-gray-200 rounded w-1/6 animate-pulse"></div>
    //                 <div className="h-3 bg-gray-200 rounded w-2/5 animate-pulse"></div>
    //                 <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
    //                 <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
    //                 </div>
    //             </div>
    //         </div>
    //     ))
    // }
    <div className={`${classes}`}>
    {
        Array.from({length: skeltonNo}).map((value, index) => (
                <div className="flex-1 space-y-4 py-1" key={index}>
                    <div className=" bg-gray-200 rounded animate-pulse w-full h-[200px]"></div>
                    <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-1/6 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    </div>
                </div>
        ))
    }
    </div>
  )
}

export default ProductLoader
