import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  XMarkIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

import Button from "../Button/Button";
import ModalSelect from "../Modal/ModalSelect";
import ModalRange from "../Modal/ModalRange";

const MenuSearch = () => {
  const [modalSelect, setModalSelect] = useState<boolean>(false);

  const [option, setOption] = useState<number>(0);
  const [price, setPrice] = useState<number>();
  const [acreage, setaAreage] = useState<string>();
  const [textRealEstate, setTextRealEstate] = useState<string>();
  const [textLocation, setTextLocation] = useState<string>();
  const [textRangePrice, setTextRangePrice] = useState<string>();
  const [textRangeAcreage, setTextRangeAcreage] = useState<string>();

  const textOption = (e: string, min?: number, max?: number) => {
    switch (option) {
      case 1:
        setTextRealEstate(e);
        break;
      case 2:
        setTextLocation(e);
        break;
      case 3:
        const textPrice = `${min} - ${max} triệu`;
        setTextRangePrice(textPrice);
        break;
      case 4:
        const textAcreage = `${min} - ${max}m2`;
        setTextRangeAcreage(textAcreage);
    }
  };

  return (
    <div className="bg-myellow rounded-md m-2.5">
      <div className="grid grid-cols-10 gap-2 p-2 ">
        <div className="grid grid-cols-10 items-center gap-1 col-span-2 bg-white pl-1 pr-2 cursor-pointer rounded-md">
          <div
            onClick={() => {
              setOption(1);
              setModalSelect(!modalSelect);
            }}
            className="flex col-span-9 gap-1 items-center"
          >
            <BuildingOffice2Icon className="h-4 w-4 text-gray-400" />
            {textRealEstate ? (
              <h4 className="text-sm font-semibold truncate">
                {textRealEstate}
              </h4>
            ) : (
              <h4 className="text-gray-400 text-sm">Tất cả</h4>
            )}
          </div>
          <div className="col-span-1 flex justify-end">
            {textRealEstate ? (
              <XMarkIcon
                onClick={() => setTextRealEstate(undefined)}
                className="h-3 w-3 mt-1 text-black"
              />
            ) : (
              <ChevronRightIcon
                onClick={() => setModalSelect(!modalSelect)}
                className="h-3 w-3 mt-1 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-10 items-center gap-1 col-span-2 bg-white pl-1 pr-2 cursor-pointer rounded-md">
          <div
            onClick={() => {
              setOption(2);
              setModalSelect(!modalSelect);
            }}
            className="flex col-span-9 gap-1 items-center"
          >
            <MapPinIcon className="h-4 w-4 text-gray-400" />
            {textLocation ? (
              <h4 className="text-sm font-semibold truncate">{textLocation}</h4>
            ) : (
              <h4 className="text-gray-400 text-sm">Toàn quốc</h4>
            )}
          </div>
          <div className="col-span-1 flex justify-end">
            {textLocation ? (
              <XMarkIcon
                onClick={() => setTextLocation(undefined)}
                className="h-3 w-3 mt-1 text-black"
              />
            ) : (
              <ChevronRightIcon
                onClick={() => setModalSelect(!modalSelect)}
                className="h-3 w-3 mt-1 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-10 items-center gap-1 col-span-2 bg-white pl-1 pr-2 cursor-pointer rounded-md">
          <div
            onClick={() => {
              setOption(3);
              setModalSelect(!modalSelect);
            }}
            className="flex col-span-9 gap-1 items-center"
          >
            <CurrencyDollarIcon className="h-4 w-4 text-gray-400" />
            {textRangePrice ? (
              <h4 className="text-sm font-semibold truncate">
                {textRangePrice}
              </h4>
            ) : (
              <h4 className="text-gray-400 text-sm">Chọn giá</h4>
            )}
          </div>
          <div className="col-span-1 flex justify-end">
            {textRangePrice ? (
              <XMarkIcon
                onClick={() => setTextRangePrice(undefined)}
                className="h-3 w-3 mt-1 text-black"
              />
            ) : (
              <ChevronRightIcon
                onClick={() => setModalSelect(!modalSelect)}
                className="h-3 w-3 mt-1 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-10 items-center gap-1 col-span-2 bg-white pl-1 pr-2 cursor-pointer rounded-md">
          <div
            onClick={() => {
              setOption(4);
              setModalSelect(!modalSelect);
            }}
            className="flex col-span-9 gap-1 items-center"
          >
            <AdjustmentsHorizontalIcon className="h-4 w-4 text-gray-400" />
            {textRangeAcreage ? (
              <h4 className="text-sm font-semibold truncate">
                {textRangeAcreage}
              </h4>
            ) : (
              <h4 className="text-gray-400 text-sm">Chọn diện tích</h4>
            )}
          </div>
          <div className="col-span-1 flex justify-end">
            {textRangeAcreage ? (
              <XMarkIcon
                onClick={() => setTextRangeAcreage(undefined)}
                className="h-3 w-3 mt-1 text-black"
              />
            ) : (
              <ChevronRightIcon
                onClick={() => setModalSelect(!modalSelect)}
                className="h-3 w-3 mt-1 text-gray-400"
              />
            )}
          </div>
        </div>
        <Button
          style="bg-mblue text-white gap-1 w-full col-span-2 py-1.5 hover:bg-[#1097f7] active:bg-[#0066af]"
          icon={<MagnifyingGlassIcon className="h-5 w-5 mt-1" />}
          title="Tìm kiếm"
        />
      </div>
      {modalSelect && option <= 2 && (
        <ModalSelect
          option={option}
          openModal={modalSelect}
          onClose={() => setModalSelect(false)}
          setTextOption={textOption}
        />
      )}
      {modalSelect && option > 2 && (
        <ModalRange
          option={option}
          openModal={modalSelect}
          onClose={() => setModalSelect(false)}
          setTextOption={textOption}
        />
      )}
    </div>
  );
};

export default MenuSearch;
