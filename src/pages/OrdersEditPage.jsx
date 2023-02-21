import React, { useEffect, useState } from 'react'
import invoice_icon_static from "../assets/img/sidebar/invoice_icon_static.svg";
import delete_icon from "../assets/icons/delete_icon.svg";
import item from '../assets/img/mock-images/about-us.png'

const OrdersEditPage = () => {

  const [mainDropDown, setMainDropdown] = useState(false);

  const [orderData, setOrderData] = useState({});

  const submitPageData = () => {
    console.log('')
  }

  useEffect(() => {
    setOrderData({
      order_id: '2186',
      status: 'Dispatched',
      order_date: '06.22.2019',
      order_time: '01:36pm',
      items: [
        { id: '8', image: item, title: 'Multigrain Dosa Mix', unit_price: '100', size: '250g', quantity: '1', quantity_price: '100', category: 'Dosa Mix', },
        { id: '12', image: item, title: 'Finger Millet Noodles', unit_price: '100', size: '200g', quantity: '2', quantity_price: '200', category: 'Noodle & Pasta', },
        { id: '3', image: item, title: 'Desi Chai Masala', unit_price: '100', size: '50g', quantity: '1', quantity_price: '100', category: 'Dosa Mix', },
      ],
      payment_info: {
        sub_total: '400',
        shipping: '50',
        tax: '20',
        grand_total: '470'
      },
      shipping_info: {
        address_line_1: '76, 7th B cross',
        address_line_2: 'Koramangla 4B block, Koramangla',
        landmark: 'Near BDA complex',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
      },
      billing_info: {
        address_line_1: '48-56, 3rd Cross Rd',
        address_line_2: 'Tavarekere, Brindavan Nagar, S.G. Palya',
        landmark: 'Near Juice point',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
      },
      contact_info: {
        first_name: 'Vivek',
        last_name: 'Khanal',
        email: 'vivek@khanal.com',
        phone_number: '7789445698',
      },
      status_list: [
        {status_name: 'Delivered', status_color: '#00ac69'},
        {status_name: 'Dispatched', status_color: '#303030'},
        {status_name: 'Canceled', status_color: '#FF0000'},
        {status_name: 'Returned', status_color: '#e99f15'},
      ],
    })
  }, [])


  return (
    <div className='w-full p-5 pt-0'>
      <div className='w-[90%] mx-auto pt-5'>

        {/* header */}
        <div className="flex justify-between items-start md:items-center sticky top-0 py-5">
          <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-5'>
            <h1 className="text-xl ">
              Order{" "}
              <span className="text-[#208a48] font-medium ml-1">
                #{orderData?.order_id}
              </span>
            </h1>
            <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-5'>
              <div>
                <h1 className='text-[14px] bg-opacity-5 py-[5px] px-2 w-full text-center bg-[white] text-[#00ac69] rounded-lg border '>Delivered</h1>
              </div>
              <div className='w-[1px] h-[15px] bg-gray-400 hidden md:block'></div>
              <div className='flex items-end gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h1 className='text-[13px]'>06.22.2019 at 01:36pm</h1></div>
            </div>
          </div>

          <div className='flex justify-center items-center gap-3 relative'>
            <button className="px-4 text-[19px] py-[5px] rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all active:scale-95 bg-[#208a48] text-white" onClick={() => setMainDropdown(!mainDropDown)}>
              ⋮
            </button>

            {/* delete popup */}
            <div className={`w-full z-[100] absolute top-[100%] right-[82%] overflow-hidden p-0 transition-all duration-200 rounded-xl outline-none bg-white ${mainDropDown ? 'max-h-[400px] ease-in shadow-xl' : 'max-h-0 ease-out'}`}>
              <div className='text-[14px] border-b p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all flex justify-start items-center gap-5 cursor-pointer' onClick={() => setMainDropdown(false)}>
                <img src={invoice_icon_static} className=' w-[16px]' alt="" />
                <h1 className=' leading-none'>View invoice</h1>
              </div>
              <div className='text-[14px] p-3 pl-[0.9rem] text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all flex justify-start items-center gap-5 cursor-pointer' onClick={() => setMainDropdown(false)}>
                <img src={delete_icon} className=' w-[14px]' alt="" />
                <h1 className=' leading-none'>Delete</h1>
              </div>
            </div>
            <div className={`fixed bg-black opacity-30 inset-0 z-[80] transition-all duration-200 ${mainDropDown ? 'block' : 'hidden'}`} onClick={() => setMainDropdown(false)}>

            </div>

            <button className="px-5 py-2 rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all active:scale-95 bg-[#208a48] text-white" onClick={submitPageData}>
              SAVE CHANGES
            </button>
          </div>
        </div>

        {/* main flex */}
        <div className='flex flex-col md:flex-row mt-10 gap-5 md:gap-8'>


          {/* left flex */}
          <div className='w-full md:w-[65%] flex flex-col gap-5 md:gap-8'>

            {/* items */}
            <div className='w-full bg-white shadow-md border rounded-[10px] p-4'>
              <div className='w-full pt-5'>
                <div className=' grid grid-cols-[45%_1fr_1fr_1fr] border-b pb-2 justify-center items-center'>
                  <div className='flex justify-start items-center'>
                    <h1 className='text-[12px] pl-5'>Products</h1>
                  </div>
                  <div className='flex justify-end items-center'>
                    <h1 className='text-[12px]'>Unit Price</h1>
                  </div>
                  <div className='flex justify-end items-center'>
                    <h1 className='text-[12px]'>Quantity</h1>
                  </div>
                  <div className='flex justify-end items-center'>
                    <h1 className='text-[12px]'>Item total</h1>
                  </div>
                </div>
                <div className='w-full max-h-[400px] overflow-y-scroll'>
                  {
                    orderData?.items?.map((data, i) => {
                      return (
                        <div className='w-full bg-white grid grid-cols-[45%_1fr_1fr_1fr] justify-center items-center py-2' key={i}>
                          <div className='flex justify-start items-center gap-3'>
                            <div className='w-fit'>
                              <img src={data?.image} className='w-[65px]' alt="" />
                            </div>
                            <div className='flex flex-col justify-center items-start gap'>
                              <h1 className='text-[14px] font-[500]'>{data?.title}</h1>
                              <h1 className='text-[12px]'>{data?.category}</h1>
                              <h1 className='text-[12px]'>{data?.size}</h1>
                            </div>
                          </div>
                          <div className='flex justify-end items-center '>
                            <h1 className='text-[14px]'>Rs {data?.unit_price}</h1>
                          </div>
                          <div className='flex justify-end items-center'>
                            <h1 className='text-[14px] pl-5'>{data?.quantity}</h1>
                          </div>
                          <div className='flex justify-end items-center'>
                            <h1 className='text-[14px]'>Rs {data?.quantity_price}</h1>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            {/* payment summary */}
            <div className='w-full bg-white shadow-md rounded-[10px] p-4'>
              <div className='w-full'>
                <h1 className='text-[16px] font-[500]'>Payment Summary</h1>
              </div>
              <div className='w-full pt-5'>

                {/* details */}
                <div className=' flex flex-col'>
                  <div className='flex justify-between w-full'>
                    <h1 className='text-[13px]'>Subtotal</h1>
                    <h1 className='text-[13px]'>{orderData?.payment_info?.shipping}</h1>
                  </div>
                  <div className='flex justify-between w-full'>
                    <h1 className='text-[13px]'>Delivery Charges</h1>
                    <h1 className='text-[13px]'>Rs 86</h1>
                  </div>
                  <div className='flex justify-between w-full pb-2'>
                    <h1 className='text-[13px]'>Tax</h1>
                    <h1 className='text-[13px]'>Rs 100</h1>
                  </div>
                  <div className='flex justify-between w-full pt-2 border-t'>
                    <h1 className='text-[14px] font-[600]'>Order Total</h1>
                    <h1 className='text-[14px] font-[600]'>Rs 456</h1>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* right flex */}
          <div className='w-full md:w-[35%]'>

            <div className='w-full bg-white shadow-md border rounded-[10px] p-4'>
              <div className='w-full mb-5'>
                <h1 className='text-[16px] font-[500]'>Customer Details</h1>
              </div>
              <div className='w-full'>
                <h1 className='text-[15px]'>{orderData?.contact_info?.first_name} {orderData?.contact_info?.last_name}</h1>
              </div>
              <div className='w-full border-b border-gray-300 pt-1 pb-4'>
                <h1 className='text-[13px]'>{orderData?.contact_info?.email}</h1>
                <h1 className='text-[13px]'>{orderData?.contact_info?.phone_number}</h1>
              </div>
              <div className='w-full border-b border-gray-300 py-4'>
                <div className='w-full'>
                  <h1 className='text-[16px] font-[500] pb-5'>Shipping Address</h1>
                </div>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.address_line_1}</h1>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.address_line_2}</h1>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.landmark}</h1>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.city}</h1>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.state}</h1>
                <h1 className='text-[13px]'>{orderData?.shipping_info?.country}</h1>
              </div>
              <div className='w-full border-b border-gray-300 py-4'>
                <div className='w-full'>
                  <h1 className='text-[16px] font-[500] pb-5'>Billing Address</h1>
                </div>
                <h1 className='text-[13px]'>{orderData?.billing_info?.address_line_1}</h1>
                <h1 className='text-[13px]'>{orderData?.billing_info?.address_line_2}</h1>
                <h1 className='text-[13px]'>{orderData?.billing_info?.landmark}</h1>
                <h1 className='text-[13px]'>{orderData?.billing_info?.city}</h1>
                <h1 className='text-[13px]'>{orderData?.billing_info?.state}</h1>
                <h1 className='text-[13px]'>{orderData?.billing_info?.country}</h1>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default OrdersEditPage