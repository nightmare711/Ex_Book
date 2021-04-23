import React from 'react'
import { DataContext } from '../../context/Context'
import './Updatebook.css'

export function UpdateBook({info, setInfo}) {
    const data = React.useContext(DataContext)
    
    return (
        <div className='add-product-container update-product-container'>
            <div style={{zIndex: -1}} onClick={() => {
                setInfo({
                    id:'',
                    name: '',
                    email: '',
                    password:'',
                    description: '',
                    phoneNumber: '',
                    imgUrl: '',
                    type: '',
                })
            }} className='overlay'>
            </div>
            <div className='add-product update-product'>
                <div class="form-outline mb-2">
                    <input value={info.name} onChange={(e) => setInfo({...info, name: e.target.value})} type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Name book</label>
                </div>


                <div class="form-outline mb-2">
                    <input value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})} type="email" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>

                <div class="form-outline mb-2">
                    <input value={info.phoneNumber} onChange={(e) => setInfo({...info, phoneNumber: e.target.value})} type="text" id="form6Example6" class="form-control" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div>

                <div class="form-outline mb-2">
                    <textarea value={info.description} onChange={(e) => setInfo({...info, description: e.target.value})} class="form-control" id="form6Example7" rows="4"></textarea>
                    <label class="form-label" for="form6Example7">Description</label>
                </div>
                <div class="form-outline mb-4">
                    {info.imgUrl ? <img src={info.imgUrl} alt="preview" /> : null}
                </div>
                <button onClick={() => data.setIsOpenPasswordUpdate(true)} type="submit" class="btn btn-primary btn-block mb-2">Edit book</button>
            </div>
        </div>
    )
}


