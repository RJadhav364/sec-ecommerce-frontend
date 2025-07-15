
const CategoryViews = ({data}) => {
  return (
    <>
    {
        data && data?.length > 0 && data?.map(({id,categoryName,subNavbar,children}) => (
              <div className="" key={id}>
                <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
                  <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img src={`http://localhost:9000/category/get-category-image/${id}`} className="w-[44%]" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{categoryName}</h3>
                  </div>
                </a>
              </div>
        ))
    }
    </>
  )
}

export default CategoryViews
