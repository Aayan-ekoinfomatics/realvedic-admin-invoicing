import React from 'react'
import user_icon_static from "../assets/img/sidebar/user_icon_static.svg";
import add_icon from "../assets/img/mainPages/add_icon.svg";
import cross from "../assets/icons/cross.svg";
import arrow_down from '../assets/icons/down-arrow.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { VITE_BASE_ADDRESS } from '../base_address/base_address';
import { toast } from 'react-toastify';

const Banners = () => {

    const [addBannerPopUp, setAddBannerPopUp] = useState(false);

    const [bannerType, setBannerType] = useState('');

    const [offerType, setOfferType] = useState('');

    const [dropDownData, setDropDownData] = useState();

    const [categoriesDropDown, setCategoriesDropDown] = useState();

    const [updateData, setUpdateData] = useState();

    useEffect(() => {
        let formdata = new FormData();
        formdata.append('token', localStorage.getItem('admin-token'))
        axios.post(VITE_BASE_ADDRESS + 'cms/bannerUploadCategoryProducts', formdata).then((response) => {
            // console.log(response?.data)
            setDropDownData(response?.data)
        })
    }, [])



    return (
        <div className='w-full'>

            {/* header */}
            <div className="flex  relative justify-between items-start sm:items-center w-[90%] mx-auto pt-5">
                <div className="flex ">
                    <img src={user_icon_static} alt="" />
                    <h1 className="p-3 sm:p-5 text-lg sm:text-xl font-semibold text-[#464646]">
                        Banners
                    </h1>
                </div>

                <div>
                    <button className="bg-[#164E21] text-white rounded-full flex items-center p-3 px-8 gap-2 active:scale-95 transition-all" onClick={() => setAddBannerPopUp(!addBannerPopUp)}>
                        <span>Add Banners</span>
                        <img src={add_icon} alt="" />
                    </button>
                </div>
            </div>

            <div className={`bg-white scale-0 transition-all duration-100 overflow-hidden ${addBannerPopUp ? 'ease-in scale-100' : 'ease-out'} shadow-xl  rounded-[20px] border-2 border-[#7d9383] w-full max-w-[700px] max-h-[800px] -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] p-4 fixed z-[200]`} >
                <div className="w-full flex justify-end items-center">
                    <img src={cross} className="w-[16px] cursor-pointer" alt="" onClick={() => setAddBannerPopUp(false)} />
                </div>
                <div className="w-full flex justify-center items-center mt-1">
                    <h1 className="text-[16px] font-[600]">Add banner details</h1>
                </div>
                <div className='w-full flex flex-col gap-4 justify-between items-center'>
                    <div className='w-full pb-4'>
                        <h1 className='text-[15px] font-[500] py-2'>Banner Type</h1>
                        <div className='w-[50%] flex justify-between'>
                            <div className='w-fit flex justify-start items-center gap-2' onClick={() => {
                                setBannerType('Normal')
                                setUpdateData({
                                    ...updateData,
                                    banner_type: 'normal',
                                    token: localStorage.getItem('admin-token')
                                })
                            }}>
                                <div className={`w-[12px] h-[12px] rounded-full ${bannerType === 'Normal' ? 'bg-gray-500' : 'border-2'}`}></div>
                                <h1 className='text-[14px]'>Normal</h1>
                            </div>
                            <div className='w-fit flex justify-start items-center gap-2' onClick={() => {
                                setBannerType('Offer')
                                setUpdateData({
                                    ...updateData,
                                    banner_type: 'offer',
                                    token: localStorage.getItem('admin-token')
                                })
                            }}>
                                <div className={`w-[12px] h-[12px] rounded-full ${bannerType === 'Offer' ? 'bg-gray-500' : 'border-2'}`}></div>
                                <h1 className='text-[14px]'>Offer</h1>
                            </div>
                        </div>
                    </div>
                    {
                        bannerType === 'Offer' ?
                            <div className='w-full pb-4'>
                                <h1 className='text-[15px] font-[500] py-2'>Offer Type</h1>
                                <div className='w-[50%] flex justify-between'>
                                    <div className='w-fit flex justify-start items-center gap-2' onClick={() => {
                                        setOfferType('Category')
                                        setUpdateData({
                                            ...updateData,
                                            offer_type: 'category'
                                        })
                                    }}>
                                        <div className={`w-[12px] h-[12px] rounded-full ${offerType === 'Category' ? 'bg-gray-500' : 'border-2'}`}></div>
                                        <h1 className='text-[14px]'>Category</h1>
                                    </div>
                                    <div className='w-fit flex justify-start items-center gap-2' onClick={() => {
                                        setOfferType('Product')
                                        setUpdateData({
                                            ...updateData,
                                            offer_type: 'products'
                                        })
                                    }}>
                                        <div className={`w-[12px] h-[12px] rounded-full ${offerType === 'Product' ? 'bg-gray-500' : 'border-2'}`}></div>
                                        <h1 className='text-[14px]'>Products</h1>
                                    </div>
                                </div>
                                <div className='w-full flex justify-between py-5'>
                                    {
                                        offerType === 'Category' ?
                                            <div className='relative w-full flex justify-start gap-2 items-start'>
                                                <div className='w-full max-w-[170px]'>
                                                    <span className='flex gap-2 border border-gray-400 max-w-[150px] rounded-[10px] p-2'><h1 className='text-[14px]'>All Categories</h1><img src={arrow_down} onClick={() => setCategoriesDropDown(!categoriesDropDown)} className='w-[15px] cursor-pointer' alt="" /></span>
                                                    <div className={`absolute top-[110%] w-[200px] z-[300] transition-all duration-300 bg-white opacity-100 shadow-md overflow-hidden ${categoriesDropDown ? 'h-[200px] ease-in overflow-y-scroll' : 'h-0 ease-out overflow-hidden'}`}>
                                                        {
                                                            dropDownData?.category_list?.map((data, i) => (
                                                                <h1 key={i} className='px-3 text-[13px] text-black py-2 border-b cursor-pointer hover:bg-gray-100' onClick={() => {
                                                                    setUpdateData({
                                                                        ...updateData,
                                                                        selected_category: data?.name,
                                                                        selected_id: data?.id
                                                                    })
                                                                    setCategoriesDropDown(false)
                                                                }}>{data?.name}</h1>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className='w-full'>
                                                    <h1 className='text-[14px] font-[500] pt-3 w-full'>{updateData?.selected_category}</h1>
                                                </div>
                                            </div>
                                            :
                                            offerType === 'Product' ?
                                                <div className='relative w-full flex justify-start gap-2 items-start'>
                                                    <div className='w-full max-w-[170px]'>
                                                        <span className='flex gap-2 border border-gray-400 max-w-[150px] rounded-[10px] p-2'><h1 className='text-[14px]'>All Products</h1><img src={arrow_down} onClick={() => setCategoriesDropDown(!categoriesDropDown)} className='w-[15px] cursor-pointer' alt="" /></span>
                                                        <div className={`absolute top-[110%] w-[200px] z-[300] transition-all duration-300 bg-white opacity-100 shadow-md overflow-hidden ${categoriesDropDown ? 'h-[200px] ease-in overflow-y-scroll' : 'h-0 ease-out overflow-hidden'}`}>
                                                            {
                                                                dropDownData?.product_list?.map((data, i) => (
                                                                    <h1 key={i} className='px-3 text-[13px] text-black py-2 border-b cursor-pointer hover:bg-gray-100' onClick={() => {
                                                                        setUpdateData({
                                                                            ...updateData,
                                                                            selected_product: data?.name,
                                                                            selected_id: data?.id
                                                                        })
                                                                        setCategoriesDropDown(false)
                                                                    }}>{data?.name}</h1>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='w-full'>
                                                        <h1 className='text-[14px] font-[500] pt-3 w-full '>{updateData?.selected_product}</h1>
                                                    </div>
                                                </div>
                                                :
                                                ''
                                    }
                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
                {
                    bannerType === 'Offer' ?
                        <div className='w-full flex justify-start items-center gap-2 pb-4'>
                            <h1 className='text-[15px] font-[500]'>Discount -</h1>
                            <input type="number" min={0} max={100} className='w-full max-w-[80px] border border-gray-400 rounded-[8px] text-[13px] px-2 py-1 outline-none' onChange={(e) => {
                                setUpdateData({
                                    ...updateData,
                                    discount: e?.target?.value
                                })
                            }} />
                            <h1 className='text-[15px]'>%</h1>
                        </div>
                        :
                        ''
                }
                <div className='w-full flex justify-between  py-4'>
                    <div className='w-full'>
                        <h1 className='text-[14px] font-[500]'>Mobile Image</h1>
                        <div
                            className="bg-gray-50 rounded-lg  aspect-square w-full max-w-[165px] border border-dashed border-gray-500"
                            onClick={() => {
                                // setActiveInputID(pageData?.images[0]?.img_id);
                            }}
                        >
                            <label
                                htmlFor="file_image"
                                className="relative w-full flex aspect-square"
                            >
                                <input
                                    type="file"
                                    name="file"
                                    className="opacity-0 h-full w-[98%] z-[200] "
                                    accept="image/*"
                                    onChange={(e) => {
                                        let formdata = new FormData()
                                        formdata.append('file', e?.target?.files[0])
                                        formdata.append('token', localStorage.getItem('admin-token'))
                                        axios.post(VITE_BASE_ADDRESS + 'cms/bannerImageUpload', formdata).then((response) => {
                                            console.log(response?.data)
                                            if (response?.data?.status) {
                                                setUpdateData({
                                                    ...updateData,
                                                    mobile_image: response?.data?.image
                                                })
                                            }
                                        })
                                    }}
                                />
                                <img
                                    id="file_image"
                                    src={VITE_BASE_ADDRESS + updateData?.mobile_image}
                                    className={`w-full absolute top-0 left-0 aspect-square z-[100] `}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-[14px] font-[500]'>Desktop Image</h1>
                        <div
                            className="bg-gray-50 rounded-lg aspect-video w-full max-w-[300px] border border-dashed border-gray-500"
                            onClick={() => {
                                // setActiveInputID(pageData?.images[0]?.img_id);
                            }}
                        >
                            <label
                                htmlFor="file_image"
                                className="relative w-full flex aspect-video"
                            >
                                <input
                                    type="file"
                                    name="file"
                                    className="opacity-0 h-full w-[98%] z-[200] "
                                    accept="image/*"
                                    onChange={(e) => {
                                        let formdata = new FormData()
                                        formdata.append('file', e?.target?.files[0])
                                        formdata.append('token', localStorage.getItem('admin-token'))
                                        axios.post(VITE_BASE_ADDRESS + 'cms/bannerImageUpload', formdata).then((response) => {
                                            console.log(response?.data)
                                            if (response?.data?.status) {
                                                setUpdateData({
                                                    ...updateData,
                                                    desktop_image: response?.data?.image
                                                })
                                            }
                                        })
                                    }}
                                />
                                <img
                                    id="file_image"
                                    src={VITE_BASE_ADDRESS + updateData?.desktop_image}
                                    className={`w-full absolute top-0 left-0 aspect-video z-[100] `}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5 flex justify-end">
                    <button className="px-4 py-[5px] rounded-[10px] bg-[#227638] text-white text-[14px] shadow-md active:scale-95 transition-all" onClick={() => {
                        axios.post(VITE_BASE_ADDRESS + 'cms/largeCarousalImagesUpload', updateData).then((response) => {
                            // console.log(response?.data)
                            if (response?.data?.status) {
                                toast.success(response?.data?.message, {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    // draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                })
                            }else {
                                toast.error(response?.data?.message, {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    // draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                })
                            }
                        })
                        setAddBannerPopUp(false)
                        // setUpdateData({

                        // })
                    }}>SUBMIT</button>
                </div>
            </div>

            {/* overlay */}
            <div className={`fixed bg-black opacity-20 inset-0 z-[180] ${addBannerPopUp ? 'block ease-in scale-100' : 'hidden ease-out'}`} onClick={() => setAddBannerPopUp(false)}>

            </div>

        </div>
    )
}

export default Banners