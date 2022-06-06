import { IonTitle, IonToolbar, IonHeader } from "@ionic/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Header.css";

const Header: React.FC = () => {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <IonHeader className="header">
      <IonToolbar class="ion-no-border">
        <IonTitle className="ion-no-padding">
          <MdKeyboardArrowLeft onClick={handleClick} className="header-icon" />
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
