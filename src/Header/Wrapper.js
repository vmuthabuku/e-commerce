import React from 'react'
import Header from './Header'

export default function Wrapper({children}) {
    return (
        <Header>
            {children}
        </Header>
    )
}
