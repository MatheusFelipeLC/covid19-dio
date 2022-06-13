import React, { memo } from "react";
import PropTypes from "prop-types"
import {Card as CardUI} from "../../../components/";

import {
    Labelstyled,
     ValueStyled, 
     CardContentStyled
    } from "./style"

function Card({value, label, color}){
    return(
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <Labelstyled>{label}</Labelstyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)