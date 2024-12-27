import {
  categoryTypes,
  productCardType,
  topSellingProducts,
  voucherTypes,
} from "@muc/types";

export const PRODUCT_CARD: productCardType[] = [
  {
    id: 1,
    poster: "/assets/images/cardImg1.svg",
    title: "HAVIT HV GAMEPAD",
    newPrice: 120,
    oldPrice: 160,
    ratingValue: 4.5,
  },
  {
    id: 2,
    poster: "/assets/images/cardImg2.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    ratingValue: 3.6,
  },
  {
    id: 3,
    poster: "/assets/images/cardImg3.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    ratingValue: 5,
  },
  {
    id: 4,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
  {
    id: 5,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
  {
    id: 6,
    poster: "/assets/images/cardImg4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
  {
    id: 7,
    poster: "/assets/images/cardImg1.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
  {
    id: 8,
    poster: "/assets/images/cardImg2.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    ratingValue: 3.6,
  },
];

export const PRODUCT_CATEGORIES: categoryTypes[] = [
  {
    img: "/assets/icons/CellPhone.svg",
    title: "Phone",
  },
  {
    img: "/assets/icons/Computer.svg",
    title: "Computers",
  },
  {
    img: "/assets/icons/SmartWatch.svg",
    title: "SmartWatch",
  },
  {
    img: "/assets/icons/Camera.svg",
    title: "Camera",
  },
  {
    img: "/assets/icons/Headphone.svg",
    title: "HeadPhones",
  },
  {
    img: "/assets/icons/Gamepad.svg",
    title: "Gaming",
  },
];

export const TOP_SELLING_PRODUCTS: topSellingProducts[] = [
  {
    id: 1,
    poster: "/assets/images/topselling1.svg",
    title: "HAVIT HV GAMEPAD",
    newPrice: 120,
    oldPrice: 160,
    ratingValue: 4.5,
  },
  {
    id: 2,
    poster: "/assets/images/topselling2.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    ratingValue: 3.6,
  },
  {
    id: 3,
    poster: "/assets/images/topselling3.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    ratingValue: 5,
  },
  {
    id: 4,
    poster: "/assets/images/topselling4.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
];

export const EXPLORE_OUR_PRODUCTS: productCardType[] = [
  {
    id: 1,
    poster: "/assets/images/explore1img.svg",
    title: "HAVIT HV GAMEPAD",
    newPrice: 120,
    oldPrice: 160,
    ratingValue: 4.5,
  },
  {
    id: 2,
    poster: "/assets/images/explore2img.svg",
    title: "AK WIRED KEYBOARD",
    newPrice: 960,
    oldPrice: 1000,
    ratingValue: 3.6,
  },
  {
    id: 3,
    poster: "/assets/images/explore3img.svg",
    title: "GAMING MANITOR",
    newPrice: 1150,
    oldPrice: 1440,
    ratingValue: 5,
  },
  {
    id: 4,
    poster: "/assets/images/explore4img.svg",
    title: "COMFORT CHAIR",
    newPrice: 375,
    oldPrice: 540,
    ratingValue: 3.4,
  },
];

export const OFFER_VOUCHER: voucherTypes[] = [
  {
    id: 1,
    categories: "Mobile",
    categoryDescription: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    poster: "/assets/images/offerImg1.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 2,
    categories: "GamePad",
    categoryDescription: "Gamepad 14 Series MAC",
    title: "Up to 20% off Voucher",
    poster: "/assets/images/cardImg1.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 3,
    categories: "furniture",
    categoryDescription: "Best Furniture Series",
    title: "Up to 10% off Voucher",
    poster: "/assets/images/explore3img.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 4,
    categories: "shopping",
    categoryDescription: "Online Shopping Mart",
    title: "Up to 30% off Voucher",
    poster: "/assets/images/explore2img.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
  {
    id: 5,
    categories: "keyboard",
    categoryDescription: "Lighting Gaming Keyboard",
    title: "Up to 50% off Voucher",
    poster: "/assets/images/cardImg2.svg",
    icons: "/assets/icons/apple-icon.svg",
  },
];
