import React, { Component } from 'react';
//import Display from './Display';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      activeCategory: '',
      showing: false,
      data: {
        al: {
          title: "Application Lab",
          content: "Side Project: EGB Flower App",
          heading1: "Personal Statement",
          p1:"My background in coding is quite short, I have only taken one other entry-level coding course focused on Processing and Ardunio. My background in Economics is short, having only taken one Economics class my Sophomore Year of High School. Since I had the bright idea to major in IMB, I have to play catch up, especially in coding, as I have only been taking /useful/ business classes like: Accounting, Statistics, and Information Technology in Business and Society.",
          heading2:"Project Summary",
          p2:"Since I am an IMB major, both Application Lab and Economics of Global Business are required courses. I decided to kill two birds with one stone, creating a study application for EGB in Application Lab. Since I knew some Javascript and was in the process of learning React I coded using React as I moved previously Vanilla Javascript elements into Components to make building easier. Since I haven't actually studied Microeconomics, I don't technically have the appropriate prerequisites to be in EGB, but I can code, so might as well create something to help me catch up.",
          heading3:"Research",
          p3:"I collected the data to be used in the game through reading: Economics of Global Business (MIT Press) (i.e The book my professor wrote). Every vocabulary term that I didn't understand ended up appearing in my application. The application is targetted at students with limited prior economics knowledge. Furthermore, when I looked into student studying behavior, I noticed an allarming trend where students would skip questions that were too hard, or just show the answers to questions they didn't know, hence why both of those functionalities are not included in this application. The goal here is to actually learn the termonology covered in the course as opposed to memorizing the content only to brain-dump it after the exam. ",
          heading4:"Prototype",
          p41: <a href="https://egbapp.herokuapp.com">Try it Here</a>,
          p4: <iframe width="560" height="315" src="https://www.youtube.com/embed/Opsg2oia8d0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          heading5:"Future Work",
          p5:"This depends on how I do in EGB. I would love to work with my professor to make review games for his midterms, granted I feel like that is more of a Learning Assistant job, and I know NOW I won't be the learning assistant for this course. But next steps would be categorizing the questions based on difficulty to make it a little bit easier to navigate the 'random' questions. Only then would I feel comfortable user testing, that being said I showed my EGB professor that I made this. He was... not impressed. I think I can still work on the CSS to make it more visually appealing, but the coding took so long to get it to this stage, I didn't bother to do anything too fancy. I don't think it is worse without all the pretty packaging, but I understand from a user point-of-view that is just as important as a functional, complicated application.",
        },
        dt: {
          title: "Design Thinking",
          content: "Course Design Project",
          heading1: "Scope",
          p1:"The project was to fill in the following question: 'How might we improve the life quality of _______ as our world is becoming more mobile and connected?'. In our case, my group-mates: Dora Zhou and Youngwoo Kim selected Food Delivery Drivers, specifically Eleme Drivers. The issues of self-development and career stagnation quicjly rose to the forefront. Eventually we found that at the core of the issues of Eleme drivers was the lack of fast, easy, flexible education. We developed 说了么, the first oral based language learning app to teach drivers foreign languages and Chinese dialects alike using the top ten most common terms used in food delivery.",
          heading2: "Campaign Video",
          p2: <iframe width="560" height="315" src="https://www.youtube.com/embed/_mTf6nCF9pA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          heading3:"Presentation",
          p3:<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSmjQXoVFVtcJTLtBHpVyo9SwZxYQffDlyBGcSm4H4VZxfU1TTgNKnDSrCoU0wx66JJxhnmFx8OS9qD/embed?start=true&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>,
          heading4:"WeChat Prototype",
          p4:<iframe width="560" height="315" src="https://www.youtube.com/embed/rquFgZXdeYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          content2: "Mini Design Project",
          heading5: "Scope",
          p5:"Paired again with Dora Zhou, we were tasked with re-designing a menu experience. We focused on the physical menu experience as opposed to digital, because in China espeically food delivery has taken over. There is very little motivation to go out to eat in a restaraunt, why not make the experience more interactive while focusing on relaying nutrition information and allowing for easy-customization. ",
          heading6:"Presentation",
          p6:<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR66C3sZ0jOpiWjwytJxPcTyI21mhHBkaYYw8i79gmK9modqn3iVu6B_k8kNl79mQVJKYvZIk_hW6t6/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>,
          heading7:"User Video",
          p7:<iframe width="560" height="315" src="https://www.youtube.com/embed/pVP42JDnzXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        il: {
          title: "Interaction Lab",
          heading1: "Scope",
          p1:"This is an entry level coding course focusing on coding basics in Arduino and Processing. The course is looking at user interaction and how students interact and use those interactions as a way to collect data to use to create a project. Weekly recitations allow you opportunities to practice using basic elements of coding, such as functions, objects, classes, etcetera. My final project: Allergy Catcher was an allergy education game targetted at eight-year-old children who are more aware of their classroom surroundings, and hence have a motivation to care about the safety and wellbeing of their classmates. ",
          heading2: "Final Project",
          p2:<iframe width="560" height="315" src="https://www.youtube.com/embed/CAzubrSvfQs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          heading3:"Recitation Sample",
          p3:<iframe width="560" height="315" src="https://www.youtube.com/embed/mqcp4n8OXEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          heading4: "Learning Assitant",
          p41:"In the Spring 2018 semester I worked as a Learning Assitant as I had earned an A. This qualified me to work as part of the Academic Resource Center to help my classmates complete the course.",
        },
        fp: {
          title: "Future Projects",
          heading1: "2019",
          p1:"The goal for now is to continue being a Learning Assistant somewhere in IMA. I will be taking three IMA Classes in Fall 2019, so that will be exciting. I'll list the projects from Critical Data & Visualization, Artificial Intelligence Arts, and Machine Learning for New Interfaces here (at some point).",
          heading2: "2020",
          p2:"Spring 2020: Accra ... Fall 2020: New York ??? To be determined...",
          heading3: "2021",
          p3:"Spring: GRADUATE",
          heading4:"Beyond",
          p4:"World Domination",
        },
        os: {
          title: "Other Shenanigans",
          heading1: "Travelling",
          p1:<a href='https://drive.google.com/file/d/1612w1JpmFdAYuVsmenXY1zuZi-p42H6n/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh6.googleusercontent.com/vjsRC2NXU82iuBKypmEcGVw8Zaod05zVil43P_A6SITzgzvwgV7lF4RTwmc=w2400' width="500" height="800" /></a>,
          p2:<a href='https://drive.google.com/file/d/1WNrTc2oMnzZjtMmGF9dSlB7CK2yoeDnS/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh4.googleusercontent.com/rs7powPrudB5CYgHr2b-a9N3tzAnNftZOWTM8HGqHiYpCI9Wsbb6a2J5vbE=w2400' width="800" height="500"/></a>,
          p3:<a href='https://drive.google.com/file/d/19lszunjoEDSkRIV0l-8rllHQEuG_igo_/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh3.googleusercontent.com/4N35ONaH36Y2Q0p_T1TXqfRdEYAi2AVuaosygTIRX2LE0ybhfPuQktzQLkM=w2400' width="500" height="800"/></a>,
          p41:<a href='https://drive.google.com/file/d/1d2QeuK_QjG29wWeOX_6xHJH5Nwh7gaog/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh6.googleusercontent.com/MMCuaS2LFmX8n2A880fSFxXFxmHZ1i4QIstZtlwcB_SNNpuWJ10wfrrcO3Y=w2400' width="800" height="500"/></a>,
          heading5:"Volunteer Work",
          p5:<a href='https://drive.google.com/file/d/1KSfHzpL53uuKqQoZU66pYnIekoAP7KoH/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh5.googleusercontent.com/kzsCoTwbgOXiJ69wPaZxC87LQ-K1hR-RQjV90zYf7Oxy1sf4iQn6n7hfngE=w2400' width="500" height="500"/></a>,
          p6:<a href='https://drive.google.com/file/d/17f9Eigv5h7_hJLeTM0MFUr0AM666gCyy/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh3.googleusercontent.com/ZRvinGROBjzYIGUYbKLfohagVFx-1VIFJTrzCp3L8uRMRSycvanEpUU2IgE=w2400' width="500" height="500"/></a>,
          p7:<a href='https://drive.google.com/file/d/1ouScS-NUU-AZo2YQ5iw-3r2xwPUyS2hU/view?usp=sharing&amp;usp=embed_facebook&source=ctrlq.org'><img src='https://lh5.googleusercontent.com/oyZkonppDIWlNNXkIq3KH6TlCNPsPG1OLu0BJqxha_Ap7JTGaku1zr4akaM=w2400' width="500" height="500"/></a>,
        },
      cm: {
        title: "Contact Me",
        heading1: "About Me",
        p1:"Interactive Media Business Major + Minoring in Public Health ... I have skills and stuff... not many, but enough",
        heading2: "Contact Information",
        p2:<a href="linkedin.com/in/eszter-vigh- 57191a151">LinkedIn</a>,
        p3:<a href="https://github.com/esztvi">Git Hub</a>,
      }
      }

    }
  
  }

  _handleClick = id => {
    this.setState({ [id]: true, showing: true});
  };
  toggle(e) {
    let categoryName = e.currentTarget.id
		this.setState({
      showing: !this.state.showing,
      activeCategory: categoryName
    });
    console.log(this.state.activeCategory);
	}
  
  // handleChange(event) {
  //   this.setState({value: event.target.display});
  // }

  render() {
    // const { showing } = this.state;
    var showing = {
			display: this.state.showing ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.showing ? "none" : "block"
		}
    return (
      <div className="App">
      <div>
        <h2> Eszter Vígh Portfolio</h2>
        </div>
        <div id="root"></div>
    <div class="wrapper">
      <div id="portfolioGrid">
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id="al" onClick={this.toggle.bind(this)} > <h3>Application Lab</h3></button>
          </div>
          <img src="https://picsum.photos/id/431//200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>Spring 2019</p>
          </div>
        </a>
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id = "dt" onClick={this.toggle.bind(this)}><h3>Design Thinking</h3></button>
          </div>
          <img src="https://picsum.photos/id/527/200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>Spring 2019</p>
          </div>
        </a>
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id ="il" onClick={this.toggle.bind(this)}><h3>Interaction Lab</h3></button>
          </div>
          <img src="https://picsum.photos/id/1079/200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>Spring 2018</p>
          </div>
        </a>
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id ="fp" onClick={this.toggle.bind(this)}><h3>Future Projects</h3></button>
          </div>
          <img src="https://picsum.photos/id/737/200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>and a plot for world domination</p>
          </div>
        </a>
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id ="os" onClick={this.toggle.bind(this)}><h3>Other Schenanigans</h3></button>
          </div>
          <img src="https://picsum.photos/id/554/200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>what I get up to in my free time</p>
          </div>
        </a>
        <a class="grid-item" href="#"> 
          <div class="overlay-top">
          <button id ="cm" onClick={this.toggle.bind(this)}><h3>Contact Me</h3></button>
          </div>
          <img src="https://picsum.photos/id/239/200/?grayscale" alt="#" />
          <div class="overlay-bot">
            <p>if you dare</p>
          </div>
        </a>
      </div>
    </div>
        <div>
        {/* <Display></Display> */}
        </div>
      <div>
        {(this.state.activeCategory !== "") ?
        <div class="content-single">
          <h1>{this.state.data[this.state.activeCategory].title}</h1>
          <h2>{this.state.data[this.state.activeCategory].content}</h2>
          <h3>{this.state.data[this.state.activeCategory].heading1}</h3>
          <p>{this.state.data[this.state.activeCategory].p1}</p>
          <h3>{this.state.data[this.state.activeCategory].heading2}</h3>
          <p>{this.state.data[this.state.activeCategory].p2}</p>
          <h3>{this.state.data[this.state.activeCategory].heading3}</h3>
          <p>{this.state.data[this.state.activeCategory].p3}</p>
          <h3>{this.state.data[this.state.activeCategory].heading4}</h3>
          <p>{this.state.data[this.state.activeCategory].p41}</p>
          <p>{this.state.data[this.state.activeCategory].p4}</p>
          <h2>{this.state.data[this.state.activeCategory].content2}</h2>
          <h3>{this.state.data[this.state.activeCategory].heading5}</h3>
          <p>{this.state.data[this.state.activeCategory].p5}</p>
          <h3>{this.state.data[this.state.activeCategory].heading6}</h3>
          <p>{this.state.data[this.state.activeCategory].p6}</p>
          <h3>{this.state.data[this.state.activeCategory].heading7}</h3>
          <p>{this.state.data[this.state.activeCategory].p7}</p>
        </div>
        : ""}
			</div>
      </div>
    );
  }
}

export default App;
