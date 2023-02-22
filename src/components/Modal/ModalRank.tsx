import React, { useState } from "react";

const ModalRank = ({
  option,
  openModal,
  onClose,
  setTextOption,
}: {
  option?: number;
  openModal: boolean;
  onClose?: any;
  setTextOption: (e: string) => void;
}) => {
  const [provinces, setProvinces] = useState([]);
  const [price, setPrice] = useState<string>("15");

  if (!openModal) return null;

  const handleOptionChange = (e: any) => {
    setTextOption(e);
    setTimeout(() => onClose(), 500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed w-full h-full inset-0"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="fixed top-20 left-[420px] right-[420px] bg-white rounded-md"
      >
        <div className="">
          <p
            className="flex justify-end mr-5 mt-4 cursor-pointer text-mred font-semibold"
            onClick={onClose}
          >
            X
          </p>
          <div className="">
            <p className="text-center font-semibold border-b pb-4">
              {option === 3 ? "CHỌN GIÁ" : "CHỌN DIỆN TÍCH"}
            </p>
            <div className="h-[450px] overflow-y-auto">
              {option === 3 ? (
                <div className="w-[90%] mx-auto mt-4">
                  <div className="text-[#ff6600] font-semibold text-xl text-center">
                    Từ 0 - {price} triệu {price === "15" ? "+" : ""}
                  </div>
                  <input
                    className="w-full  mt-6 text-yellow-300"
                    min={0}
                    max={15}
                    step={0.2}
                    defaultValue={15}
                    type="range"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <p>1.000.000đ</p>
                    <p>15.000.000đ</p>
                  </div>
                </div>
              ) : (
                <>
                  {provinces?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="mx-6 border-b py-3 cursor-pointer hover:text-mblue duration-200 font-semibold"
                    >
                      <input
                        type="radio"
                        name="Provinces"
                        id={item.code}
                        value={item.name}
                        className="h-4 w-4 relative top-0.5"
                        onChange={(e) => {
                          handleOptionChange(e.target.value);
                        }}
                      />
                      <label
                        className="ml-2 cursor-pointer w-full pr-[60%]"
                        htmlFor={item.code}
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRank;
