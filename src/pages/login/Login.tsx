import React from "react";
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonPage } from "@ionic/react";
import "./Login.css";
import loginImage from "../../assets/images/Mobile_login-amico.png";
import Header from "../../components/header/Header";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // enviar usuário para api
    // redirecionar para home
  }

  return (
    <IonPage className="Login">
      <Header />
      <IonContent fullscreen>
        <div className="login-thumbnail">
          <span className="title">Olá!</span>
          <span className="sub-title">Seja bem-vindo/a</span>
          <img className="login-image" src={loginImage} alt="login" />
        </div>
        <form onSubmit={handleSubmit} className="ion-padding-horizontal">
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              E-mail
            </IonLabel>
            <IonInput onIonChange={(e) => setEmail(e.detail.value!)} value={email} type="email" />
          </IonItem>
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              Senha
            </IonLabel>
            <IonInput onIonChange={(e) => setPassword(e.detail.value!)} value={password} type="password" />
          </IonItem>
          <IonButton routerLink="/sing_up" className="submit-button" type="submit" expand="block">
            Acessar
          </IonButton>
        </form>
        <IonItem routerLink="/login" className="link">
          <IonLabel>Esqueceu a senha?</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Login;
