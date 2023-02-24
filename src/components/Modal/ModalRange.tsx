import React, { useState, useEffect } from "react";
import { rangeaAreage, rangePrice } from "../../constants/MenuOptions";

const ModalRange = ({
  option,
  openModal,
  onClose,
  setTextOption,
}: {
  option?: number;
  openModal: boolean;
  onClose: () => void;
  setTextOption: (e: string, min: number, max: number) => void;
}) => {
  const [persent1, setPersent1] = useState<number>(0);
  const [persent2, setPersent2] = useState<number>(100);
  const [currentIndex, setCurrentIndex] = useState<number | null>();
  const [activedEl, setActivedEl] = useState<string>("");

  if (!openModal) return null;

  const handleClickTrack = (e: React.MouseEvent<HTMLElement>) => {
    const stackEl = document.getElementById("track");
    if (stackEl) {
      const stackRect = stackEl.getBoundingClientRect();
      let percent = Math.round(
        ((e.clientX - stackRect?.left) * 100) / stackRect.width
      );
      if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
        setPersent1(percent);
      } else {
        setPersent2(percent);
      }
      setCurrentIndex(null);
    }
  };

  const convert100toTarget = (percent: number) =>
    (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10;

  const handleSelectedRangePrice = (e: { min: number; max: number }) => {
    setPersent1(e.min);
    setPersent2(e.max);
  };

  const handleOptionChange = (e: React.MouseEvent<HTMLElement>) => {
    if (option === 3) {
      setTextOption(
        "",
        convert100toTarget(persent1),
        convert100toTarget(persent2)
      );
    } else {
      setTextOption("", persent1, persent2);
    }

    setTimeout(() => onClose(), 500);
  };

  useEffect(() => {
    const activedTrackEl = document.getElementById("track-active");
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

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
                  <div className="z-30 absolute  font-bold text-xl text-[#ff6600] left-0 right-0 text-center">
                    {`Từ ${
                      persent1 <= persent2
                        ? convert100toTarget(persent1)
                        : convert100toTarget(persent2)
                    } ${persent1 === 0 || persent2 === 0 ? "" : "triệu"} - ${
                      persent2 >= persent1
                        ? convert100toTarget(persent2)
                        : convert100toTarget(persent1)
                    } triệu${persent2 === 100 || persent1 === 100 ? "+" : ""}`}
                  </div>
                  <div className="pt-12">
                    <div className="flex flex-col items-center justify-center relative">
                      <div
                        id="track"
                        onClick={handleClickTrack}
                        className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full cursor-pointer"
                      ></div>
                      <div
                        id="track-active"
                        onClick={handleClickTrack}
                        className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 cursor-pointer rounded-full overflow-hidden"
                      ></div>
                      <input
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        max="100"
                        min="0"
                        step="1"
                        defaultValue={15}
                        value={persent1}
                        type="range"
                        onChange={(e) => {
                          setPersent1(parseInt(e.target.value));
                          activedEl && setActivedEl("");
                        }}
                      />
                      <input
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        max="100"
                        min="0"
                        step="1"
                        defaultValue={0}
                        type="range"
                        value={persent2}
                        onChange={(e) => {
                          setPersent2(parseInt(e.target.value));
                          activedEl && setActivedEl("");
                        }}
                      />
                      <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                        <span
                          className="cursor-pointer ml-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClickTrack(e);
                          }}
                        >
                          0
                        </span>
                        <span
                          className="mr-[-12px] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClickTrack(e);
                          }}
                        >
                          {"15 triệu+"}
                        </span>
                      </div>
                      <div className="absolute z-30 top-16 left-0 right-0">
                        <p className="font-semibold pb-6">Chọn nhanh</p>
                        <div className="flex gap-2">
                          {rangePrice.map((item, index) => (
                            <div
                              key={index}
                              className="cursor-pointer"
                              onClick={() => {
                                handleSelectedRangePrice(item.range);
                                setCurrentIndex(index);
                              }}
                            >
                              <span
                                className={`${
                                  currentIndex === index
                                    ? "bg-blue-500 px-3 py-2 text-white rounded-md"
                                    : "text-sm rounded-lg bg-gray-100 px-3 py-2"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[90%] mx-auto mt-4">
                  <div className="z-30 absolute  font-bold text-xl text-[#ff6600] left-0 right-0 text-center">
                    {`Từ ${persent1 <= persent2 ? persent1 : persent2} ${
                      persent1 === 0 || persent2 === 0 ? "" : "m2"
                    } - ${persent2 >= persent1 ? persent2 : persent1} m2${
                      persent2 === 100 || persent1 === 100 ? "+" : ""
                    }`}
                  </div>
                  <div className="pt-12">
                    <div className="flex flex-col items-center justify-center relative">
                      <div
                        id="track"
                        onClick={handleClickTrack}
                        className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full cursor-pointer"
                      ></div>
                      <div
                        id="track-active"
                        onClick={handleClickTrack}
                        className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 cursor-pointer rounded-full overflow-hidden"
                      ></div>
                      <input
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        max="100"
                        min="0"
                        step="1"
                        defaultValue={0}
                        value={persent1}
                        type="range"
                        onChange={(e) => {
                          setPersent1(parseInt(e.target.value));
                          activedEl && setActivedEl("");
                        }}
                      />
                      <input
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        max="100"
                        min="0"
                        step="1"
                        type="range"
                        value={persent2}
                        defaultValue={100}
                        onChange={(e) => {
                          setPersent2(parseInt(e.target.value));
                          activedEl && setActivedEl("");
                        }}
                      />
                      <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                        <span
                          className="cursor-pointer ml-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClickTrack(e);
                          }}
                        >
                          0
                        </span>
                        <span
                          className="mr-[-12px] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClickTrack(e);
                          }}
                        >
                          {"100m2+"}
                        </span>
                      </div>
                      <div className="absolute z-30 top-16 left-0 right-0">
                        <p className="font-semibold pb-6">Chọn nhanh</p>
                        <div className="flex gap-2">
                          {rangeaAreage.map((item, index) => (
                            <div
                              key={index}
                              className="cursor-pointer"
                              onClick={() => {
                                handleSelectedRangePrice(item.range);
                                setCurrentIndex(index);
                              }}
                            >
                              <span
                                className={`${
                                  currentIndex === index
                                    ? "bg-blue-500 px-3 py-2 text-white rounded-md"
                                    : "text-sm rounded-lg bg-gray-100 px-3 py-2"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          onClick={handleOptionChange}
          className="bg-[#ffa500] font-bold rounded-b py-3 text-center cursor-pointer"
        >
          Áp dụng
        </div>
      </div>
    </div>
  );
};

export default ModalRange;
