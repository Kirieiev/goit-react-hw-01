import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const friendClassNames = clsx(css.text, isOnline ? css.Online : css.Offline);
  return (
    <div className={css.card}>
      <img className={css.avatarCard} src={avatar} alt="Avatar" width="68" />
      <p className={css.name}>{name}</p>
      <p className={friendClassNames}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
