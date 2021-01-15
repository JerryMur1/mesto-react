import Delete from '../images/Group.svg'
import Vector2 from '../images/Vector2.svg'

function Card({name, likes, url, onCardClick}){
function handleClick(){
  onCardClick({url, name})
}

  return(
  

      <div className="element">
      <button className="button button_type_delete" type="button"><img className="element__delete" src={Delete} alt="Удаление"/></button>
      <button className="button button_type_image" onClick={handleClick} type="button"><img className="element__image" src={url} alt="Картинка"/></button>
      <div className="element__group">
  <h2 className="element__title">{name}</h2>
          <div className="element__like_groupe">
          <button className="button button_type_like" type="button"><img className="element__like" src={Vector2} alt="Лайк"/></button>
<p className="element__like_number">{likes.length}</p>
          </div>
      
      </div>
  </div>
  )
  }
export default Card