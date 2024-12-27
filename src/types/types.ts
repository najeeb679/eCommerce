export type productCardType = {
  id: number;
  poster: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  ratingValue: number;
};

export type categoryTypes={
  img: string;
  title: string;
}

export type topSellingProducts={
  id: number;
  poster: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  ratingValue: number;
}

export type voucherTypes={
  id: number;
    categories: string;
    categoryDescription: string;
    title: string;
    poster: string;
    icons: string;
}