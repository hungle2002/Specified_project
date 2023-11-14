import React, { memo } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { ProductBannerModel } from '@/Services/banners';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { ThemeColors, FontSize, ValidThemeColors } from '@/Theme';
import { useAppSelector } from '@/Hooks';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import {
//   faCheck
// } from "@fortawesome/free-solid-svg-icons"

let theme: ValidThemeColors = 'default';
const SLIDE_WIDTH = Math.round((viewportWidth - 24) / 3.2);
const ITEM_HORIZONTAL_MARGIN = 10;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN;
const SLIDER_WIDTH = viewportWidth - 24;
const SLIDE_HEIGHT = 180;

interface CarouselCardModel {
  item: ProductBannerModel;
  index: number;
}

const _renderitem = ( { item, index }:  CarouselCardModel) => <CarouselCardItem item={item} index={index} />;

const CarouselCardItem = memo( function CarouselCardItem({ item, index }: CarouselCardModel) {
  return (
    <View style={styles.container} key={index}>
      {item.typeSpecial === 1 && <Foundation style={styles.saleIcon} name="burst-sale" size={30} color={ThemeColors[theme].SECONDARY} />}
      <Image source={item.imgUrl} style={styles.image} />
      {item.price && (
        <View style={styles.priceContainer}>
          {/* <FontAwesomeIcon icon={faCheck} size={12} color={ThemeColors[theme].PRIMARY} /> */}
          {item.typeSpecial === 0 && (
            <>
              <MaterialCommunityIcons name="sale" size={12} color={ThemeColors[theme].PRIMARY} />
              <Text style={styles.priceDivide}>|</Text>
            </>
          )}
          <Text style={styles.price}>{item.price?.toLocaleString()}VND</Text>
        </View>
      )}
    </View>
  );
});

export interface CarouselCardProps {
  data: ProductBannerModel[];
  isDot?: boolean;
}

const ProductCarousel = (props: CarouselCardProps) => {
  const [index, setIndex] = React.useState<number>(0);
  theme = useAppSelector((state) => state.theme.theme);

  return (
    <View className="mb-6 -mt-2">
      <Carousel
        // layout="default"
        autoplayInterval={7000}
        autoplay={true}
        loop={true}
        data={props.data}
        renderItem={_renderitem}
        onSnapToItem={(index: number) => setIndex(index)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      {props.isDot && (
        <Pagination
          containerStyle={{ marginTop: -20, marginBottom: -20 }}
          dotsLength={props.data.length}
          activeDotIndex={index}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.8}
        />
      )}
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: SLIDE_WIDTH,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    height: SLIDE_HEIGHT,
    marginTop: 10,
    // elevation: 7,
  },
  image: {
    width: '100%',
    height: SLIDE_HEIGHT - 20,
    borderRadius: 20,
  },
  saleIcon: {
    position: 'absolute',
    zIndex: 20,
    top: 25,
    right: 10,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
    left: 5,
    backgroundColor: ThemeColors[theme].BACKGROUND,
    borderRadius: 5,
    padding: 3,
  },
  priceDivide: {
    color: 'black',
    fontSize: FontSize.TINY,
    marginLeft: 2,
    marginRight: 2,
  },
  price: {
    color: ThemeColors[theme].PRIMARY,
    fontSize: FontSize.TINY,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
