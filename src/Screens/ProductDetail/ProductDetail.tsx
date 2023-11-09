import React, {useState} from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Button } from 'native-base';
import { ThemeColors, FontSize, ValidThemeColors, MetricsSizes } from '@/Theme';
import { useAppSelector } from '@/Hooks';
import { RootScreens, TabScreens } from '..';
import CustomButton from '@/Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faStar, faMinus } from '@fortawesome/free-solid-svg-icons';
import StarRating from '@/Components/Shopping/StarRating';
import RadioProductOption from '@/Components/Shopping/RadioProductOption';
import RadioColorOption from '@/Components/Shopping/RadioColorOption';

let theme: ValidThemeColors = 'default';

interface IProductDetailProps {
  onNavigate: (string: RootScreens) => void;
}

const product =  {
  name: 'Áo Thun Cổ Tròn Tay Dài Vải Cotton 2 Chiều Thấm Hút',
  price: 195000,
  normalPrice: 600000,
  rating: 4,

  description: "Chất liệu: Cotton Compact 2S \n whThành phần: 100% Cotton \n - Thấm hút thoát ẩm \n - Mềm mại \n - Thân thiện \n - Kiểm soát mùi \n - Điều hòa nhiệt \n + Kỹ thuật thêu Wappen  \n + In dẻo \n + In trame \n + Thiết kế cổ tròn \n + Sử dụng bo dệt cotton làm cổ áo",
  image: 'https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-speed-11-0022352/f8cde861-3bd8-2200-4038-001a9df5ed17.jpg?w=540&h=756',
}
const variant =[{
  name:'Size',
},
{
  name:'Color',
}
]
const variantOptions =[
  [
    {value:'S', isAvail: true},
    {value:'M', isAvail: true},
    {value:'L', isAvail: true},
    {value:'XL', isAvail: true},
    {value:'XXL', isAvail: false},
    {value:'41', isAvail: true},
    {value:'43/46', isAvail: true}],
  [
    {value:'#FFFFFF', isAvail: true},
    {value:'#000000', isAvail: true},
    {value:'#BFDB38', isAvail: false},
    {value:'#1F8A70', isAvail: true}]
  ]
    

export const ProductDetail = (props: IProductDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  theme = useAppSelector((state) => state.theme.theme);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} className="h-[448px]" style={styles.image} resizeMode='contain'/> 
      <View style={styles.detailContainer} className='pb-10'>
        <View className='flex-row justify-between items-center'>
          <Text style={styles.name} className="font-bold mr-3 flex-1">{product.name}</Text>
          <View className='flex-row gap-4 items-center'>
              <TouchableOpacity className="items-center justify-center border border-slate-200 rounded-full p-2" onPress={()=>{}}>
                <FontAwesomeIcon icon={faMinus} size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].SECONDARY} />
              </TouchableOpacity>
              <Text style={styles.name}>1</Text>
              <TouchableOpacity className="items-center justify-center border border-slate-200 rounded-full p-2" onPress={()=>{}}>
                <FontAwesomeIcon icon={faPlus} size={MetricsSizes.BASE_ICON_SIZE} color={ThemeColors[theme].SECONDARY} />
              </TouchableOpacity>
          </View>
        </View>
        <View>
          {product.normalPrice!=0&&(<Text style={styles.salePrice} className="line-through">{product.normalPrice?.toLocaleString()} VND</Text>)}
          <Text style={styles.price} className="font-bold">{product.price?.toLocaleString()} VND</Text>
          {/* <Text style={styles.rating}>{product.rating}</Text>
          <FontAwesomeIcon icon={faStar} size={16} color="#FFD33C" /> */}
        </View>
        <View className='flex-row'>
          <StarRating rating={product.rating}/>
          <Text className="pl-2"style={styles.rating}>{product.rating}</Text>
          <TouchableOpacity className="pl-2">
            <Text style={styles.review}>(7932 reviews)</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}numberOfLines={showFullDescription ? undefined: 3}>
          {product.description}
        </Text>
        <View className='items-end'>
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={styles.readmore}>{showFullDescription?"Show less": "Read More"}</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.line} className='w-full border-[0.2px] opacity-10'></View>
        <Text className='font-bold' style={styles.optionsTitle}>{variant[0].name}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} > 
          <View className='flex-row'>
            {variantOptions[0].map((option, index)=><RadioProductOption key={index} title={option.value} isAvail={option.isAvail}></RadioProductOption>)}
          </View>
        </ScrollView>
        <View style={styles.line} className='w-full border-[0.2px] opacity-10'></View>
        <Text className='font-bold' style={styles.optionsTitle}>{variant[1].name}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} > 
          <View className='flex-row'>
            {variantOptions[1].map((option, index)=><RadioColorOption key={index} title={option.value} isAvail={option.isAvail}></RadioColorOption>)}
          </View>
        </ScrollView>
        {/* <TouchableOpacity
          className="w-6 h-6 rounded-xl p-0 items-center justify-center top-2 right-2 absolute border"
          style={isFavorite ? styles.favoriteButtonActive : styles.favoriteButton}
          onPress={toggleFavorite}>
            <MaterialCommunityIcons name="cards-heart" size={16} color={isFavorite ? ThemeColors[theme].BUTTON_SECONDARY : ThemeColors[theme].PRIMARY} />
        </TouchableOpacity> */}
      </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    padding: MetricsSizes.BASE_PADDING,
    backgroundColor: ThemeColors[theme].INPUT_BACKGROUND,
  },
  image: {
    borderRadius: MetricsSizes.LARGE_BRADIUS,
  },
  detailContainer:{
    marginTop: MetricsSizes.LARGE_PADDING,
    gap: MetricsSizes.LARGE_PADDING,
  },
  name: {
    fontSize: FontSize.LARGE,
    color: ThemeColors[theme].TEXT,
  },
  price: {
    fontSize: FontSize.LARGE,
    color: ThemeColors[theme].TERTIARY,
  },
  salePrice: {
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].SUBTEXT,
  },
  rating: {
    fontSize: FontSize.REGULAR,
  },
  review:{
    fontSize: FontSize.REGULAR,
    color: ThemeColors[theme].TERTIARY,
  },
  desc:{
    fontSize: FontSize.SMALL,
    color: ThemeColors[theme].SUBTEXT,
  },
  optionsTitle:{
    fontSize: FontSize.LARGE,
    color: ThemeColors[theme].TEXT,
  },
  readmore:{
    fontSize:FontSize.REGULAR,
    color: ThemeColors[theme].PRIMARY,
  },
  line:{
    borderColor: ThemeColors[theme].SUBTEXT,
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
