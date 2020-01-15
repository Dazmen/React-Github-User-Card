import React from 'react';
import FollowerCard from './followerCard'

const FollowerList = ({myFollowers}) => {
    console.log(myFollowers);
    return(
        <div>
            {myFollowers.map(item => {
                return <FollowerCard 
                key={item.id}
                myFollowers={item}
                />        
            })}
        </div>
    ) 
}

export default FollowerList;