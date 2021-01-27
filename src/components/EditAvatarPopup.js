import React from 'react'
import PopupWithForm from './popupWithForm'
import { CurrentUserContext } from '../context/CurrentUserContext'


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
const inputRef = React.useRef()
const [avatar, setAvatar] = React.useState('')
const currentUser = React.useContext(CurrentUserContext);
    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: inputRef.current.value,
        });
      }
      React.useEffect(() => {
        setAvatar(currentUser.avatar)
      }, [currentUser]); 



      function handleAvatarChange(e){
        setAvatar(e.target.value)
      }
    return( 
    <PopupWithForm
        title="Обновить профиль"
        name="avatar"
        isOpen={isOpen ? "popup_is-opened" : ""}
        onClose={onClose}
        button="Сохранить"
        onSubmit={handleSubmit}
        children={
          <>
            <input
                ref={inputRef}
              value={avatar}
              onChange={handleAvatarChange}
              placeholder ='Ссылка на картинку'
              required
              type="url"
              name="avatar"
              minLength="2"
              id="link"
              className="popup__name popup__place_type_subtitle"
            />
            <span id="link-error" className="error"></span>
          </>
        }
      />)
}

export default EditAvatarPopup