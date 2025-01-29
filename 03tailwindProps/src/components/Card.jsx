// short cut to get a functional component
// rfce or rafce


import React from 'react';
function Card({username="Give Name", post="Not assigned yet", user={name: 'default'}}) { 
// here incoming parameters is props. we have destructered it and also given a default value.
// in usual convention, we use props to take parameter and to access it we take props.username or props.post etc....
  return (

    // <div>
    //     <img src="https://picsum.photos/200" alt="" classNameName="m-auto block"/>
    //     <h1 classNameName='text-2xl bg-green-500 p-3 m-2 rounded'>
    //         A card for photos
    //     </h1>
    //     <p>
    //         Lorem, ipsum dolor sit amet consectetur
    //     </p>
    // </div>

    <div>
        <figure className="m-8 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="m-auto rounded-3xl" src="https://picsum.photos/200" alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I have seen scale
                        on large teams. It easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {/*here we are accessing the incoming input using js technique*/}
                        {username} 
                        {user.name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                        {user.age}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card