import React, {useState} from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { Button } from 'native-base';
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { useAppSelector } from '@/Hooks';
import { RootScreens, TabScreens } from '..';
import CustomButton from '@/Components/common/Button';
import CartItemComponent from '@/Components/Cart/CartItem';
import { CartItem } from '@/Services/cart';
import {  faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

let theme: ValidThemeColors = 'default';

const CartItemList: CartItem[] =[
{
  id: 1,
  name: 'Quần Dài Lưng Thun Ống Đứng Vải Thun',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/quan-jogger-premium-12-0022520/73473c9a-14c9-ca01-a7b5-001aa1e8bfe5.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 0
},
{
  id: 2,
  name: 'Áo Sơ Mi Cổ Bẻ Tay Dài Sợi Tự Nhiên',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/so-mi-nam-y2010-td-l01-0019680/86ac1d0f-c0ac-0100-d67e-001a1e90f870.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 0
},
{
  id: 3,
  name: 'PKTT Ví Da Tài Lộc',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/pktt-vi-tai-loc-01-0022432/2da29246-d993-3500-f987-001aa763512c.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 20
},
{
  id: 4,
  name: 'Quần lửng',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/quan-short-the-days-eye-25-0022076/4e40f24b-30a9-8801-d3d8-001a4449ea7e.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 20
},
{
  id: 5,
  name: 'PKTT Dây Nịt Da Nguyên Bản',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/pktt-day-nit-nguyen-ban-m20-0022734/b4c019e1-bee9-0100-5010-001aa9a02ad3.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 0
},
{
  id: 6,
  name: 'PKTT Dây Nịt Da Nguyên Bản',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/pktt-day-nit-nguyen-ban-m20-0022734/b4c019e1-bee9-0100-5010-001aa9a02ad3.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 0
},
{
  id: 7,
  name: 'PKTT Dây Nịt Da Nguyên Bản',
  price: 209000,
  normalPrice: 300000,
  image:'https://cdn2.yame.vn/pimg/pktt-day-nit-nguyen-ban-m20-0022734/b4c019e1-bee9-0100-5010-001aa9a02ad3.jpg?w=540&h=756',
  quantity: 1,
  variants:['Đen', 'XL'],
  discountRate: 0
}
];

interface ICartProps {
  onNavigate: (string: RootScreens) => void;
}

export const Cart = (props: ICartProps) => {
  const [totalPrice,SetTotalPrice] = useState(449000);
  const [totalDiscount,SetTotalDiscount] = useState(125000);
  const [itemNumber,SetItemNumber] = useState(3);
  theme = useAppSelector((state) => state.theme.theme);
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.divideContainer} />
    <FlatList
      style={styles.cart}
      data={CartItemList}
      renderItem={({item})=><CartItemComponent cartItem={item}></CartItemComponent>}/>
    <View className='flex-row items-center border-t' style={styles.pay}>
      <TouchableOpacity onPress={()=>setIsSelectedAll(!isSelectedAll)} >
        {isSelectedAll?(<FontAwesomeIcon icon={faCircleCheck} color={ThemeColors[theme].SECONDARY} size={MetricsSizes.BASE_ICON_SIZE}/>)
        :(<View className='border rounded-full' style={{borderColor:ThemeColors[theme].SUBTEXT, width: MetricsSizes.BASE_ICON_SIZE, height:MetricsSizes.BASE_ICON_SIZE}}/>)}
      </TouchableOpacity>
      <Text className='flex-1'style={styles.subtext}>Chọn tất cả</Text>
      <View>
        <Text className='font-semibold' style={styles.totalPrice}>{totalPrice.toLocaleString()} VND</Text>
        <Text style={styles.discount}>Giảm {totalDiscount.toLocaleString()} VND</Text>
      </View>
      <TouchableOpacity className='px-4 py-2 rounded-xl' style={styles.button}>
        <Text className='font-semibold' style={styles.buttonText}>Thanh toán ({itemNumber})</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divideContainer: {
    height: 9,
    width: '100%',
    backgroundColor: ThemeColors[theme].BACKGROUND,
  },
  cart:{
    padding: MetricsSizes.BASE_PADDING,
  },
  pay:{
    height: 60,
    backgroundColor: ThemeColors[theme].INPUT_BACKGROUND,
    gap: MetricsSizes.BASE_PADDING,
    padding: MetricsSizes.BASE_PADDING,
    borderColor:ThemeColors[theme].SUBTEXT,
  },
  subtext:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].SUBTEXT
  },
  totalPrice:{
    fontSize: FontSize.REGULAR,
    color: ThemeColors[theme].TEXT,
  },
  discount:{
    fontSize: FontSize.TINY,
    color: ThemeColors[theme].DISCOUNT,
  },
  button:{
    backgroundColor: ThemeColors[theme].PRIMARY,
  },
  buttonText:{
    color: ThemeColors[theme].BUTTON_SECONDARY,
  }
});
