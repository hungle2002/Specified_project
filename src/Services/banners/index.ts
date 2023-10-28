import { ImageSourcePropType } from "react-native";

export interface BannerModel {
  title?: string,
  body?: string,
  imgUrl: ImageSourcePropType
}

export interface ProductBannerModel {
  imgUrl: ImageSourcePropType,
  typeSpecial?: number,
  price?: number,
}

export interface HomeImage {
  banner: ImageSourcePropType,
  promotion: ImageSourcePropType[],
  trend: ImageSourcePropType[],
}