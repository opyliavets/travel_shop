import React from 'react'
import Trekking from './Trekking/Trekking'
import Rafting from './Rafting/Rafting'
import Sea from './Sea/Sea'

const response = (name) => {
    if (name === 'Trekking') {
        return (
            <Trekking />
        )        
    }
    if (name === 'Rafting') {
        return (
            <Rafting/>
        )      
    }
    if (name === 'Sea') {
        return (
            <Sea/>
        )
    } else {
        console.log('Error')
    }
}

export default response