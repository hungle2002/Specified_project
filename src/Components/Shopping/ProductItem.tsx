import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { Product } from "@/Services";
import { MaterialCommunityIcons } from '@expo/vector-icons';

let theme: ValidThemeColors = 'default';

interface ProductProps {
  product: Product;
  onClick: (product: Product)=>void;
}

export default function ProductItem ({product,onClick}:ProductProps){
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return(
    <TouchableOpacity className="max-w-[200px] flex-1" style={Productstyles.container} onPress={()=>onClick(product)}>
      <Image source={{ uri: product.image }} className="object-cover h-60" style={Productstyles.image}/> 
      <Text style={Productstyles.name} className="font-bold">{product.name}</Text>
      <View className="flex-row items-center gap-1">
        <Text style={Productstyles.price} className="font-bold flex-1">{product.price?.toLocaleString()} VND</Text>
        <Text style={Productstyles.rating}>{product.rating}</Text>
        <MaterialCommunityIcons name="star" size={16} color="#FFD33C" />
      </View>
      {product.normalPrice!=0&&(<Text style={Productstyles.salePrice} className="line-through">{product.normalPrice?.toLocaleString()} VND</Text>)}
      <TouchableOpacity
        className="w-6 h-6 rounded-xl p-0 items-center justify-center top-2 right-2 absolute border"
        style={isFavorite ? Productstyles.favoriteButtonActive : Productstyles.favoriteButton}
        onPress={toggleFavorite}>
          <MaterialCommunityIcons name="cards-heart" size={16} color={isFavorite ? ThemeColors[theme].BUTTON_SECONDARY : ThemeColors[theme].PRIMARY} />
      </TouchableOpacity>
    </TouchableOpacity>
  );};

const Productstyles = StyleSheet.create({
    container: {
      gap: MetricsSizes.BASE_PADDING,
    },
    image: {
      borderRadius: MetricsSizes.LARGE_BRADIUS,
    },
    name: {
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].TEXT,
    },
    price: {
      fontSize: FontSize.REGULAR,
      color: ThemeColors[theme].TEXT,
    },
    salePrice: {
      fontSize: FontSize.TINY,
      color: ThemeColors[theme].SUBTEXT,
    },
    rating: {
      fontSize: FontSize.SMALL,
    },
    favoriteButton: {
      backgroundColor: ThemeColors[theme].BUTTON_SECONDARY,
      borderColor:ThemeColors[theme].BACKGROUND,
      elevation: 4,
    },
    favoriteButtonActive: {
      backgroundColor: ThemeColors[theme].PRIMARY,
      borderColor:ThemeColors[theme].BACKGROUND,
      elevation: 4,
    },
});