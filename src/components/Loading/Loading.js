import React from 'react'
import LoadingGif from '../../assets/loading.gif'
import './Loading.css'

export const Loading = () => {
    return (
        <div className='loading'>
            <img src={LoadingGif} alt='Loading' />
        </div>
    )
}