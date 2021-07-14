import React from 'react';

const data = {
    dongnyeok: {
        name: "신동녘",
        description: "아장아장 걷는 중인 프론트엔드 개발자"
    },
    gildong: {
        name: "홍길동",
        description: "우주 최강 프론트엔드 개발자"
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>{ username }(profile.name)</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;