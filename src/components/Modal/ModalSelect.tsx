import axios from "axios";
import React, { useEffect, useState } from "react";
import { listTypeRealEstate } from "../../constants/MenuOptions";

const ModalSelect = ({
  option,
  openModal,
  onClose,
  setTextOption,
}: {
  option?: number;
  openModal: boolean;
  onClose: () => void;
  setTextOption: (e: string) => void;
}) => {
  const [provinces, setProvinces] = useState([]);

  if (!openModal) return null;

  const getProvinces = async () => {
    if (openModal && option === 2) {
      const res = await axios.get("https://provinces.open-api.vn/api/");
      setProvinces(res.data);
    }
  };

  const handleOptionChange = (e: string) => {
    setTextOption(e);
    setTimeout(() => onClose(), 500);
  };

  useEffect(() => {
    getProvinces();
  }, [openModal]);

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
              {option === 1 ? "CHỌN LOẠI BẤT ĐỘNG SẢN" : "CHỌN TỈNH THÀNH"}
            </p>
            <div className="h-[450px] overflow-y-auto">
              {option === 1 ? (
                <>
                  {listTypeRealEstate.map(
                    (item: { title: string; type: number }, index: number) => (
                      <div
                        key={index}
                        className="mx-6 border-b py-3 cursor-pointer hover:text-mblue duration-200 font-semibold"
                      >
                        <input
                          type="radio"
                          name="RealEstate"
                          id={item.title}
                          value={item.title}
                          className="h-4 w-4 relative top-0.5"
                          onChange={(e) => {
                            handleOptionChange(e.target.value);
                          }}
                        />
                        <label
                          className="ml-2 cursor-pointer w-full pr-[60%]"
                          htmlFor={item.title}
                        >
                          {item.title}
                        </label>
                      </div>
                    )
                  )}
                </>
              ) : (
                <>
                  {provinces?.map(
                    (item: { name: string; code: string }, index: number) => (
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
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSelect;
