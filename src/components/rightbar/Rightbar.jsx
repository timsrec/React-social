import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/birthday.png" alt="" />
          <span className="birthdayText"> 
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
          <img className="rightbarAd" src="assets/ad.png" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ui className="rightbarFriendList">
          {Users.map(u=>(
              <Online key={u.id} user={u} />
            ))}
          </ui>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lagos</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Sango</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/persons/1.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/persons/2.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/persons/3.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/persons/4.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/persons/5.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/persons/6.jpg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Precious</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar />}
        </div>
    </div>
  );
}
