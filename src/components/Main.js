import React, { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

import Card from "./Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          onClick={onEditAvatar}
          src={currentUser.avatar}
          alt="Аватар"
          className="profile__avatar"
        />
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button btn"
            onClick={onEditProfile}
          ></button>
          <p className="profile__work">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button btn"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="card" aria-label="Карточки">
        <ul className="card__items">
          {cards.map((obj) => (
            <Card
              key={obj._id}
              obj={obj}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
