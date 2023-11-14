import React from "react";
import { View } from "react-native";
import { ValidThemeColors } from '@/Theme';

import {  faStar as FilledStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as EmptyStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

let theme: ValidThemeColors = 'default';

interface starIconProps {
  rating : number;
}

const StarIcon = ({rating}:starIconProps ) => {
  let icon = EmptyStar;

  if(rating>=1) {
    icon = FilledStar;
  } else if ( rating > 0){
    icon = faStarHalfStroke
  }

  return (
    <View className="pr-1">
      <FontAwesomeIcon icon={icon} size={16} color="#FFD33C" />
    </View>
  );
};

export default function StarRating ( {rating}:starIconProps ) {
  return (
    <View className="flex-row items-center">
    {[1,2,3,4,5].map((index)=><StarIcon key={index} rating={rating - index + 1} />)}
    </View>
  );
};
