import React from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const {
        align = 'start'
    } = props

    return (
        <Flex align={align} direction='column' {...props}/>
    )
}
