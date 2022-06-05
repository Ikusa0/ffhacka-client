import {
  IonContent,
  IonHeader,
  IonPage,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage className="landingpage">
      <IonContent fullscreen>
        <body className="body">
          <div className="filter">
            <img src={require("./logo.png")}/>
            <h2>Um novo jeito de se sentir mais seguro</h2>
          </div>
          <IonTabButton className="login" tab="login" href="/login">Acessar</IonTabButton>
          <IonTabButton className="register" tab="register" href="/register">Cadastre-se</IonTabButton>
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
