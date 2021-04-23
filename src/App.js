import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { NavBar, Password } from './components'
import { HomePage, AddBook, ViewBook } from './pages'
import { Switch, Route } from 'react-router-dom'
import { Loading } from './components'
import { DataContext } from './context/Context'

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
  const [isLoading, setIsLoading] = React.useState(false)
  const [isOpenPassword, setIsOpenPassword] = React.useState(false)
  const onClickViewbook = (info) => {
    setInfo(info)
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
      setIsOpenPassword
    }} >
      <div className="App">
        {info.name && info.description ? <div onClick={onCloseView} className='overlay'></div>: null}
        <NavBar/>
        {isOpenPassword ? <Password/>: null}
        {isLoading ? <Loading /> : null}
        <Switch>
          <Route exact path="/" >
            <HomePage onClickViewBook={onClickViewbook} />
          </Route>
          <Route exact path="/add-book">
          <AddBook info={info} setInfo={setInfo} />
          </Route>
        </Switch>
        {info.name && info.description ? <ViewBook info={info} /> : null}
      </div>
    </DataContext.Provider>
  );
}

export default App;
