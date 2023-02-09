import React, { useEffect, useState } from "react";

const ProductsEditPage = () => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    setPageData({
      images: ["", "", "", ""],
      name: "Angaya Podi",
      id: 554254,
      status: "In Stock",
      category: "Spices",
      hsn: 354564646464,
      variants_data: [
        {
          variant_name: "100g",
          price: 50,
          quantity: 80,
          sku: 115245245465,
        },

        {
          variant_name: "200g",
          price: 100,
          quantity: 50,
          sku: 115245245466,
        },

        {
          variant_name: "250g",
          price: 150,
          quantity: 120,
          sku: 115245245467,
        },
        {
          variant_name: "100g",
          price: 50,
          quantity: 80,
          sku: 115245245465,
        },

        {
          variant_name: "200g",
          price: 100,
          quantity: 50,
          sku: 115245245466,
        },

        {
          variant_name: "250g",
          price: 150,
          quantity: 120,
          sku: 115245245467,
        },
      ],
      sibling_product: {
        product_id: 12245,
        product_name: "Multigrain Dosa Mix",
        img: "",
        category: "Flour Packs",
      },

      nutritional_info: [
        {
          n_name: "Total Fat",
          n_value: 5,
          n_unit: "g",
        },
        {
          n_name: "Protien",
          n_value: 10,
          n_unit: "g",
        },
        {
          n_name: "Carbohydrate",
          n_value: 16,
          n_unit: "g",
        },
        {
          n_name: "Energy",
          n_value: 8,
          n_unit: "kcal",
        },
      ],

      meta_fields: [
        {
          m_name: "Label 1",
          m_value: "Lorem Ipsum1",
        },
        {
          m_name: "Label 2",
          m_value: "Lorem Ipsum2",
        },
        {
          m_name: "Label 3",
          m_value: "Lorem Ipsum3",
        },
        {
          m_name: "Label 4",
          m_value: "Lorem Ipsum4",
        },
        {
          m_name: "Label 5",
          m_value: "Lorem Ipsum5",
        },
      ],

      reviews: [
        {
          img: "",
          f_name: "Ayush",
          l_name: "Koul",
          comment: "Lorem ipsum dolor sit",
        },
        {
          img: "",
          f_name: "Utkarsh",
          l_name: "Koul",
          comment: "Lorem ipsum dolor sit",
        },
      ],
    });
  }, []);

  return (
    <div className="p-5">
      {/* all content */}
      <div>
        {/* header */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-xl ">
              Product{" "}
              <span className="text-[#208a48] font-medium ml-1">
                #{pageData?.id}
              </span>
            </h1>
          </div>

          <div>
            <button className="px-5 py-2 rounded-xl bg-opacity-90 hover:bg-opacity-100 transition-all active:scale-95 bg-[#208a48] text-white">
              SAVE CHANGES
            </button>
          </div>
        </div>
        {/* image container */}
        <div className="flex gap-5">
          <div className="bg-gray-50 rounded-lg  aspect-square w-full max-w-[400px] border border-dashed border-gray-500">
            {/* image 1 */}
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-gray-50 rounded-lg  aspect-square w-[100px] border border-dashed border-gray-500"></div>

            <div className="bg-gray-50 rounded-lg  aspect-square w-[100px] border border-dashed border-gray-500"></div>

            <div className="bg-gray-50 rounded-lg  aspect-square w-[100px] border border-dashed border-gray-500"></div>
          </div>
        </div>

        {/* Name and Status */}

        <div className="mt-10 grid grid-cols-2 gap-5">
          {/* Name */}
          <div className="">
            <label className="text-gray-700 text-sm">Name</label>
            <input
              type="text"
              className="p-2 rounded-md block bg-gray-50  border-gray-400 border w-full outline-none"
              value={pageData?.name}
              onChange={(e) =>
                setPageData({ ...pageData, name: e?.target?.value })
              }
            />
          </div>

          <div className="">
            <label className="text-gray-700 text-sm">Name</label>
            <input
              type="text"
              className="p-2 rounded-md block bg-gray-50  border-gray-400 border w-full outline-none"
              //   value={props?.apiData?.name}
              //   onChange={(e) =>
              //     props?.setApiData({ ...props?.apiData, name: e?.target?.value })
              //   }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsEditPage;
