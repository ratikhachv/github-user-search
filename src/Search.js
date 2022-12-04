import React, { useContext } from 'react'
import searchIcon from "./imgs/search-icon.png"
import "./search.css"
import { Context } from './Context'


export default function Search() {
    const context = useContext(Context)
    return (
        <>
        {context.bgChangeActive ? 
        <section className="search-sect">
            <form action="">
                <img src={searchIcon} alt="" />
                <input className='search-bar' type="search" placeholder='Search GitHub username…' 
                value={context.searchValue} onChange={(e)=>context.searchUser(e)}/>
            </form>
                <p className='no-results'>{context.noResults}</p>
                <button onClick={context.confirm}>search</button>
            </section>
        :
        <section className="search-sect" id='active'>
        <form action="">
            <img src={searchIcon} alt="" />
            <input className='search-bar' type="search" placeholder='Search GitHub username…' 
            value={context.searchValue} onChange={(e)=>context.searchUser(e)}/>
        </form>
            <p className='no-results'>{context.noResults}</p>
            <button onClick={context.confirm}>search</button>
        </section>
        }
        </>
        
        )
}
