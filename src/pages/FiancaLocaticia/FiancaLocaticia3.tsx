import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar,IonTitle, IonButton } from "@ionic/react";
import "./FiancaLocaticia.css";

const FiancaLocaticia3: React.FC = () => {
  return (
    <IonPage className="FiancaLocaticia">
        
      <IonContent className="content">
        <div className="contentBox">
            <h5>Você concluiu a primeira etapa</h5>
            <img className="photo" src={require("./Analyze.png")}/>    
        </div>
        <IonButton className="permission ion-text-capitalize">Concordo</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default FiancaLocaticia3;