import React from 'react';
import '../styles/ProfileViewer.css';

const ProfileInfo = ({ profile }) => {
  return (
    <div className="profile-container">
      <h1> <strong>Github user</strong>  </h1>
      <img src={profile.avatar_url} alt={profile.name} className="profile-image" />
      <h2>{profile.name}</h2>
      <div className="profile-text">
        <p>{profile.bio}</p>
        <ul>
          <li>Abonnés : {profile.followers}</li>
          <li>Abonnements : {profile.following}</li>
          <li>Créé le : {new Date(profile.created_at).toLocaleString()}</li>
          <li>Modifié le : {new Date(profile.updated_at).toLocaleString()}</li>
        </ul>
        <p>URL repositories : <a href={profile.repos_url}>{profile.repos_url}</a></p>
      </div>
    </div>
  );
};

export default ProfileInfo;
