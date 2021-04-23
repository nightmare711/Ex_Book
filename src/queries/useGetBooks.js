import { useQuery, useMutation } from 'react-query'

export const useGetBooks = () => {
    return useQuery('useGetBooks.name',async () => {
        return fetch('http://localhost:5000/books').then(res=>res.json()).then(result => result.results).catch(err => console.log(err))
    })
}
export const usePostBook = () => {
    return useMutation((info) => {
        return fetch('http://localhost:5000/books', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-type': 'application/json'
            }
        }).then (res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    })
}
export const useDeleteBook = () => {
    return useMutation((id) => {
        return fetch('http://localhost:5000/books/'+id, {
            method: 'DELETE',
            
        }).then (res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    })
}