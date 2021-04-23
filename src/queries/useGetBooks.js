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
    }, { refetchOnWindowFocus: false })
}
export const usePostBook = () => {
    const data = React.useContext(DataContext)
    return useMutation((info) => {
        
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
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
export const useSearchBook = () => {
    const data = React.useContext(DataContext)
    const { data: listData, status } = useGetBooks()
    return (event,searchInput) => {
        // event.preventDefault();
        const tempList = data.listProducts
        const temp = tempList.filter(product => {
            return removeAccents(product.name.toString().toLowerCase()).includes(removeAccents(searchInput.trim()))
        })
        if(searchInput.trim() !== '') {
            data.setListProducts(temp)
        } else {
            if(status) {
                data.setListProducts(listData)
            }
        }
        
    }

}
export const useUpdateBook = () => {
    return useMutation((info) => {
        return fetch('http://localhost:5000/books/'+info._id, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-type': 'application/json'
            }
        }).then (res => res.json())
        .then(result => window.location.href = 'http://localhost:3000/')
        .catch(err => console.log(err))
    }, {
        onSuccess: () => {
            
        }
    })
}