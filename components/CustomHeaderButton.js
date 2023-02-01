import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {HeaderButton} from 'react-navigation-header-buttons'
import colors from "../constants/colors";

const CustomHeaderButton = props => {
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        color={props.color ?? colors.blue}
        iconSize={30}
    
    />
}

export default CustomHeaderButton