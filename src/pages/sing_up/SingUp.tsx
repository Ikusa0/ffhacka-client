import React from "react";
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonPage, IonCheckbox } from "@ionic/react";
import "./SingUp.css";
import singUpImage from "../../assets/images/Profile_Interface-amico.png";
import Header from "../../components/header/Header";

const SingUp: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [name, setName] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // enviar usuário para api
    // redirecionar para home
  }

  return (
    <IonPage className="SingUp">
      <Header />
      <IonContent fullscreen>
        <IonItem className="login-thumbnail">
          <div slot="start">
            <span className="title">Olá!</span>
            <span className="sub-title">Seja bem-vindo/a</span>
          </div>
          <img slot="end" className="login-image" src={singUpImage} alt="login" />
        </IonItem>
        <form onSubmit={handleSubmit} className="ion-padding-horizontal">
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              Nome
            </IonLabel>
            <IonInput onIonChange={(e) => setName(e.detail.value!)} value={name} type="text" />
          </IonItem>
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              E-mail
            </IonLabel>
            <IonInput onIonChange={(e) => setEmail(e.detail.value!)} value={email} type="email" />
          </IonItem>
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              CPF
            </IonLabel>
            <IonInput
              maxlength={14}
              onIonChange={(e) =>
                setCpf(
                  e.detail
                    .value!.replace(/\D/g, "")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                    .replace(/(-\d{2})\d+?$/, "$1")
                )
              }
              value={cpf}
              type="text"
            />
          </IonItem>
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              Senha
            </IonLabel>
            <IonInput onIonChange={(e) => setPassword(e.detail.value!)} value={password} type="password" />
          </IonItem>
          <IonItem className="ion-padding-horizontal">
            <IonLabel className="label-input" position="floating">
              Confirmar Senha
            </IonLabel>
            <IonInput
              onIonChange={(e) => setPasswordConfirmation(e.detail.value!)}
              value={passwordConfirmation}
              type="password"
            />
          </IonItem>
          <IonItem className="checkbox-container" lines="none">
            <IonLabel className="ion-text-wrap">
              <div className="text-container">
                <span className="text">
                  Concordo com os <span>Termos de uso</span> e <span>Políticas de privacidade</span>
                </span>
              </div>
            </IonLabel>
            <IonCheckbox defaultChecked={true} slot="start" />
          </IonItem>
          <IonButton routerLink="" className="submit-button" type="submit" expand="block">
            Cadastre-se
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SingUp;
