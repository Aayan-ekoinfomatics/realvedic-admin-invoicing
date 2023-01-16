import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import order from '../../assets/icons/cart.svg'
import seller from '../../assets/icons/seller.svg'
import product from '../../assets/icons/product.svg'
import eko from '../../assets/icons/eko_logo.svg'

const Sidebar = () => {

    const location = useLocation();

    // useEffect(() => {
    //   console.log(location?.pathname)
    // }, [location])


    return (
        <div className={`w-[250px] h-screen poppins fixed left-0 bg-[color:var(--primary-color)] z-[500] `}>
            <div className='w-full flex justify-center items-center mb-8 mt-[62px]'>
                <img src={logo} alt="" />
            </div>

            <div className='w-full flex flex-col justify-center items-center pl-4'>
                <div className='flex flex-col items-center'>
                        {/* <Link  to='/' className={`flex w-full gap-3 hover:bg-[#eeeeee] px-4 py-[5px] active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}>
                            <img src={dashboard} className='w-[20px]' alt="" />
                            <p>Dashboard</p>
                        </Link> */}
                        <Link to='/orders' className={`flex w-full gap-3 hover:bg-[#eeeeeea9] ${location?.pathname === '/orders' ? 'bg-[#eeeeeea9]' : ''} px-4 py-[5px] active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}>
                            <img src={order} className='w-[18px]' alt="" />
                            <p>Orders</p>
                        </Link>
                        <Link to='/buyers' className={`flex w-full gap-3 hover:bg-[#eeeeeea9] ${location?.pathname === '/buyers' ? 'bg-[#eeeeeea9]' : ''} px-4 py-[5px] active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}>
                            <img src={seller} className='w-[18px]' alt="" />
                            <p>Buyers</p>
                        </Link>
                        <Link to='/products' className={`flex w-full gap-3 hover:bg-[#eeeeeea9] ${location?.pathname === '/products' ? 'bg-[#eeeeeea9]' : ''} px-4 py-[5px] active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}>
                            <img src={product} className='w-[17px]' alt="" />
                            <p>Products</p>
                        </Link>
                </div>
            </div>

            <div className='w-full absolute bottom-0 flex justify-center items-center gap-2 pb-4'>
                <h1 className='text-[10px] text-[#818181] italic'>Powered by</h1>
                <span className='text-[12px] not-italic text-[#12227c] font-[500]'><img src={eko} className='w-[50px]' alt="" /></span>
            </div>

        </div>
    )
}

export default Sidebar