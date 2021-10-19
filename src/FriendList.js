import React, {useState} from 'react'
import Friend from './Friend'

const FriendList = () => {
    const [friends,setFriends] = useState([
        {
            id: 1,
            name: "Raymond Grant"
        },
        {
            id: 2,
            name: "Elon Musk"
        },
        {
            id: 3,
            name: "Ryan Reynolds"
        }
    ])
    return (
        <div>
            {friends.map(friend => 
                <Friend 
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                />
            )}
        </div>
    )
}

export default FriendList
