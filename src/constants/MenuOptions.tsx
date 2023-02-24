import {
  HeartIcon,
  UserPlusIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import ModalSelect from "../components/Modal/ModalSelect";

export const menuHeader = [
  {
    title: "Yêu thích",
    icon: <HeartIcon className="h-5 w-5" />,
    path: "/liked",
  },
  {
    title: "Đăng nhập",
    icon: <UserPlusIcon className="h-5 w-5" />,
    path: "/login",
  },
  {
    title: "Đăng ký",
    icon: <ArrowTopRightOnSquareIcon className="h-5 w-5" />,
    path: "/register",
  },
];

export const menuBar = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Cho thuê phòng trọ",
    path: "/room-for-rent",
  },
  {
    title: "Nhà cho thuê",
    path: "/room-for-rent",
  },
  {
    title: "Cho thuê căn hộ",
    path: "/room-for-rent",
  },
  {
    title: "Cho thuê mặt bằng",
    path: "/room-for-rent",
  },
  {
    title: "Tìm người ở ghép",
    path: "/room-for-rent",
  },
  {
    title: "Blog",
    path: "/room-for-rent",
  },
  {
    title: "Hướng dẫn",
    path: "/room-for-rent",
  },
  {
    title: "Nạp tiền",
    path: "/room-for-rent",
  },
  {
    title: "Bảng giá",
    path: "/room-for-rent",
  },
];

export const listTypeRealEstate = [
  {
    title: "Phòng trọ, nhà  trọ",
    type: 1,
  },
  {
    title: "Nhà thuê, nhà nguyên căn",
    type: 2,
  },
  {
    title: "Cho thuê căn hộ",
    type: 3,
  },
  {
    title: "Cho thuê căn hộ dịch vụ",
    type: 4,
  },
  {
    title: "Cho thuê mặt bằng",
    type: 5,
  },
];

export const rangePrice = [
  { label: "Dưới 1 triệu đồng", range: { min: 0, max: 5 } },
  { label: "Từ 3 - 5 triệu đồng", range: { min: 20, max: 32 } },
  { label: "Từ 5-15 triệu đồng", range: { min: 32, max: 100 } },
  { label: "Trên 15 triệu đồng", range: { min: 100, max: 100 } },
];

export const rangeaAreage = [
  { label: "Dưới 20m2", range: { min: 0, max: 20 } },
  { label: "Từ 20m2 - 40m2", range: { min: 20, max: 40 } },
  { label: "40m2 - 60m2", range: { min: 40, max: 60 } },
  { label: "60m2-100m2", range: { min: 60, max: 100 } },
];
