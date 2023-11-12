import React from "react";
import { View, StyleSheet} from "react-native";
import {   MetricsSizes } from '@/Theme';
import { Product } from "@/Services";
import ProductItem from "@/Components/Shopping/ProductItem";

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