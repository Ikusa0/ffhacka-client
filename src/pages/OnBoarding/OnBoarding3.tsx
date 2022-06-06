import React from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";
import "./OnBoarding.css";

const OnBoarding3: React.FC = () => {
  return (
    <IonPage className="onboarding">
        <IonContent className="content">
          <h1>A agilidade de agora, a confiança de sempre</h1>
          <h2>Modernizamos para lhe oferecer um melhor serviço</h2>
          <img className="spreadsheet" src={require("./Spreadsheet3.png")} />
          <img className="navdot" src={require("./Nav3.png")} />
          <IonButton className="choseInsurance ion-text-capitalize"  href="/login">Escolher meu primero seguro</IonButton>
        </IonContent>
    </IonPage>
  );
};
export default OnBoarding3;