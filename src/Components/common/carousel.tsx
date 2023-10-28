import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { BannerModel } from '@/Services/banners'
const SLIDER_WIDTH = Dimensions.get('window').width - 24
const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

interface CarouselCardModel {
  item: BannerModel,
  index: number,
}

const CarouselCardItem = ({ item, index }: CarouselCardModel) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={ item.imgUrl }
        style={styles.image}
      />
      {item.title && <Text style={styles.header}>{item.title}</Text>}
      {item.body && <Text style={styles.body}>{item.body}</Text>}
    </View>
  )
}

export interface CarouselCardProps{
  data: BannerModel[]
}

const CarouselCards = ( props: CarouselCardProps) => {
  const [index, setIndex] = React.useState<number>(0)

  return (
    <View>
      <Carousel
        // layout="default"
        autoplayInterval={7000}
        autoplay={true}
        loop={true}
        data={props.data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index: number) => setIndex(index)}
      />
      <Pagination
        containerStyle={{marginTop: -20, marginBottom: -15,}}
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
    </View>
  )
}

export default CarouselCards

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    height: 200,
    marginTop: 10,
    // elevation: 7,
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'fill',
    borderRadius: 20,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  }
})