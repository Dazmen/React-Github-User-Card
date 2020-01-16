import React from 'react';

const UserCard = (props) => {

    return(
        <div className="card">
            <img src={props.myGithub.avatar_url} alt='profile thumbnail' />
            <div className="card-info">
                <h3 className="name"><strong>{props.myGithub.name}</strong></h3>
                <p className="username"><strong>{props.myGithub.login}</strong></p>
                <p>Location: <strong>{props.myGithub.location}</strong></p>
                <p>Profile:   
                    <a href={props.myGithub.url}> Check out {props.myGithub.name}'s GitHub Profile!</a>
                </p>
                <p>Followers: <strong>{props.myGithub.followers}</strong></p>
                <p>Following: <strong>{props.myGithub.following}</strong></p>
                <p>Bio: {props.myGithub.bio}</p>
            </div>
        </div>
    )
}

export default UserCard