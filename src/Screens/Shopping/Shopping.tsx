import { i18n, LocalizationKey } from "@/Localization";
import React, {useState,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, VirtualizedList, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAppDispatch, useAppSelector } from '@/Hooks'
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import SafeViewAndroid from '@/Components/common/SafeAreaViewAndroid';
import { Product } from "@/Services";
import { RootScreens, TabScreens } from '..';
import CustomSearchBar from "@/Components/common/SearchBar";
import ProductListRow from "@/Components/Shopping/ProductListRow";
//
//
import { MaterialCommunityIcons } from '@expo/vector-icons';

let theme: ValidThemeColors = 'default';

const products: Product[] = [
  {
    name: 'Áo Sơ Mi Cổ Bẻ Tay Dài Sợi Tự Nhiên',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/so-mi-nam-y2010-td-l01-0019680/86ac1d0f-c0ac-0100-d67e-001a1e90f870.jpg?w=540&h=756',
  },
  {
    name: 'Quần Dài Lưng Thun Ống Đứng Vải Thun',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/quan-jogger-premium-12-0022520/73473c9a-14c9-ca01-a7b5-001aa1e8bfe5.jpg?w=540&h=756',
  },
  {
    name: 'PKTT Ví Da Tài Lộc',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/pktt-vi-tai-loc-01-0022432/2da29246-d993-3500-f987-001aa763512c.jpg?w=540&h=756',
  },
  {
    name: 'PKTT Dây Nịt Da Nguyên Bản',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/pktt-day-nit-nguyen-ban-m20-0022734/b4c019e1-bee9-0100-5010-001aa9a02ad3.jpg?w=540&h=756',
  },
  {
    name: 'Áo Khoác Có Nón Vải Dù',
    price: 195000,
    normalPrice: 0,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/ao-khoac-classic-di-san-darkness-hunters-ver1-0022325/2ea7240a-c318-0400-efe9-001a75b8a6b9.jpg?w=540&h=756',
  },
  {
    name: 'Áo Sơ Mi Cổ Bẻ Tay Ngắn Vải',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-speed-11-0022352/f8cde861-3bd8-2200-4038-001a9df5ed17.jpg?w=540&h=756',
  },
  {
    name: 'Áo Sơ Mi Cổ Bẻ Tay Dài Sợi Tự Nhên',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/so-mi-nam-y2010-td-l01-0019680/86ac1d0f-c0ac-0100-d67e-001a1e90f870.jpg?w=540&h=756',
  },
  {
    name: 'Quần đùi',
    price: 195000,
    normalPrice: 0,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/quan-short-the-days-eye-25-0022074/01d03623-3707-6501-b854-001a44490e9e.jpg?w=540&h=756',
  },
  {
    name: 'Quần lửng',
    price: 195000,
    normalPrice: 600000,
    rating: 4.5,
    image: 'https://cdn2.yame.vn/pimg/quan-short-the-days-eye-25-0022076/4e40f24b-30a9-8801-d3d8-001a4449ea7e.jpg?w=540&h=756',
  },
];

export interface IShoppingProps {
  onNavigate: (string: TabScreens | RootScreens) => void;
  onProductClick: (product: Product)=>void;
}

export const Shopping = (props: IShoppingProps) => {  
  // const { data, isLoading } = props;

  const theme = useAppSelector( state => state.theme.theme )

  const getItem = (data:Product[], index: number)=>{
    return{
      itemLeft: data[2*index],
      itemRight: ((2*index+1)>=data.length) ? null:data[2*index+1],
    };
  };
  const getItemCount =() => Math.ceil(products.length / 2);

  // const backToTop = () => {
  //   listRef?.current?.scrollToOffset({ offset: 0, animated: true });
  // };
  
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <View style={styles.toolbar}>
              <CustomSearchBar onOpenCart={()=>{props.onNavigate(RootScreens.CART)}}/>
              <View>
                <View className="flex-row items-center gap-[10px] ">
                  <TouchableOpacity className="justify-center items-center" style={styles.button} onPress={()=>{console.log("Sort Pop up");}}>
                    <MaterialCommunityIcons name="sort" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].BUTTON_SECONDARY} />
                  </TouchableOpacity>
                  <Text className="flex-1"style={styles.buttonTextSecondary}> {i18n.t(LocalizationKey.RECENTLY_RELEASED)} </Text>
                  <View className="h-full border-[0.2px]" style={styles.line}/>
                    <TouchableOpacity className="flex-row justify-center items-center" style={styles.button} onPress={()=>{console.log("Sort Pop up");}}>
                      <MaterialCommunityIcons name="view-grid-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].BUTTON_SECONDARY} />
                      <Text className="pl-1" style={styles.buttonTextPrimary}>{i18n.t(LocalizationKey.ALL)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row justify-center items-center" style={styles.buttonSecondary} onPress={()=>{console.log("Sort Pop up");}}>
                      <MaterialCommunityIcons name="filter-menu-outline" size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].PRIMARY} />
                      <Text className="pl-1" style={styles.buttonTextSecondary}>{i18n.t(LocalizationKey.FILTER)}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
          </View>
            
            <VirtualizedList
                data={products}
                getItemCount={getItemCount}
                getItem={getItem}
                keyExtractor={(item, index) => index.toString()}
                maxToRenderPerBatch={2}
                initialNumToRender={6}
                ListFooterComponent={
                <View>
                  <View className="h-36 w-1"></View>
                </View>}
                renderItem={({ item }) => (
                  <ProductListRow itemLeft={item.itemLeft} itemRight={item.itemRight} onProductClick={props.onProductClick}/>
                )}
            />
        </View>
          
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors[theme].BACKGROUND,
  },
  toolbar: {
    backgroundColor: ThemeColors[theme].INPUT_BACKGROUND,
    gap: MetricsSizes.BASE_PADDING,
    padding: MetricsSizes.BASE_PADDING,
  },
  line:{
    borderColor:ThemeColors[theme].SUBTEXT,
  },
  button: {
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    height:MetricsSizes.SMALL_BUTTON,
    borderRadius: MetricsSizes.BASE_BRADIUS,
    backgroundColor:ThemeColors[theme].PRIMARY,
  },
  buttonSecondary: {
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    height:MetricsSizes.SMALL_BUTTON,
    borderRadius: MetricsSizes.BASE_BRADIUS,
    backgroundColor:ThemeColors[theme].BUTTON_SECONDARY,
    borderColor: ThemeColors[theme].BACKGROUND,
    borderWidth: MetricsSizes.BORDER_WIDTH,
  },
  buttonTextPrimary:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].BUTTON_SECONDARY,
  },
  buttonTextSecondary:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].TEXT,
  },
  listRow:{
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    paddingTop: MetricsSizes.BASE_PADDING,
    gap:MetricsSizes.BASE_PADDING
  },
});
