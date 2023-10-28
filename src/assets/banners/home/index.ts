import { HomeImage } from "@/Services/banners";

const HomePromBanner = [
  require("./promotion/4.jpg"),
  require("./promotion/1.png"),
  require("./promotion/2.png"),
  require("./promotion/3.png"),
]

const HomeTrend = [
  require("./trend/4.jpg"),
  require("./trend/1.jpg"),
  require("./trend/2.jpg"),
  require("./trend/3.jpg"),
  require("./trend/4.jpg"),
  require("./trend/5.jpg"),
  require("./trend/6.jpg"),
  require("./trend/7.jpg"),
]

const HomeBanner = {
  banner: require("./1.jpg") as string,
  promotion: HomePromBanner,
  trend: HomeTrend,
}

export default HomeBanner as HomeImage;