import React from "react";
import { IonContent, IonPage, IonItem } from "@ionic/react";
import "./OnBoarding.css";

const OnBoarding1: React.FC = () => {
  return (
    <IonPage className="onboarding">
      <IonContent className="content">
        <IonItem routerLink="/Onboarding2">
          <h1>Solicite um seguro sem complicações</h1>
          <h2>Esqueça toda a burocracia</h2>
          <img className="spreadsheet" src={require("./Spreadsheet1.png")} />
          <img className="navdot" src={require("./Nav1.png")} />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default OnBoarding1;
