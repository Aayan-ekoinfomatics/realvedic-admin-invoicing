import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import search_icon from "../assets/img/mainPages/search_icon.svg";
import item from '../assets/img/mock-images/about-us.png';
import arrow_down from '../assets/icons/down-arrow.svg'

const OrderAddPage = () => {

    const [searchData, setSearchData] = useState("");

    const [orderAddData, setOrderAddData] = useState();

    const [searchProductsDropdownToggle, setSearchProductsDropdownToggle] = useState(false);

    const [searchVariants, setSearchVariants] = useState(null);

    useEffect(() => {
        setOrderAddData({
            added_products: [
                { id: 2, title: 'Anagya Podi', category: 'Rasam & Soup', image: item, size: '250g', unit_price: '150', quantity: '2', price: '300' },
                { id: 4, title: 'HealthMix Dosa', category: 'Health Mix', image: item, size: '200g', unit_price: '100', quantity: '1', price: '100' },
                { id: 2, title: 'Anagya Podi', category: 'Rasam & Soup', image: item, size: '250g', unit_price: '150', quantity: '2', price: '300' },
                { id: 2, title: 'HealthMix Dosa', category: 'Health Mix', image: item, size: '200g', unit_price: '100', quantity: '1', price: '100' },
            ],
            all_products: [
                { id: '1', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '2', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g', '1kg'], price: ['110', '170', '280', '460'], },
                { id: '3', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '4', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '5', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '6', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g', '1kg'], price: ['110', '170', '280', '460'], },
                { id: '7', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '8', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '9', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '10', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '11', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '12', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g', '1kg'], price: ['110', '170', '280', '460'], },
                { id: '13', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '14', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '15', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '16', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280',], },
                { id: '17', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
                { id: '18', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g', '500g', '1kg'], price: ['110', '170', '280', '460'], },
                { id: '19', title: 'Multigrain Health Mix', image: item, category: 'Health Mix', unit_price: '110', total: '110', size: ['200g', '250g', '500g',], price: ['110', '170', '280'], },
                { id: '20', title: 'Desi Chai Masala', image: item, category: 'Beverage Mixes', unit_price: '110', total: '110', size: ['200g', '250g',], price: ['110', '170',], },
            ],
        })
    }, [])

    return (
        <div className='w-full px-5 pt-0'>

            {/* header */}
            <div className="flex justify-between items-start md:items-center sticky top-0 py-5">

                {/* order information */}
                <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-5'>
                    <h1 className="text-xl ">
                        Order{" "}
                        <span className="text-[#208a48] font-medium ml-1">
                            #
                            {/* {orderData?.order_id} */}
                        </span>
                    </h1>
                    <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-5'>
                        <div>
                        </div>
                        <div className='w-[1px] h-[15px] bg-gray-400 hidden md:block'></div>
                        <div className='flex items-start gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <h1 className='text-[12px] text-gray-600'><span className='pr-2'>06.22.2019</span><span className='pr-2'>at</span><span className=''>01:36pm</span></h1></div>
                    </div>
                </div>

                {/* buttons */}
                <div className='flex justify-center items-center gap-3 relative'>

                    {/* <button className="px-4 text-[19px] py-[5px] rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all active:scale-95 bg-[#208a48] text-white"
                    onClick={() => setMainDropdown(!mainDropDown)}
                    >
                        ⋮
                    </button> */}

                    <button className="px-5 py-2 rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all active:scale-95 bg-[#208a48] text-white"
                    // onClick={submitPageData}
                    >
                        SAVE CHANGES
                    </button>
                </div>

            </div>

            {/* main flex */}
            <div className='w-full flex mt-10 gap-5'>

                {/* left flex */}
                <div className='w-[65%]'>

                    {/* products */}
                    <div className='w-full border-2 bg-white border-[#7d9383] rounded-[15px] min-h-[400px] shadow-md px-4'>
                        <div className='w-full py-3'>
                            <h1 className='text-[16px] font-[500]'>Products</h1>
                        </div>

                        {/* searchbar & button -- ेाोी */}
                        <div className='w-full flex justify-between relative items-center py-2 '>

                            {/* searchbar */}
                            <div className="border-[#7d9383] border-2 rounded-[15px] bg-white flex items-center overflow-hidden px- w-full max-w-[500px] ">
                                
                                <label htmlFor="search_order" className="px-2  pr-0">
                                    <img src={search_icon} className="w-[18px]" alt="" />
                                </label>
                                <input
                                    type="text"
                                    id="search_order"
                                    className="w-full outline-none px-2 py-1 text-[14px]"
                                    onChange={(e) => {
                                        setSearchData(e?.target?.value)
                                        setSearchProductsDropdownToggle(true)
                                    }}
                                />

                                {/* dropdown */}
                                <div className={`w-[55%] left-[1%] absolute top-[85%] bg-[#7d9383] rounded-b-[15px] shadow-md transition-all duration-300 overflow-hidden ${searchData.length > 0 ? ' h-[480px] ease-in' : 'h-0 ease-out'} max-h-[500px]`}>
                                    <div className='w-[99%] mx-auto max-w-[500px] bg-white h-[470px] border rounded-b-[12px]  border-t-0 overflow-y-scroll container'>
                                        {
                                            orderAddData?.all_products.filter((filterValue) => {
                                                if (searchData === '') {
                                                    return filterValue
                                                } else if (filterValue?.title?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.category?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.id?.includes(searchData)) {
                                                    return filterValue
                                                }
                                            })
                                                ?.map((data, i) => (
                                                    <React.Fragment key={i}>
                                                        <div className='w-full hover:bg-gray-100 px-4 py-3 border-t flex items-center'>
                                                            <div className='w-full flex justify-start items-center gap-2'>
                                                                <div className='w-fit'>
                                                                    <img src={data?.image} className='w-[55px]' alt="" />
                                                                </div>
                                                                <div className='w-full flex-col justify-start items-center'>
                                                                    <h1 className='text-[14px] text-gray-700'>{data?.title}</h1>
                                                                    <h1 className='text-[12px] text-gray-500'>{data?.category}</h1>
                                                                </div>
                                                            </div>
                                                            <div className='w-full max-w-[30px] cursor-pointer'>
                                                                <div className='w-fit' onClick={() => searchVariants === null ? setSearchVariants(data?.title) : setSearchVariants(null)}>
                                                                    <img src={arrow_down} className={`w-[16px] transition-all duration-300 ${searchVariants === null ? 'rotate-0' : 'rotate-180'}`} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`w-full transition-all duration-300 overflow-hidden px-4 ${searchVariants === data?.title ? 'h-[80px] ease-in' : 'h-0 ease-out'}`}>
                                                            <div className='w-full flex justify-between items-start'>
                                                                <div className='w-full flex-col flex items-start'>
                                                                    {
                                                                        data?.size?.map((size, i) => (
                                                                            <div key={i} className='w-full flex justify-start px-2 py-1 hover:bg-gray-100'>
                                                                                <h1 className='text-[12px] text-gray-400'>{size}</h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                                <div className='w-full flex-col flex'>
                                                                    {
                                                                        data?.price?.map((price, i) => (
                                                                            <div key={i} className='w-full flex justify-end px-2 py-1 hover:bg-gray-100'>
                                                                                <h1 className='text-[12px] text-gray-400'>{price}</h1>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                        }
                                    </div>
                                </div>

                            </div>

                            {/* add product button */}
                            <div className='w-fit'>
                                <button className='px-4 py-[5px] rounded-[10px] bg-[#208a48] text-white text-[14px] shadow-md active:scale-95 transition-all'>Add Product</button>
                            </div>
                        </div>

                        {/*added  products list */}
                        <div className='w-full mt-5 pb-2'>
                            <div className='w-full'>
                                <div className='grid grid-cols-[50%_1fr_1fr_1fr] pb-3'>
                                    <div className='w-full'>
                                        <h1 className='text-[13px] text-gray-500'>Products</h1>
                                    </div>
                                    <div className='w-full flex justify-center items-center'>
                                        <h1 className='text-[13px] text-gray-500'>Quantity</h1>
                                    </div>
                                    <div className='w-full flex justify-center items-center'>
                                        <h1 className='text-[13px] text-gray-500'>Price</h1>
                                    </div>
                                    <div className='w-full flex justify-center items-center'>
                                        <h1 className='text-[13px] text-gray-500'>Action</h1>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {
                                        orderAddData?.added_products?.map((data, i) => (
                                            <div key={i} className='w-full grid grid-cols-[50%_1fr_1fr_1fr] py-2 border-t'>
                                                <div className='w-full flex items-center gap-2'>
                                                    <div className='w-fit'>
                                                        <img src={data?.image} className='w-[60px]' alt="" />
                                                    </div>
                                                    <div className='w-full flex flex-col items-start'>
                                                        <h1 className='text-[14px] text-gray-600 font-[600]'>{data?.title}</h1>
                                                        <h1 className='text-[12px] text-gray-500'>{data?.category}</h1>
                                                        <h1 className='text-[13px]'>Rs {data?.unit_price}</h1>
                                                    </div>
                                                </div>
                                                <div className='w- flex justify-center items-center'>
                                                    <input min={1} defaultValue={1} className='w-[100px] border px-3 py-1' type='number' />
                                                </div>
                                                <div className='w-full flex justify-center items-center'>
                                                    <h1>Rs {data?.price}</h1>
                                                </div>
                                                <div className='w-full flex justify-center items-center'>
                                                    <h1 className='cursor-pointer p-2'>x</h1>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* right flex */}
                <div className='w-[45%]'>

                    {/* payment details */}
                    <div className='w-full border-2 bg-white border-[#7d9383] rounded-[15px] shadow-md px-4 pb-3'>
                        <div className='w-full'>
                            <h1 className='text-[16px] font-[500] py-4'>Payment</h1>
                        </div>
                        <div className='w-full mt-5'>
                            <div className=' flex flex-col gap-[4px]'>
                                <div className='flex justify-between w-full'>
                                    <h1 className='text-[13px] text-gray-500'>Subtotal <span className='text-gray-400 text-[11px]'>&#40;2 items&#41;</span></h1>
                                    <h1 className='text-[13px] text-gray-500'>Rs 534</h1>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <h1 className='text-[13px] text-gray-500'>Delivery Charges</h1>
                                    <h1 className='text-[13px] text-gray-500'>Rs 80</h1>
                                </div>
                                <div className='flex justify-between w-full pb-2'>
                                    <h1 className='text-[13px] text-gray-500'>Tax</h1>
                                    <h1 className='text-[13px] text-gray-500'>Rs 64</h1>
                                </div>
                                <div className='flex justify-between w-full pt-2 border-t'>
                                    <h1 className='text-[14px] font-[600]'>Order Total</h1>
                                    <h1 className='text-[14px] font-[600]'>Rs 678</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default OrderAddPage