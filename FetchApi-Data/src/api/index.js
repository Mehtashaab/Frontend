const getPosts = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
       { method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
       }
    )
    const posts = await response.json()
    return posts

}

const getRandomUser = async()=>{
    const response = await fetch('https://randomuser.me/api/',
       { method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
       }
    )
    const users = await response.json()
  
    return users
}

export {getPosts,getRandomUser};