import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar,IonTitle, IonButton } from "@ionic/react";
import "./FiancaLocaticia.css";

const FiancaLocaticia2: React.FC = () => {
  return (
    <IonPage className="FiancaLocaticia">
        
      <IonContent className="content">
        <div className="contentBox">
            <h5>Você concluiu a primeira etapa</h5>
            <h2>Agora precisamos da foto de um comprovante de endereço</h2>
            <img className="home" src={require("./SmartHome.png")}/>
            
            <div>
                <p><img className="lista" src={require("./Ellipse.png")}/>   Procure um lugar bem iluminado</p>
                <p><img className="lista" src={require("./Ellipse.png")}/>   Enquadre a imagem com os marcadores da tela</p>
                <p><img className="lista" src={require("./Ellipse.png")}/>   Tente manter a câmera parada</p>
            </div>
        </div>
        <IonButton className="permission ion-text-capitalize"  href="/fiancaLocaticia2">Tira foto</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default FiancaLocaticia2;