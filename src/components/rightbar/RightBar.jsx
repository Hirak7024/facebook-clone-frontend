import { Users } from '../../dummyData';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import './rightbar.css'

export default function RightBar({ profile }) {
    const HomeRightBar = () => {
        return (
            <>
            <div className="birthdayContainer">
                        <img src="./assets/gift.jpg" alt="" className="birthdayImg" />
                        <span className="birthdayText">
                            <b>Polar Foster</b> and <b>3 other friends</b> have their birthday today
                        </span>
                    </div>
                    <img src="./assets/advertisement.jpg" alt="" className="rightBarAd" />
                    <h4 className="rightBarTitle">Friends Online</h4>
                    <ul className="rightBarFriendList">
                        {Users.map(u => (
                            <OnlineFriends key={u.id} user={u} />
                        ))}
                    </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
            <h4 className="rightBarTitle">User Information</h4>
            <div className="rightBarInfo">
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">City : </span>
                    <span className="rightBarInfoValue">Jorhat</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">From : </span>
                    <span className="rightBarInfoValue">Guwahati</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">Relationship : </span>
                    <span className="rightBarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightBarTitle">User Friends</h4>
            <div className="rightBarFollowings">
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person2.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Margeretta</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person3.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Robert</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person4.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Bean</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person5.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Hirak</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person6.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Hamilton</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="./assets/persons/person7.jpg" alt="" className='rightBarFollowingImg' />
                    <span className="rightBarFollowingName">Harry</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <>
            <div className="rightbar">
                <div className="rightBarWrapper">
                   {profile ? <ProfileRightBar/> : <HomeRightBar />}
                </div>
            </div>
        </>
    )
}
