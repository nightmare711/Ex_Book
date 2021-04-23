import React from 'react'
import { usePostBook } from '../../queries/useGetBooks'
import './AddBook.css'

let imgPreview= ''

export const AddBook = () => {
    const {mutate: postBook} = usePostBook()
    const [info, setInfo] = React.useState({
        id:'',
        name: '',
        email: '',
        password:'',
        description: '',
        phoneNumber: '',
        imgUrl: '',
        type: '',
    })
    const [imagePreview, setImagePreview] = React.useState({
        file:'',
        imagePreview: ''
    })
    const onHandlePostBtn = () => {
        const information = {
            ...info, 
            imgUrl: imgPreview
        }
        console.log(information)
        postBook(information)
    }
    const handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            imgPreview = reader.result
          setImagePreview({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      console.log(imagePreview)
    return (
        <div className='add-product-container'>
            <div className='add-product'>
                <div class="form-outline mb-4">
                    <input onChange={(e) => setInfo({...info, name: e.target.value})} type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Name book</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" onChange={(e) => setInfo({...info, password: e.target.value})} id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Password</label>
                </div>

                <div class="form-outline mb-4">
                    <input onChange={(e) => setInfo({...info, email: e.target.value})} type="email" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>

                <div class="form-outline mb-4">
                    <input onChange={(e) => setInfo({...info, phoneNumber: e.target.value})} type="number" id="form6Example6" class="form-control" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div>

                <div class="form-outline mb-4">
                    <textarea onChange={(e) => setInfo({...info, description: e.target.value})} class="form-control" id="form6Example7" rows="4"></textarea>
                    <label class="form-label" for="form6Example7">Description</label>
                </div>
                <div class="form-outline mb-4">
                    <input onChange={(e) => handleImageChange(e)} type='file' />
                    {imgPreview ? <img src={imgPreview} alt="preview" /> : null}
                </div>
                <button onClick={onHandlePostBtn} type="submit" class="btn btn-primary btn-block mb-4">Add book</button>
            </div>
        </div>
    )
}