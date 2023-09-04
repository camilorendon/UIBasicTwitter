import './App.css'

export function App(){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                alt="El avatar de camilo" 
                src="https://unavatar.io/camilorendon" />
                <div className='followCard-info'>
                    <strong>Juan Camilo Rendon</strong>
                    <span className='userName'>@ElGallego_1205</span>
                </div>
            </header>
            <aside>
                <button className='btn'>
                    seguir
                </button>
            </aside>
        </article>

        
    )
}