import React from 'react';
import "./componentstyles/profilesetting.css";


interface UserProfileProps {
    user: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      jobtitle: string;
      specialist: string;
      location: string;


    };
  }
  
  const ProfileSetting: React.FC<UserProfileProps> = ({ user }) => {
    return (
      <div className="profile">
        <h2>User Profile</h2>
        <div className="profile-info">
          <div className="profile-item">
            <strong>First Name:</strong> {user.firstName}
          </div>
          <div className="profile-item">
            <strong>Last Name:</strong> {user.lastName}
          </div>
          <div className="profile-item">
            <strong>Cellphone:</strong> {user.phone}
          </div>
          <div className="profile-item">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="profile-item">
            <strong>Job Title:</strong> {user.jobtitle}
          </div>
          <div className="profile-item">
            <strong>Specialist:</strong> {user.specialist}
          </div>
          <div className="profile-item">
            <strong>Location:</strong> {user.location}
          </div>
        </div>
      </div>
    );
  };

export default ProfileSetting;