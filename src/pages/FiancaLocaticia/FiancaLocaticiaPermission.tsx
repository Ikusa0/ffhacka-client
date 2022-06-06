import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar,IonTitle, IonButton } from "@ionic/react";
import "./FiancaLocaticia.css";

const FiancaLocaticia1: React.FC = () => {
  return (
    <IonPage className="FiancaLocaticia">
        <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <div className="contentBox">
            <h1>Fiança Locatícia</h1>
            <h2>Agora precisamos da foto de um comprovante de endereço</h2>
            <img className="home" src={require("./SmartHome.png")}/>
            <img className="photo" src={require("./Photo.png")}/>
            <h3>Nesta etapa, precisamos da sua permissão para utilizar a câmera do seu dispositivo.</h3>
        </div>
        <IonButton className="permission ion-text-capitalize"  href="/fiancaLocaticia2">Permitir e continuar</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default FiancaLocaticia1;