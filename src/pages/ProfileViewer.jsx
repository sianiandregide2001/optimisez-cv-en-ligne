import React, { useState, useEffect } from 'react';
import ProfileInfo from '../pages/ProfileInfo';
import '../styles/ProfileViewer.css';

export default function ProfileViewer() {
  const [profile, setProfile] = useState(null);
  const username = 'github-john-doe';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [username]);

  return (
    <div className="profile-viewer">
      {profile ? (
        <ProfileInfo profile={profile} />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
