import Main from "./main";
import Footer from "./footer";
import Header from "./header";
import ImagePopup from "./popupImage";
import React from "react";
import api from "../utils/api";
import { CurrentUserContext } from '../context/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
 
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});

  
  function handleUpdateUser({name, about}){
 
      api.addUserId({name, about}).then((res) => {
        setCurrentUser({
          name: res.name, about:res.about, avatar: res.avatar})
      }).catch((res)=>{
        console.log(res)
      }).finally(()=>{
        closeAllPopups()
      });
    };

    
    function handleUpdateAvatar({avatar}){
 
      api.addAvatarId({avatar}).then((res) => {
        setCurrentUser({
   avatar: res.avatar, name: res.name, about:res.about})
      }).catch((res)=>{
        console.log(res)
      }).finally(()=>{
        closeAllPopups()
      });
    };

 
  React.useEffect(() => {
    api.getUserId().then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        _id: res._id
      })
    }).catch((res)=>{
      console.log(res)
    });
  }, []);

  

  React.useEffect(() => {
    api.getInitialCards().then((item) => {
      setCards(item);
    }).catch((res)=>{
      console.log(res)
    });
  }, []);
  
function handleAddPlaceSubmit({name, link}){
  api.addCards({name, link}).then(newCard => {
    setCards([newCard, ...cards]);
  }).catch((res)=>{
    console.log(res)
  }).finally(()=>{
    closeAllPopups()
  });;
};


function handleDeleteCard({cardId}) {
  
  api.deleteCard(cardId).then(() => {
    const newCards = cards.filter(card => card._id !== cardId);
    setCards(newCards);
  });
}


  function handleCardLike({likes, cardId}) {
    const isLiked = likes.some(i => {return i._id === currentUser._id});
  
    api.likeCard(cardId, !isLiked).then((newCard) => {
      console.log(isLiked)
      const newCards = cards.map((c) => {return c._id === cardId ? newCard : c});
      setCards(newCards);
    });
}


console.log(cards)
  const [isEditProfilePopupOpen, editOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, avatarOpen] = React.useState(false);
  const [isAddPlacePopupOpen, placeOpen] = React.useState(false);
  const [card, selectedCard] = React.useState(null);

  const handleCardClick = ({link, name}) => {
    selectedCard({link, name});
  };

  function handleEditEditClick() {
    editOpen(true);
  }
  function handleEditAvatarClick() {
    avatarOpen(true);
  }
  function handleEditAddClick() {
    placeOpen(true);
  }
  function closeAllPopups() {
    placeOpen(false);
    avatarOpen(false);
    editOpen(false);
    selectedCard(null);
  }
  return (
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdatePlace={handleAddPlaceSubmit}/>
       <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditEditClick}
          onAddPlace={handleEditAddClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          handleDeleteCard={handleDeleteCard}
        />
        <ImagePopup card={card} onClose={closeAllPopups} />
        <Footer />
        </CurrentUserContext.Provider>
      </div>
   
  );
}

export default App;
