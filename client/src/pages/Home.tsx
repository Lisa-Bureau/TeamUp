import { Link } from "react-router";
import ActivityCard from "../components/ActivityCard";
import Carousel from "../components/Carousel";
import "../styles/Home.css";
import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";

const LIMIT = 10;

function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/activities?limit=${LIMIT}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((activities) => setActivities(activities.activities));
  }, []);

  return (
    <section className="homepage">
      <div className="hero-wrapper">
        <h1 className="homepage-title">TeamUp</h1>
        <article className="homepage-article">
          <p className="presentation">
            Envie de bouger, mais pas seul ? <br />
            TeamUp te permet de créer ou rejoindre des activités sportives avec
            des personnes qui partagent la même motivation.
          </p>
          <p>Trouve ton équipe et passe à l’action !</p>
        </article>
        <div className="superwrapper">
          <div className="homepage-button-wrapper">
            <Link to="/activities/page/1">
              <svg viewBox="0 0 109 106">
                <title>icon search</title>
                <path d="M72.2255 81.5987C64.5518 87.2787 88.4134 62.8779 81.6233 72.1533C81.7932 72.1398 81.4783 72.6541 80.4225 73.9432C80.4225 73.9432 98.5566 91.9549 107.458 101.122C110.549 104.463 104.973 111.133 101.185 107.651C93.1236 99.8302 74.0493 80.3934 74.0198 80.3617L72.2255 81.5987Z" />
                <path d="M45.5796 90.7066C57.2475 90.5933 68.7977 85.7607 77.1035 77.5523C86.968 67.8034 92.0475 53.3804 90.2758 39.6099C87.2399 16.0134 67.8416 0 45.2896 0C28.1546 0 11.5023 10.7187 4.19792 26.2609C-1.39364 38.1599 -1.40497 52.5262 4.19792 64.4457C11.4502 79.8791 27.8307 90.5412 44.9973 90.7066C45.1921 90.7066 45.387 90.7066 45.5796 90.7066ZM45.0449 83.1462C27.62 82.9785 11.3618 69.5026 8.12878 52.2249C5.84956 40.0449 10.152 26.8635 19.1148 18.2134C29.5774 8.11094 46.0236 4.72836 59.6989 10.4536C71.9333 15.5762 81.091 27.4707 82.7789 40.5751C84.2243 51.808 80.1938 63.5802 72.2731 71.6889C65.3245 78.803 55.58 83.0488 45.532 83.1462C45.3689 83.1462 45.208 83.1462 45.0449 83.1462Z" />
              </svg>
              <p>Explore</p>
            </Link>
            <Link to={auth ? "/publication" : "/sign-in"}>
              <svg viewBox="0 0 28 28">
                <title>icon add</title>
                <g>
                  <path d="M14 0C6.26817 0 0 6.26817 0 14C0 21.7318 6.26817 28 14 28C21.7318 28 28 21.7318 28 14C28 6.26817 21.7318 0 14 0ZM14 25.6666C7.55683 25.6666 2.33335 20.4432 2.33335 14C2.33335 7.55683 7.55683 2.33335 14 2.33335C20.4432 2.33335 25.6666 7.55683 25.6666 14C25.6666 20.4432 20.4432 25.6666 14 25.6666Z" />
                  <path d="M20.9998 12.8333H15.1667V6.99999C15.1667 6.35566 14.6443 5.83334 14 5.83334C13.3557 5.83334 12.8334 6.35566 12.8334 6.99999V12.8333H7.0021C6.35777 12.8333 5.83545 13.3557 5.83545 14C5.83545 14.6443 6.35777 15.1666 7.0021 15.1666H12.8333V21C12.8333 21.6443 13.3556 22.1666 14 22.1666C14.6443 22.1666 15.1666 21.6443 15.1666 21V15.1666H20.9997C21.644 15.1666 22.1663 14.6443 22.1663 14C22.1663 13.3557 21.6441 12.8333 20.9998 12.8333Z" />
                </g>
              </svg>
              <p>Créé</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="homepage-subtitle-wrapper">
        <h2 className="homepage-subtitle">Proposition d'activités</h2>
        <Link to="/activities/page/1">
          <p>voir plus</p>
        </Link>
      </div>
      <Carousel
        activities={activities}
        renderActivity={(activity) => <ActivityCard activity={activity} />}
      />
      <div className="faq-wrapper">
        <div>
          <h2 className="homepage-subtitle">Comment ça marche ?</h2>
          <article className="homepage-article">
            <p>
              🔎 Cherche une activité (sport, lieu, date, niveau).
              <br />🤝 Rejoins un groupe ou crée le tien.
              <br />🏅 Fais du sport avec des gens motivés.
            </p>
          </article>
        </div>
        <div>
          <h2 className="homepage-subtitle">Pourquoi utiliser TeamUp ?</h2>
          <article className="homepage-article">
            <p>
              ✅ Activités adaptées à ton niveau.
              <br /> ✅ Sport quand tu veux, où tu veux.
              <br />✅ Rencontre de nouvelles personnes.
              <br />✅ Pas besoin d’être inscrit dans un club.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Home;
