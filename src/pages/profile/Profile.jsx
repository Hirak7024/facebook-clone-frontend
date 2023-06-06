import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

export default function Profile() {
    return (
        <>
                < Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                            <img src="./assets/landscape.jpg" alt="" className="profileCoverImg" />
                            <img src="./assets/persons/person8.jpg" alt="" className="profileUserImg" />
                            </div>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">John Potter</h4>
                            <span className="profileDesc">Hello Friends</span>
                        </div>
                        <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                        </div>
                    </div>
                </div>
        </>
    )
}
