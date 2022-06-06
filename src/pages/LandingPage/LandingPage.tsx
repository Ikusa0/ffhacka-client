import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./LandingPage.css";

const Home: React.FC = () => {
  return (
    <IonPage className="landingpage">
      <IonContent fullscreen>
        <body className="body">
          <div className="filter">
            <img src={require("./logo.png")}/>
            <h2>Um novo jeito de se sentir mais seguro</h2>
          </div>
          <IonButton className="login ion-text-capitalize"  href="/login">Acessar</IonButton>
          <IonButton className="register ion-text-capitalize"  href="/sign_up">Cadastre-se</IonButton>
        </body>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;

// model page:
// <IonPage>
//       <IonContent fullscreen>
//         <body className="body">
//           <IonHeader collapse="condense">
//             <IonToolbar>
//               <IonTitle size="large">Blank</IonTitle>
//             </IonToolbar>
//           </IonHeader>
//         </body>

//         <ExploreContainer />
//       </IonContent>
//     </IonPage>
