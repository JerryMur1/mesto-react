import Edit from "../images/Edit-Button.svg";
import Vector5 from "../images/Vector5.svg";
import Vector2 from "../images/Vector2.svg";
import Vector3 from "../images/Vector3.svg";
import Vector4 from "../images/Vector4.svg";
import Close from "../images/Close-icon.svg";
import Kusto from "../images/kusto.png";
import Delete from "../images/Group.svg";
// import api from '../utils/api';
import Card from "./card";

function Main({
  onCardClick,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  userName,
  userDescription,
  userAvatar,
  cards,
}) {
  return (
    <>
      <section className="profile">
        <div className="profile__groupe">
          <img className="profile__image" src={Vector5} />
          <button className="button_type_avatar" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Кусто"
              src={userAvatar}
              style={{ backgroundImage: `url(${userAvatar})` }}
            />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="button button_type_edit"
            type="button"
            onClick={onEditProfile}
          >
            <img
              className="profile__edit-button"
              src={Edit}
              alt="редактировать"
            />
          </button>
        </div>
        <button
          className="button button_type_add"
          type="button"
          onClick={onAddPlace}
        >
          <img className="profile__add-button" src={Vector3} alt="плюс" />
        </button>
      </section>

      <section className="elements">
        {cards.map(({ id, ...props }) => (
          <Card key={id} {...props} onCardClick={onCardClick} />
        ))}
      </section>
    </>
  );
}
export default Main;
