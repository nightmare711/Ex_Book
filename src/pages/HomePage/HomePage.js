import React from 'react'
import { CardValue } from '../../components/Card/CardValue'
import { useGetBooks } from '../../queries/useGetBooks'
import { DataContext } from '../../context/Context'

import './HomePage.css'

export const HomePage = ({onClickViewBook, onClickUpdateBook}) => {
    const { data: listData, status } = useGetBooks()
    const data = React.useContext(DataContext)
    React.useEffect(() => {
        if(status) {
            data.setListProducts(listData)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, listData])
    return (
        <div className='home-page'>
            <div className='card-group'>
                {
                    data.listProducts?.map(data => <CardValue onClickUpdateBook={onClickUpdateBook} onClickViewBook={onClickViewBook} info={data} title={data.name} email={data.email} phoneNumber={data.phoneNumber} imgUrl={data.imgUrl} description={data.description} href="https://www.npmjs.com/package/react-router-dom" />)
                }
            </div>
        </div>

    )
}