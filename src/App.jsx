import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return(
        <section className='App'>
            <TwitterFollowCard isFollowing userName="camilorendon" name="Juan Camilo"/>
            <TwitterFollowCard isFollowing={false} userName="midudev" name="Midudev"/>
        </section>

        
    )
}