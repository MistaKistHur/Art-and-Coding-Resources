// Move code over here, add back line by line until you find whats causing the issue.

"use-strict"; // headers().append ? console/mdn/w3c
    // ::>>                                  ................ ::>> Document Name:: main.js >> for:: https://www.art4coding.icu <<::
	// ::>> Note i've made two Modules folders in the github repo, delete one or merge the two into one.
	document.addEventListener("DOMContentLoaded",(function(){
			 console.log("Js File Loaded Successfully");
			 console.log("DomC Ran Successfully");
			    const t0 = performance.now(); // Testing only.
			    console.log(`::>>${t0}`);
			    console.log(`::>>Test AB Ref:: X678`);
	// ::>> Page Element Selectors <<:: ...................................................................................... <<::
		    (function getSelectors(){
				const Head          = document.querySelector("head");
				  let sts           = document.styleSheets;
				const Bodi          = document.querySelector("body");
				const BodyObjectArr = document.all;
				const Header     = document.querySelector("header");
				const Footer     = document.querySelector("footer");
				const TopNavLinx = document.getElementById("TopNavLinx");
		    }();
		    function eventDispatch(target, key, value, options){
		    	// ::>> What do i want happen if some action is taken on the page?
		    	// ::>> change an element on the page?
		    	// ::>> pass it to a web Worker?
		    	// ::>> fetch some resources?
		    	// ::>> send to Worklet?
		    	// ::>> log some info?

		    }

			let mediaResults = window.matchMedia("(max-width: 767px)");
			let prefs_dark   = window.matchMedia("(prefers-color-scheme: dark)");
	// ::>> Page Element Selectors <<:: ...................................................................................... <<::
	// ::>> Worker Scripts <<:: .............................................................................................. <<::
			if(window.Worker){
				const AnimeWorker       = new Worker('Workers/anime_worker.js');
				const InteractiveWorker = new Worker('Workers/page_interactions.js');
				// ::>> https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
			}
			if(window.Worklet){
				// ::>> Paint Worklets
			}

			if('serviceWorker' in navigator){          // ::>> Not Sure what this does yet?
				// ::>> ? https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
			}
	// ::>> Worker Scripts <<:: .............................................................................................. <<::
	// ::>> Media Querys Section <<:: ........................................................................................ <<::
			function isSmallScreen(){
				// ::>> Would be better as a turnary or switch statement.
				if(window.matchMedia("(max-width: 767px)").matches){
					return true;
				} return false;
			}
	// ::>> Media Querys Section <<:: ........................................................................................ <<::

    // ::>> Initial Reset's <<:: ............................................................................................. <<::
		      Bodi.style.display = "block !important";  /* ::>> This is not getting applied or over-riding inline style? */
    // ::>> Initial Reset's <<:: ............................................................................................. <<::

            // ::>> if(null)?
            // ::>> modules ? require()? include()?

		/* ::>> Notes            */

			// ::>> console.log(tick_one);
			// ::>> let e = e || evt || event;
	    (function PreSetUp(){
			// ::>> Pre-loading Screen Overlay?
			console.log(`::>> PreSetUp Fn Ran Successfully.`);
			 let UsrMetrix = [];     			// ::>> Unsure to use an array for this Json or Object might be better...
			 let MenuItems = [];
			 let PageActions = [];   			// ?
			 let ScrollAmnt = undefined;   		// ::>> Activatecertain animations based on Scroll Ammount/ Parallex.
			 let IframeConn = undefined;   		// ::>> Github Pages does not support server side stuff Use iframe merged?
			 let MaxConcuIframes = null;   		// ::>> Max number of iframes, if more generate remove prev.
			 let AssetCrate = {};
			    // ::>> UsrMetrix - - Device width, Device Height, User Agent : browser,
			                    // ::>> Os, Ios etc, First Conn Time, Js-Disabled, Sensors,
			                    // ::>> CountryLocation, Cookies? Refferer?
	    })();

	// ::>> Move these out ElseWhere maybe a module of its own[Probably better in Node not client-side]
			if(document.referrer == "google.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
			if(document.referrer == "github.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
			if(document.referrer == "facebook.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
			if(document.referrer == "linkedin.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
			if(document.referrer == "deviantart.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
			if(document.referrer == "devto.com"){
			    document.body.classList.add("googleRef") //or whatever you want
			}
	// ::>> Move these out ElseWhere maybe a module of its own












	    let blob = document.querySelector(".blob");
	        blob.animate({
	        	transform: ["scale(1)","scale(1.4)"]
	        },{
                iterations: Infinity,
                duration: 740,
                direction: 'alternate'
                // fill:
                // easeing:
	        })

		       // ::>> Has P5 loaded successfully?
		       // ::>> Has Three.js Loaded?
		       // ::>> Has GSAP Loaded?
		// ::>> Example Only
		// Put in a marquee style greeting message.......
            const RMapsOuterCard = document.getElementById("RMapsHoverActivator");

        // ::>> Test Bench{::>>Move Around<<::}.. <<:: ::>>....................................................................<<::
				//const t1 = performance.now();
				//console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
// console.log("::>> Testing, This Section Ran Ok" + performance.now() + "<<::" + (performance.now() - ${tick_one}));
        // ::>> Test Bench{::>>Move Around<<::}.. <<:: ::>>....................................................................<<::

                //RMapsOuterCard.addEventListener("mouseenter",(e) => {
                	// RMapsOuterCard.style.transition = `all 244ms ease-in-out`
                //}
                //RMapsOuterCard.addEventListener("mouseleave",(e) => {

                //}
/* ::>> GSap Animation Moving The Container Of The Revolver Maps ................................................................*/
	    const RMaps = document.getElementById("Rev_Maps");
		setTimeout(() => {
			  RMaps.classList.remove("disp_none");
	        let RevolverMapsGsap = gsap.fromTo(".r_maps_container",
	        	                        { opacity: 0 }, {
                                          opacity: 1,
                                         duration: 20.2287,
                                         ease: "slow(0.4, 0.8, false)",
                                         delay: 0.240
	        });
	        // Need to retain the hue-rotate but inverse the hue of the actual globe...
		},240)
            /* ::>> This is being glitchy sort it out... */
		//setTimeout(() => {
			// Create DomMouseEnter Event so its not Jumping straight to its position.
			document.addEventListener("mouseenter",(e) => {
			    // Todo...
			    let mouseEntered = true;
			    RMapsOuterCard.style.transition = `transform 748ms ease-in`;
					document.addEventListener("mousemove",(e) => {
						/* ::>> This Function Maybe used in other places so maybe make a module */
						// ::>> From this Answer :> https://stackoverflow.com/questions/5842747/how-can-i-use-javascript-to-limit-a-number-between-a-min-max-value
						// Create a forward facing pointer/vector which tells if the globe is right side up facing the user.
					    let xAxis = (window.innerWidth - e.pageX);
					    let yAxis = (window.innerHeight / 2 - e.pageY) / 2.45;

							function clamp(value, min, max) {
							    return Math.min(Math.max(value,min),max);
							}
							let newValX = clamp(`${xAxis}`, 0, 275);
							let newValY = clamp(`${yAxis}`, 0, 295);
						/* ::>> This Function Maybe used in other places so maybe make a module */

				            let mouseMoving = true;
				        RMapsOuterCard.style.transform = `rotateX(${newValY}deg) rotateY(${newValX}deg)`;
					}); // ::>> Closing Tag for Document MouseMove evt...

			        document.addEventListener("mouseleave",(e) => {
			            // Todo...
			             let mouseLeftWindow = true;
			        });
			});
		//}, 740);

		            // Handle touch events seperately.
		    //Docu.addEventListener("mouseleave",(e)=>{
		    //	RMapsOuterCard.style
		    //	RMapsOuterCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(0.885)`;
		    //})

/*::>> Scrap Code bits from this block
                     // if(mouseMoving === true){
                     	// RMapsOuterCard.style.transition = `transform 24ms ease-in-out`;
                     // }else if(mouseMoving === false){
                     	// RMapsOuterCard.style.transition = `none`;
                     //}
						    /*if(xAxis >= 360){
						    	xAxis = 360
						    }
						    if(yAxis >= 360){
						    	yAxis = 360
						    }*/
		// Divide Page width by 360
		// Divide Page height by 360
		// Wrap in windowResize Event
		//

/* ::>> GSap Animation Moving The Container Of The Revolver Maps ................................................................*/
/* ::>> Create A Welcome Message ................................................................................................*/
		var welcome = '{ "Welcome Message" : [' +
		                '{ "Hello":"New User" },' +      // Change these and use Math.random() + ifelse to select a random greeting.
		                '{ "Bonjour":"Partner" },' +
		                '{ "Buenos dias":"Chica" } ]}';
			// ::>> Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
		        var obj = JSON.parse(welcome);
		        console.log(obj);
		        // welcome.SomeMethod?
/* ::>> Create A Welcome Message ................................................................................................*/
   console.log(`::>> Test Ran Successfully:: ref x345`);

    (function UnloadAnimationAssets(){
    	// console.log(Docu);
    	console.log(this);
    	// require('Anime_Assets.json');
		    // Slide in from the right menu linx
    })();
        function P5Visual(){

        }P5Visual();

        /* Wait 2/8/180ms after page load and use gsap to fade items it, draw in from sides etc..
           Consider using parallax aswell... */
        // let h1Anime = gsap.to();  // Flame/Smoke reveal or not? fad in/ slide in?
        // let h2Anime = gsap.to();  // Fade in.

        // let navMenu = gsap.to();

        // CreateA P5.js Fractal?

		//if(!document.worker()){
		//	console.log("::>> err somewhere");
		//}

/* ::>> Three.js Set-up <<:: */
        function ThreeActive(){
             // Move three Code inside here for modularity...
			//var scene = new THREE.Scene();
			//var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			//var renderer = new THREE.WebGLRenderer();
			//renderer.setSize( window.innerWidth, window.innerHeight );
			//Docu.body.appendChild( renderer.domElement );
        }ThreeActive();
/* ::>> Three.js Set-up <<:: */


// ::>> Document End <<::........................................................................................................................................................
// ::>> Document End
// ::>> Document End
// ::>> Document End
        console.log("Testing ::>> no err :: ref: x123"); // move around for testing errors.
	})) /* ::>> Closing Tag for the MAIN body DOMC loaded event */
// ::>> Document End
// ::>> Document End
// ::>> Document End
// ::>> Document End
// ::>> Scraps & Notes Below <<::................................................................................................................................................



		  //let xhr_video = Docu.getElementsByClassName("xhr_video_request")[0];

		  //xhr_video.addEventListener("mousedown",(e) => {
                 // e.preventDefault();

                  //var vid_xhttp = new XMLHttpRequest();
                  //fetch();
		    // fetch extra videos, bump others out of view..
		  //});


/* ::>> Use PreventDefault on all top Nav a links then use Ajax/xhr to load in other content .... */
		//document.querySelector("#id-checkbox").addEventListener("click", function(event) {
		//         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
		//         event.preventDefault();
		//}, false);

    // this.applicationCache.onprogress; ......... <<:: Research These:
    // this.applicationCache.ondownloading; ...... <<:: Research These:
    // this = this || window || document;
    // ? mozRTCPeerConnection.generateCertificate();
    // ? HTMLAllCollection.bind
    // Math.radians => degrees × Math.DEG_PER_RAD
    // https://rwaldron.github.io/proposal-math-extensions/#sec-math.clamp


