import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Load.css";
const Load: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <body className="load" >
          <img src={require("./logo.png")} />
        </body>
      </IonContent>
    </IonPage>
  );
};

export default Load;