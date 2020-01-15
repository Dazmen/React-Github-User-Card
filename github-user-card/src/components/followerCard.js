import React from 'react';

const FollowerCard = ({myFollowers}) => {

    return(
        <div className="card">
            <img src={myFollowers.avatar_url} alt='profile thumbnail' />
            <div className="card-info">
                <p className="username">{myFollowers.login}</p>
                <p>Profile:   
                    <a href={myFollowers.html_url}> Check out {myFollowers.login}'s GitHub Profile!</a>
                </p>
            </div>
        </div>
    )
}

export default FollowerCard;

// return(
//     <div className="card">
//         <img src={myFollowers.avatar_url} alt='profile thumbnail' />
//         <div className="card-info">
//             <p className="username">{myFollowers.login}</p>
//             <p>Profile:   
//                 <a href={myFollowers.html_url}> Check out {myFollowers.login}'s GitHub Profile!</a>
//             </p>
//         </div>
//     </div>
//    ) 
