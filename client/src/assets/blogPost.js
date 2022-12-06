import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function BlogPost() {
  const [blog, setBlog] = useState('')

    return (
      <div className='text-center'>
          <h1 className='HHC'>Fan-Base-Blog</h1>
    <div className='C card'>
      <section className='card-header'>
      <form>
        <div className='blog-m gfont'>
        <label><h2>Let the sports world know!</h2></label>
        <textarea
        type="text"
        required
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        >
        </textarea>
        </div>
        <button className='gfont'>Send</button>
        <section className='card'>
          <h3 className='gfont'>Feed</h3>
        <p className='Bpost-m'>{ blog }</p>
        </section>
      </form>
      </section>
  </div>
  <div className='row BPost-center'>
     <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Bob</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">Mike White looks like the real deal!</li>
                <li class="list-group-item">User100</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Adam</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">Baker to the Rams is interesting</li>
                <li class="list-group-item">User101</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Ian</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">With Jimmy G out, are the Seahawks taking the divison?</li>
                <li class="list-group-item">User102</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Josina</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">I really think Dallas can win the NFC</li>
                <li class="list-group-item">User103</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Blady</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">Do you guys think the New York Jets will make the playoffs?</li>
                <li class="list-group-item">User104</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Mike</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">The Giants STINK!!!!</li>
                <li class="list-group-item">User105</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Sal</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">Tom Brady should hang up the cleats</li>
                <li class="list-group-item">User106</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Conner</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">The Russell Wilson experiment has been a disater</li>
                <li class="list-group-item">User107</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Field Yates</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">Justin Fields looks like he's posied for a nice career</li>
                <li class="list-group-item">User108</li>
            </ul>
        </section>
    </section>
    <section class="card col-3 m-3">
        <section class="card-header">
            <h2 className='gfont'>Dan Orlovsky</h2>
        </section>
        <section class="card-body bg-secondary">
            <ul class="list-group">
                <li class="list-group-item">I wonder who's taking the #1 seed in the AFC</li>
                <li class="list-group-item">User109</li>
            </ul>
        </section>
    </section>
    </div>
      </div>
    )
  }