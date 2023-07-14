import { useParams } from "react-router-dom";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";
import Header from "../Components/Children/Header";
import { useEffect, useState } from "react";
import {
  MdEmail,
  MdFamilyRestroom,
  MdVerified,
  MdWaterDrop,
} from "react-icons/md";
import InfoCard from "../Components/Widgets/InfoCard";
import Footer from "../Components/Children/Footer";
import { BiMobile } from "react-icons/bi";
import { FaAddressCard, FaCrown } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
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
  const ic_mobile = <BiMobile />;
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
                {profile.role == "cr" && (
                  <div
                    style={{ background: " #ff322454", color: "#ff0000" }}
                    className="verified_badge"
                  >
                    <FaCrown /> <p>Class Representative</p>
                  </div>
                )}
              </div>
            </div>
            <div className="lab-4">Informations</div>
            <div className="info-cards-container">
              <InfoCard
                icon={ic_mobile}
                cardTitle={"Mobile Number"}
                cardValue={profile.phone}
                clipboard="true"
              />
              <InfoCard
                icon={<MdEmail />}
                cardTitle={"Email"}
                cardValue={profile.mail}
              />
              <InfoCard
                icon={<MdWaterDrop />}
                cardTitle={"Blood Group"}
                cardValue={profile.blood_group}
              />
              <InfoCard
                icon={<IoMdSchool />}
                cardTitle={"Education"}
                cardValue={
                  "Currently doing BSC Engineering at Rajshahi University of Engineering & Technology (RUET) "
                }
              />
              <InfoCard
                icon={<MdFamilyRestroom />}
                cardTitle={"Father's Name"}
                cardValue={profile.father}
              />
              <InfoCard
                icon={<MdFamilyRestroom />}
                cardTitle={"Mother's Name"}
                cardValue={profile.mother}
              />
              <InfoCard
                icon={<FaAddressCard />}
                cardTitle={"Permanent Address"}
                cardValue={profile.permanent_address}
              />
              <InfoCard
                icon={<FaAddressCard />}
                cardTitle={"Current Address"}
                cardValue={profile.present_address}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </AnimatedRoute>
  );
};

export default Profile;
