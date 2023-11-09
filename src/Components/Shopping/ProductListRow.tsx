import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { Product } from "@/Services";
import ProductItem from "@/Components/Shopping/ProductItem";

let theme: ValidThemeColors = 'default';

interface ProductListRowProps {
  itemLeft: Product;
  itemRight: Product|null;
  onProductClick: (product:Product)=>void;
}

export default function ProductListRow ({itemLeft, itemRight, onProductClick}:ProductListRowProps){
  return(
    <View className="flex-row flex-1" style={styles.listRow}>
      <ProductItem product={itemLeft} onClick={onProductClick}/>  
      {itemRight&&(
      <ProductItem
        product={itemRight} onClick={onProductClick}/>  )}
    </View>
  );
};

const styles = StyleSheet.create({
  listRow:{
    paddingHorizontal: MetricsSizes.BASE_PADDING,
    paddingTop: MetricsSizes.BASE_PADDING,
    gap:MetricsSizes.BASE_PADDING
  },
});