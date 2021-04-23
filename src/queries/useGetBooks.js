import React, { useReducer } from 'react'
import { useQuery, useMutation } from 'react-query'
import { DataContext } from '../context/Context'

export const useGetBooks = () => {
    const data = React.useContext(DataContext)
    return useQuery('useGetBooks.name',async () => {
        data.setIsLoading(true)
        return fetch('http://localhost:5000/books').then(res=>res.json()).then(result => {
            data.setIsLoading(false)
            return result.results
        }).catch(err => console.log(err))
    })
}
export const usePostBook = () => {
    const data = React.useContext(DataContext)
    return useMutation((info) => {
        data.setIsLoading(true)
        return fetch('http://localhost:5000/books', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-type': 'application/json'
            }
        }).then (res => res.json())
        .then(result => data.setIsLoading(false))
        .catch(err => console.log(err))
    }, {
        onSuccess: () => window.location.href = 'http://localhost:3000/'
    })
}
export const useDeleteBook = () => {
    return useMutation((id) => {
        return fetch('http://localhost:5000/books/'+ id, {
            method: 'DELETE',
            
        }).then (res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    },{
        onSuccess: () => window.location.href = 'http://localhost:3000/'
    })
}
export const useSearch = () => {
    return useMutation((id) => {
        return fetch('http://localhost:5000/books/'+ id, {
            method: 'Sear'
            
        })
    })
}