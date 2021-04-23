import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { NavBar, Password } from './components'
import { HomePage, AddBook, ViewBook, UpdateBook } from './pages'
import { Switch, Route } from 'react-router-dom'
import { Loading } from './components'
import { DataContext } from './context/Context'
import {Footer} from './components'

function App() {
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
  const [infoUpdate, setInfoUpdate] = React.useState({
    id:'',
    name: '',
    email: '',
    password:'',
    description: '',
    phoneNumber: '',
    imgUrl: '',
    type: '',
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [isOpenPassword, setIsOpenPassword] = React.useState(false)
  const [listProducts, setListProducts] = React.useState([])
  const [isOpenPasswordUpdate, setIsOpenPasswordUpdate] = React.useState(false)
  const onClickViewbook = (info) => {
    setInfo(info)
  }
  const onClickUpdateBook = (info) => {
    setInfoUpdate(info)
  }
  const onCloseView = () => {
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
    setIsOpenPassword(false)
  }
  
  return ( 
    <DataContext.Provider value={{
      isLoading,
      setIsLoading,
      info,
      setInfo,
      isOpenPassword,
      setIsOpenPassword,
      listProducts, 
      setListProducts,
      infoUpdate,
      setInfoUpdate,
      isOpenPasswordUpdate,
      setIsOpenPasswordUpdate
    }} >
      <div className="App">
        {info.name && info.description ? <div onClick={onCloseView} className='overlay'></div>: null}
        <NavBar/>
        {isOpenPassword ? <Password title='delete'/>: null}
        {isOpenPasswordUpdate ? <Password title='update'/>: null}
        {isLoading ? <Loading /> : null}
        {infoUpdate.name ? <UpdateBook info={infoUpdate} setInfo={setInfoUpdate} />: null}
        <Switch>
          <Route exact path="/" >
            <HomePage onClickViewBook={onClickViewbook} onClickUpdateBook={onClickUpdateBook} />
          </Route>
          <Route exact path="/add-book">
          <AddBook info={info} setInfo={setInfo} />
          </Route>
        </Switch>
        {info.name && info.description ? <ViewBook info={info} /> : null}
        <Footer />
      </div>
    </DataContext.Provider>
  
  );
}

export default App;
