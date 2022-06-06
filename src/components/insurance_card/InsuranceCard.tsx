import { IonCard, IonCardHeader, IonButton, IonCardTitle, IonCardContent } from "@ionic/react";
import "./InsuranceCard.css";

type Props = {
  imgTitle: any;
  description: string;
  func: any;
};

const InsuranceCard: React.FC<Props> = ({ imgTitle, description, func }) => {
  return (
    <IonCard class="InsuranceCard ion-no-padding">
      <IonCardHeader>
        <IonCardTitle>
          <img src={imgTitle} alt="agro" />
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {description}
        <div className="button-container">
          <IonButton type="button" onClick={func} className="ion-text-capitalize">
            Escolher
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default InsuranceCard;
