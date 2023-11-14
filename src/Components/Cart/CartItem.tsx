import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { Product } from "@/Services";
import { CartItem } from "@/Services/cart";
import {  faCircleCheck, faPlus, faMinus,  faEllipsis} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
let theme: ValidThemeColors = 'default';

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItemComponent ({cartItem}:CartItemProps){
  return(
    <View className="flex-row items-center" style={styles.container}>
      <TouchableOpacity style={styles.check}>
        <FontAwesomeIcon icon={faCircleCheck} size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].SECONDARY}></FontAwesomeIcon>
      </TouchableOpacity>
      <Image source={{ uri: cartItem.image }} className="h-24 w-24" style={styles.image}/> 
      <View className="flex-1" style={styles.detail}>
        <View className="flex-row">
          <View>
            <Text style={styles.name} className="font-semibold">{cartItem.name}</Text>
            <View className="items-start pt-1"> 
            <TouchableOpacity className="rounded-md px-2 py-1" style={styles.variant}>
              <Text style={styles.variantText}>{cartItem.variants}</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View className="flex-1"/>
          <TouchableOpacity style={styles.check}>
            <FontAwesomeIcon icon={faEllipsis} size={20} color={ThemeColors[theme].SECONDARY}></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <View >
          {cartItem.discountRate?
          (
          <View>
            <View className="flex-row">
              <Text className="line-through font-semibold" style={styles.beforeDiscount}>{cartItem.normalPrice.toLocaleString()} VND</Text>
              <Text className="font-semibold" style={styles.discountPrice}>{cartItem.price.toLocaleString()} VND</Text>
            </View>
            <View className="flex-row pt-1 items-center">
              <Text style={styles.discountRate}>Giảm {cartItem.discountRate}%</Text>
              <View className="ml-1 px-2 py-1 rounded-sm" style={styles.updatedLabel}>
                <Text style={styles.updatedText}>Đã cập nhật</Text>
              </View>
              <View className="flex-1"/>
              <View className='items-center flex-row px-4 py-[5px]' style={styles.quantity}>
                <TouchableOpacity className="items-center justify-center " onPress={()=>{}}>
                  <FontAwesomeIcon icon={faMinus} size={14} color={ThemeColors[theme].BUTTON_SECONDARY} />
                </TouchableOpacity>
                <Text className="pl-[10px]" style={styles.quantityNumber}>1</Text>
                <TouchableOpacity className="items-center justify-center pl-[10px]" onPress={()=>{}}>
                  <FontAwesomeIcon icon={faPlus} size={14} color={ThemeColors[theme].BUTTON_SECONDARY} />
                </TouchableOpacity>
              </View>
            </View>
          </View>):
          (<View className="flex-row items-center">
            <View className="">
              <Text className="font-semibold" style={styles.price}>{cartItem.price.toLocaleString()} VND</Text>
              <Text className="line-through" style={styles.originalPrice}>{cartItem.normalPrice.toLocaleString()} VND</Text>
            </View>
            <View className="flex-1"/>
            <View className='items-center flex-row px-4 py-[5px]' style={styles.quantity}>
              <TouchableOpacity className="items-center justify-center " onPress={()=>{}}>
                <FontAwesomeIcon icon={faMinus} size={14} color={ThemeColors[theme].BUTTON_SECONDARY} />
              </TouchableOpacity>
              <Text className="pl-[10px]" style={styles.quantityNumber}>1</Text>
              <TouchableOpacity className="items-center justify-center pl-[10px]" onPress={()=>{}}>
                <FontAwesomeIcon icon={faPlus} size={14} color={ThemeColors[theme].BUTTON_SECONDARY} />
              </TouchableOpacity>
            </View>
          </View>)}
        </View>
      </View>
    </View>
  );};

const styles = StyleSheet.create({
    container: {
      gap: MetricsSizes.BASE_PADDING,
      marginBottom: MetricsSizes.VERY_LARGE_PADDING,
    },
    check:{

    },
    image: {
      borderRadius: MetricsSizes.BASE_BRADIUS,
    },
    detail:{
      gap: MetricsSizes.BASE_PADDING,
    },
    name:{
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].TEXT,

    },
    variant:{
      backgroundColor: ThemeColors[theme].CART_VARIANT_BACKGROUND,
    },
    variantText:{
      fontSize: FontSize.SMALL,
      color: ThemeColors[theme].SUBTEXT
    },
    price:{
      color: ThemeColors[theme].TEXT,
      fontSize: FontSize.REGULAR,
    },
    originalPrice:{
      color: ThemeColors[theme].SUBTEXT,
      fontSize: FontSize.SMALL,
    },
    discountPrice:{
      color: ThemeColors[theme].DISCOUNT,
      fontSize: FontSize.REGULAR,
    },
    beforeDiscount:{
      color: ThemeColors[theme].TEXT,
      fontSize: FontSize.REGULAR,
    },
    discountRate:{
      color: ThemeColors[theme].DISCOUNT,
      fontSize: FontSize.TINY,
    },
    updatedText:{
      color: ThemeColors[theme].BUTTON_SECONDARY,
      fontSize: FontSize.TINY,
    },
    updatedLabel:{
      backgroundColor: ThemeColors[theme].DISCOUNT,
    },
    quantity:{
      backgroundColor: ThemeColors[theme].SECONDARY,
      borderRadius: MetricsSizes.BASE_BRADIUS,
    },
    quantityNumber:{
      color: ThemeColors[theme].BUTTON_SECONDARY,
      fontSize: FontSize.SMALL,
    },
});