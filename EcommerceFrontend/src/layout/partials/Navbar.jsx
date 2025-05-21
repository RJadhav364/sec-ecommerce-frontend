import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import navbarDetails from '../../utils/NavbarOptions'
import { fetchCategories } from "../../utils/fetchCategory";
import useCategoryStore from '../../store/categoryStore';

const Navbar = () => {
    const [options, setOptions] = useState();
    // console.log(options)
    const storeCategory = useCategoryStore();
    const getCategories = async() => {
      const data = await fetchCategories(); // API call
      storeCategory.setAuth({
      isLoading: true,
      data: data
      })
      setOptions(data);
    }
    useEffect(() => {
    getCategories(); // It will call API only once due to `fetched` flag
  }, []);
  return (
    <>
      <div className='border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c]'>
          <div className='mx-auto w-[1400px] py-[20px]'>
              {/* <div></div> */}
              <ul className='flex gap-3 items-center justify-center'>
              <li className='group text-[16px]font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'><Link to={"/"}>Home
              </Link></li>
                {
                  options && options.passedData && options.passedData.length > 0 && options.passedData.map(({id,categoryName,subNavbar,children}) => (
                    <li key={id} className='group text-[16px]font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>
                      <Link to={`products?catId=${id}`}>{categoryName}
                      </Link>
                      { subNavbar == true && (
                        <ul className='absolute z-[999] bg-white left-[-15%] w-[122px] top-[125%] border-[1px] shadow-md  opacity-0 group-hover:opacity-100 group-hover:inline-block transform group-hover:transform group-hover:origin-top transition-all group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out max-h-0 group-hover:max-h-[200px]'>
                          {
                            children && children.length > 0 && children.map(({subCategoryName,id,parentCategory, children}) => (
                              <React.Fragment key={id}>
                                <Link to={`products?subCatId=${id}`}>
                                <li key={id} className='py-[5px] px-[30px] text-black cursor-pointer relative group/subgroup'>{subCategoryName}
                                
                                <ul className='absolute left-[101%] w-[122px] top-[-2%] transform translate-x-0 opacity-0 origin-left bg-white group-hover/subgroup:opacity-100 transition-all duration-300 ease-in-out max-h-0 group-hover/subgroup:max-h-[200px] group-hover/subgroup:-translate-x-[5px]'>
                                  {
                                    // children && children.length > 0 && children.map(({children,_id}) => (
                                      children.length > 0 && children.map(({thirdLevelCatName,_id}) => (
                                        <Link to={`products?thirdLevelcategoryId=${_id}`} key={_id}>
                                          <li key={_id} className='py-[5px] px-[30px] text-black cursor-pointer'>{thirdLevelCatName}</li>
                                        </Link>
                                      ))
                                    // ))
                                  }
                                </ul>
                                </li>
                                </Link>
                              </React.Fragment>
                            ))
                          }
                          {/* <ul className='childrem absolute z-[999] bg-white left-[-15%] w-[122px] top-[125%] border-[1px] border-black opacity-0 group-hover:opacity-100 group-hover:inline-block transform group-hover:transform group-hover:origin-top transition-all group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out max-h-0 group-hover:max-h-[200px]'>'>
                          {
                            children && children.length > 0 && children.map(({children,_id}) => (
                              children.length > 0 && children.map(({thirdLevelCatName,_id}) => (
                                <li key={_id} className='py-[5px] px-[30px] text-black cursor-pointer'>{thirdLevelCatName}</li>
                              ))
                            ))
                          }
                          </ul> */}
                          {/* {
                            children && children.children && children.children.length > 0 && (
                              
                            )
                          } */}
                        </ul>
                      )
                      }
                    </li>
                  ))
                }
              </ul>
              {/* <div></div> */}
          </div>
        {/* Navbar */}
      </div>
    </>
  )
}

export default Navbar
