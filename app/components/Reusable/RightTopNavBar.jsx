"use client"
import { AccountContext } from '@/stores/Account'
import React, { useContext } from 'react'

function RightTopNavBar() {
    const {values} = useContext(AccountContext)
    return (
        <div className="h-16 tex-sm bg-[#e3e6e9] flex justify-center items-center">
            <span>linkhub/@{values.user?.meta?.username || 'clame a username'}</span>
        </div>
    )
}

export default RightTopNavBar