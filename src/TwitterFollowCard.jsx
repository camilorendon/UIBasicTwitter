// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({userName, name, isFollowing}) {
    console.log(isFollowing)
    return(

    <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                alt="El avatar de camilo"
                src={`https://unavatar.io/${userName}`} />
                <div className='followCard-info'>
                    <strong>{name}</strong>
                    <span className='userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='btn'>
                    Seguir
                </button>
            </aside>
        </article>
    )

}