import React from "react";
import { IonContent, IonPage, IonItem } from "@ionic/react";
import "./OnBoarding.css";

const OnBoarding2: React.FC = () => {
  return (
    <IonPage className="onboarding">
      <IonItem routerLink="/Onboarding3">
        <IonContent className="content">
          <h1>Seu seguro em minutos</h1>
          <h2>Escolha o tipo de seguro que melhor se adapta às suas necessidades</h2>
          <img className="spreadsheet" src={require("./Spreadsheet2.png")} />
          <img className="navdot" src={require("./Nav2.png")} />
        </IonContent>
      </IonItem>
    </IonPage>
  );
};
export default OnBoarding2;