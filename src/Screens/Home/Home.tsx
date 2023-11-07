import { i18n, LocalizationKey } from '@/Localization';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useAppSelector } from '@/Hooks';
import { ThemeColors, FontSize, ValidThemeColors } from '@/Theme';
import { HomeBanner } from '@/assets/banners';
import CarouselCards from '@/Components/common/carousel';
import ProductCarousel from '@/Components/Home/productCarousel';
import { BannerModel, ProductBannerModel } from '@/Services/banners';
import SafeViewAndroid from '@/Components/common/SafeAreaViewAndroid';
import { RootScreens, TabScreens } from '..';

let theme: ValidThemeColors = 'default';
interface IHomeProps {
  onNavigate: (string: TabScreens | RootScreens) => void;
}

const promotionData: BannerModel[] = HomeBanner?.promotion.map((e) => ({ imgUrl: e }));
const trendData: ProductBannerModel[] = HomeBanner?.trend.map((e, i) => ({ imgUrl: e, price: 65000 * (i + 1), typeSpecial: i%3 }));

export const Home = ( props: IHomeProps ) => {
  theme = useAppSelector((state) => state.theme.theme);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View className="h-48 w-full z-10 absolute top-0 left-0">
          <Image className="h-full w-full object-fill" source={HomeBanner.banner} />
        </View>
        <ScrollView 
          contentContainerStyle={{
            paddingTop: 182,
          }}
          className="w-full bg-transparent z-20"
          >
          <View className="px-3 rounded-t-xl pt-2" style={styles.contentWrapper}>
            <View>
              <Text style={styles.header}>{i18n.t(LocalizationKey.HOME_BIG_DEAL)}</Text>
              <Text style={styles.headerBody}>{i18n.t(LocalizationKey.HOME_PROMOTE_TEXT)}</Text>
              <CarouselCards data={promotionData} />
            </View>
            <View>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>{i18n.t(LocalizationKey.HOME_TREND)}</Text>
                <TouchableOpacity onPress={() => props.onNavigate( RootScreens.CART )} >
                  <Text style={styles.viewMoreText} >{i18n.t(LocalizationKey.VIEW_MORE)}</Text>
                </TouchableOpacity>
              </View>
              <ProductCarousel data={trendData} />
            </View>
            <View>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>{i18n.t(LocalizationKey.HOME_NEW)}</Text>
                <TouchableOpacity onPress={() => props.onNavigate( RootScreens.CART )} >
                  <Text style={styles.viewMoreText} >{i18n.t(LocalizationKey.VIEW_MORE)}</Text>
                </TouchableOpacity>
              </View>
              <ProductCarousel data={trendData} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    color: ThemeColors[theme].PRIMARY,
    fontSize: FontSize.LARGE,
    fontWeight: 'bold',
  },
  viewMoreText: {
    fontSize: FontSize.REGULAR,
    marginRight: 5,
    textDecorationLine: 'underline',
    color: ThemeColors[theme].PRIMARY,
  },
  headerBody: {
    color: ThemeColors[theme].SUBTEXT,
    fontSize: FontSize.SMALL,
    fontWeight: '300',
    opacity: 0.8,
  },
  contentWrapper:{
    backgroundColor: ThemeColors[theme].BACKGROUND,
  }
});
