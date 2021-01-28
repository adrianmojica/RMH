import React from "react";
import './Home.scss'
import logo from '../assets/rmh.png'


function Home() {
  return (
    <div className="home">
      <header>
        <div class="jumbotron">
          <img className="logo" src={logo} alt="remote mental health logo" />
          <h1 class="display-4">Remote Mental Health Made Easy</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a class="btn btn-primary btn-lg btn-primary-rmh" href="/register" role="button">Register</a>
        </div>
      </header>


<section class="py-5 text-center services">
      <div class="container"> 
        <h2 class="text-center">Remote Mental Health Services</h2>
        <p class="mb-5 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
            </svg>
            <h6>Remote Therapy</h6>
            <p class="">Adjusting to today's world. Therapy from the comfort of your own home</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-intersect" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z"/>
            </svg>
            <h6>Cognitive Behavioral Therapy</h6>
            <p class="">challenging and changing unhelpful cognitive distortions and behaviors, improving emotional regulation and developing personal coping strategies</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-earmark-bar-graph-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
            </svg>
            <h6>Track your progress</h6>
            <p class="">Monitor your progress from session to session</p>
          </div>
          
        </div>
      </div>
</section>

<header class="text-center py-5 mb-4">
  <div class="container">
    <h1 class="font-weight-light text-white">Meet the Team</h1>
  </div>
</header>

<div class="container">
  <div class="row">
  
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        {/* <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="..."> */}
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Michael DeMarco</h5>
          <div class="card-text text-black-50">CEO and Head Therapist</div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        {/* <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" class="card-img-top" alt="..."> */}
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Therapist</div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        {/* <img src="https://source.unsplash.com/sNut2MqSmds/500x350" class="card-img-top" alt="..."> */}
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Supervisor / Therapist</div>
        </div>
      </div>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        {/* <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" class="card-img-top" alt="..."> */}
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Team Member</h5>
          <div class="card-text text-black-50">Therapist</div>
        </div>
      </div>
    </div>
  </div>
  

</div>


    </div>
  );
}

export default Home;
