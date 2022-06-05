import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">E-mail</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Login
          </IonButton>
        </form>
        <IonItem>
          <span>Esqueceu a senha?</span>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Login;
