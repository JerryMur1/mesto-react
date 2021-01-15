
import Main from './main'
import Footer from './footer';
import Header from './header';
import PopupWithForm from './popupWithForm';
import ImagePopup from './popupImage';
import React from 'react'
import api from '../utils/api';

function App() {
const [userName, setName] = React.useState([])
const [cards, setCards] = React.useState([])
const [userDescription, setDescription] = React.useState([])
const [userAvatar, setAvatar] = React.useState([])

React.useEffect(()=>{
  api.getInitialCards()
  .then((res)=>{
    setCards(res.map((card)=>({
      id: card._id,
      likes: card.likes,
      url: card.link,
      name: card.name
    })))
  })
}, [])


    React.useEffect(()=>{
        api.getUserId()
        .then((res)=>{
            setName(res.name)
            setDescription(res.about)
            setAvatar(res.avatar)
        })
    })
  

  const [isEditProfilePopupOpen, editOpen] = React.useState(false) ;
  const [isEditAvatarPopupOpen, avatarOpen] = React.useState(false) ;
  const [isAddPlacePopupOpen, placeOpen] = React.useState(false) ;
  const [card, selectedCard] = React.useState(null) ;




const handleCardClick = card =>{selectedCard(card)}



function handleEditEditClick () {

  editOpen(true)
}
function handleEditAvatarClick(){
  avatarOpen(true)
}
function handleEditAddClick () {
  
placeOpen(true)
}
function closeAllPopups(){
  placeOpen(false)
  avatarOpen(false)
  editOpen(false)
  selectedCard(false)
}
  return (
  <>
    <div className="page">
    <Header />
    <PopupWithForm   title = {'Добавить карточку'} name = {'add'} isOpen={isAddPlacePopupOpen ? 'popup_is-opened' : ''} onClose={closeAllPopups} button={'Создать'} children={<><input required type="text" name={"firstname"} minLength="2" maxLength="40" id="name-profile" className="popup__name popup__name_type_title" />
                <span id="name-profile-error" className="error"></span>
                <input required type="text" name="secondname" minLength="2" maxLength="200" id="secondname-profile" className="popup__name popup__name_type_subtitle"  />
                <span id="secondname-profile-error" className="error"></span></>}/>
    <PopupWithForm   title = {'Обновить профиль'} name = {'avatar'} isOpen={isEditAvatarPopupOpen ? 'popup_is-opened' : ''} onClose={closeAllPopups} button={"Сохранить"} children={<><input required type="text" name={"firstname"} minLength="2" maxLength="40" id="name-profile" className="popup__name popup__name_type_title" />
  <span id="name-profile-error" className="error"></span></>}/>
    <PopupWithForm  title = {'Редактировать профиль'} name = {'edit'} isOpen={isEditProfilePopupOpen ? 'popup_is-opened' : ''} onClose={closeAllPopups} button={"Сохранить"} children={<><input required type="text" name={"firstname"} minLength="2" maxLength="40" id="name-profile" className="popup__name popup__name_type_title" />
                <span id="name-profile-error" className="error"></span>
                <input required type="text" name="secondname" minLength="2" maxLength="200" id="secondname-profile" className="popup__name popup__name_type_subtitle"  />
                <span id="secondname-profile-error" className="error"></span></>}/>
    <PopupWithForm   title = {'Удалить карточку'} name = {'delete'} button={"Да"}/>
    <Main  onCardClick={handleCardClick} userName={userName} onEditProfile ={handleEditEditClick} onAddPlace={handleEditAddClick} onEditAvatar={handleEditAvatarClick} userAvatar={userAvatar} userDescription={userDescription} cards={cards}  />
    <ImagePopup card={card} onClose={closeAllPopups}/>
    <Footer />
    </div>
    
</>
  );
}

export default App;
