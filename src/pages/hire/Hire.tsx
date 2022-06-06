import React from "react";
import { IonPage, IonGrid, IonRow, IonContent, IonButton } from "@ionic/react";
import InsuranceCard from "../../components/insurance_card/InsuranceCard";
import "./Hire.css";
import ffAgro from "../../assets/images/ff-agro.svg";
import ffCargo from "../../assets/images/ff-cargo.svg";
import ffEmpresas from "../../assets/images/ff-empresas.svg";
import ffPessoas from "../../assets/images/ff-pessoas.svg";
import ffRiscos from "../../assets/images/ff-riscos.svg";

const Login: React.FC = () => {
  const ffAgroDescription = "Seguro de florestas, patrimonial rural, penhor rural, seguro agrícola e seguro de animais";
  const ffCargoDescription = "Seguro transportador e seguro para o embarcador";
  const ffEmpresasDescription =
    "Seguros patrimoniais, responsabilidade civil geral, riscos de petróleo, aeronáutico e marítmo";
  const ffPessoasDescription = "Seguro stop loss, fiança locatícia e acidentes pessoais";
  const ffRiscosDescription = "Seguro stop loss, fiança locatícia e acidentes pessoais";

  return (
    <IonPage className="HireHomeInsurance">
      <IonContent fullscreen>
        <span className="title ion-text-wrap">Escolher meu primeiro seguro</span>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <InsuranceCard
              imgTitle={ffAgro}
              description={ffAgroDescription}
              func={() => {
                console.log("ffAgro");
              }}
            />
            <InsuranceCard
              imgTitle={ffCargo}
              description={ffCargoDescription}
              func={() => {
                console.log("ffCargo");
              }}
            />
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <InsuranceCard
              imgTitle={ffEmpresas}
              description={ffEmpresasDescription}
              func={() => {
                console.log("ffEmpresas");
              }}
            />
            <InsuranceCard
              imgTitle={ffPessoas}
              description={ffPessoasDescription}
              func={() => {
                console.log("ffPessoas");
              }}
            />
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <InsuranceCard
              imgTitle={ffRiscos}
              description={ffRiscosDescription}
              func={() => {
                console.log("ffRiscos");
              }}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
      <div className="footer">
        <IonButton className="skip-button ion-text-capitalize">Pular</IonButton>
      </div>
    </IonPage>
  );
};

export default Login;
