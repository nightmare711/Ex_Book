import React from 'react'
import { CardValue } from '../../components/Card/CardValue'
import { useGetBooks } from '../../queries/useGetBooks'

import './HomePage.css'

export const HomePage = () => {
    const { data: listData } = useGetBooks()
    return (
        <div className='home-page'>
            <div className='card-group'>
                {
                    listData?.map(data => <CardValue title={data.name} email={data.email} phoneNumber={data.phoneNumber} imgUrl={data.imgUrl} description={data.description} href="https://www.npmjs.com/package/react-router-dom" />)
                }
            </div>
        </div>

    )
}