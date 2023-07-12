import { useParams } from "react-router-dom";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";
import Header from "../Components/Children/Header";
import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import InfoCard from "../Components/Widgets/InfoCard";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [isPending, setIsPending] = useState(true);
  const { slug } = useParams();
  useEffect(() => {
    fetch("/db/source.json")
      .then((data) => data.json())
      .then((body) => {
        setProfile(body.filter((item) => item.slug == slug)[0]);

        setIsPending(false);
        console.log(profile);
      });
  }, []);
  return (
    <AnimatedRoute>
      <Header />
      <div className="profile_container">
        {!isPending && (
          <>
            <div className="ude7yd3i3ej">
              <div className="dp045dswh">
                <img
                  src={
                    profile.profile_image
                      ? "res/thumbnail/" + profile.roll + "_ete_21.png"
                      : "res/thumbnail/avatar.png"
                  }
                />
              </div>
              <div className="pr0fidj_j3iej3dem">
                <div className="998304urr4">{profile.fname}</div>
                <div className="roll0i98">
                  #{profile.roll} &middot; @{slug}
                </div>
                {slug == "shazin" && (
                  <div className="verified_badge">
                    <MdVerified /> <p>Site Maintainer</p>
                  </div>
                )}
              </div>
            </div>
            <div className="lab-4">Informations</div>
            <div className="info-cards-container">
              <InfoCard
                cardTitle={"Name"}
                cardValue={"Shahoriar Rahman"}
                clipboard="true"
              />
              <InfoCard
                cardTitle={"Email"}
                cardValue={"Shahoriar Rahman"}
                clipboard="true"
              />
            </div>
          </>
        )}
      </div>
    </AnimatedRoute>
  );
};

export default Profile;
