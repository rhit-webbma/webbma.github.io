<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/bootstrap-material-design.min.css">
    <link rel="stylesheet" href="styles/main.css">
    <title>Michael Webb's Portfolio</title>
</head>

<body>

    <div class = "resumeContent container page-container">
        
        <div id = "resumeContainer" class = "row justify-content-center">

        <button id = "backBtn" class = "btn"> <i class="material-icons" style = "font-size: 15px;">arrow_back</i> Back</button>

        <h2 id = "header">Education</h2>
        <div id = "educationContainer" class = "row justify-content-center">
        

            <div id = "educationCards" class = "d-flex flex-row">
                <div class = "p-2">
                    <div class="card" style="width: 35rem;">
                        <div class="card-body">
                            <img id = "cardPhoto" src = "photos/HS.png">
                          <p class="card-title" style = "font-size: 20px;">Highschool Diploma</p>  
                          <p class="card-title text-muted">August 2015 - July 2019</p>
                          <button id = "rechsButton" class = "btn" data-toggle="modal" data-target="#rechsModal">More Info</button>
                        </div>
                      </div>
                </div>

                <div class = "p-2">
                    <div class="card" style="width: 35rem; height: 98%">
                        <div class="card-body">
                            <img id = "cardPhoto" style = "margin-top: 15px;" src = "photos/college.png">
                          <p class="card-title" style = "font-size: 20px; margin-top: 10px">Bachelors of Software Engineering</p>  
                          <p class="card-title text-muted" style = "margin-top: 8px;">September 2019 - Present : Software Engineering</p>
                          <button id = "roseButton" class = "btn" data-toggle="modal" data-target="#roseModal">More Info</button>
                        </div>
                      </div>
                </div>

            </div>

        </div>
        <h2 id = "header" style = "margin-top: 400px;">Work Experience</h2>
        <div id = "experienceContainer" class = "row justify-content-center">
        

            <div id = "experienceCards" class = "d-flex flex-row">
                <div class = "p-2">
                    <div class="card" style="width: 35rem;">
                        <div class="card-body">
                            <img id = "cardPhoto" src = "photos/job1.png" style = "width: 70%; margin-top: -15px;">
                        <p class="card-title" style = "font-size: 20px; margin-top: 15px;">Records Assisstant</p>  
                          <p class="card-title text-muted">August 2015 - July 2019 : Records Assisstant</p>
                          <button id = "topButton" class = "btn" data-toggle="modal" data-target="#topModal">More Info</button>
                        </div>
                      </div>
                </div>

                <div class = "p-2">
                    <div class="card" style="width: 35rem;">
                        <div class="card-body">
                            <img id = "cardPhoto" style = "width: 64%;" src = "photos/job2.png ">
                          <p class="card-title" style = "font-size: 20px;">Digital Analyst</p> 
                          <p class="card-title text-muted" style = "margin-top: 8px;">September 2019 - Present</p>
                          <button id = "lfgButton" class = "btn" data-toggle="modal" data-target="#lfgModal">More Info</button>
                        </div>
                      </div>
                </div>

                <div class = "p-2">
                    <div class="card" style="width: 35rem; height: 100%">
                        <div class="card-body">
                            <img id = "cardPhoto" style = "width: 100%" src = "photos/college.png">
                          <p class="card-title" style = "font-size: 20px; margin-top: 40px;">Sophomore Advisor</p> 
                          <p class="card-title text-muted" style = "">August 2015 - July 2019</p>
                          <button id = "saButton" class = "btn" data-toggle="modal" data-target="#saModal">More Info</button>
                        </div>
                      </div>
                </div>

            </div>

        </div>

        </div>

        <video autoplay muted loop id="backgroundVideo" style = "position: fixed">
            <source src="videos/Background_08.mp4" type = "video/mp4">
        </video>

    </div>




<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
<script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
<script src="scripts/main.js"></script>

</body>

  <!-- Rechs Modal -->
  <div class="modal fade" id="rechsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Rockingham Early College High School</h5>

          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <p>
                My main highschool that was a hybrid college and highschool, so I had the pleasure of learning the work ethic that
                is needed for both a job and college.
            </p>
            <hr>
            <br>
            <h6>Valuable Things Learned</h6>
            <ul>
                <li>A very good Work-Ethic</li>
                <li>Independent and Group Working Skills</li>
                <li>Leadership skills through certain projects</li>
            </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    <!-- Rose Modal -->
    <div class="modal fade" id="roseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Rose-Hulman Institue of Technology</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            <div class="modal-body">

              The college I am currently attending and possibly the best part of my life currently! There are so many things I've learned from here
              which I feel will help me much later in life. 
              <hr>
              <br>
              <h6>Valuable Things Learned</h6>
              <ul>
                  <li>Proficiency in small-scale game development in Java</li>
                  <li>Flexibility to learn both frontend and backend languages</li>
                  <li>Heavy Object-Oriented Programming knowledge</li> 
              </ul>
            

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

        <!-- Top Modal -->
  <div class="modal fade" id="topModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Top Care Priorty Services</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          My first real job, where I helped streamline the migration of paper records of a company to a more efficient online drive

          <hr>
          <br>
          <h6>Valuable Things Learned</h6>
          <ul>
              <li>Strong critical-thinking skills, and ability to find a solution even in a stressful situation</li>
              <li>First coop-leadership position</li>
              <li>Flexibility in working with people with different technological views</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    <!-- LFG Modal -->
    <div class="modal fade" id="lfgModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Lincoln Finanical Group</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              My first job which was considered in Corprate America. I worked for a couple of months in a digital analyst position
              where I assisted my team in migrating a new version of their secure site.

              <hr>
              <br>
              <h6>Valuable Things Learned</h6>
              <ul>
                  <li>My first real job in Corprate America, which helped me become comfortable in a more intense environment</li>
                  <li>Much more advanced team cooporation skills</li>
                  <li>A stronger sense of meeting deadlines, and working a 9-5</li>
              </ul>     

           
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

        <!-- SA Modal -->
  <div class="modal fade" id="saModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sophomore Advisor</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          A job that I admire very much. I help guide freshmen to have a better experience of Rose-Hulman, it is usually described as a step down from RA.

          <hr>
          <br>
          <h6>Valuable Things Learned</h6>
          <ul>
              <li>A much better grasp on Time Management</li>
              <li>Strong leadership skills in terms of people I may not know</li>
              <li>A step up on the social ladder, which has gotten me to become even more extroverted than I already am</li>
          </ul>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



</html>
