//Loop and display service cards
const services = [			
    {name: "Lawn Mowing",
    icon: "mower.png",
    },
    {name: "Fertilization",
    icon: "grass.png",
    },
    {name: "Bush Shaping",
    icon: "bush.png",
    },
    {name: "Tree Trimming",
    icon: "trees.png",
    },
    {name: "Fence Building",
    icon: "fence.png",
    },
    {name: "Brick & Stone Walkways",
    icon: "brick.png",
    },   
    {name: "Gutter Cleaning",
    icon: "blower.png",
    },  
    {name: "Roof Cleaning",
    icon: "roof.png",
    },      
    {name: "Power Washing",
    icon: "hose.png",
    },     
    {name: "Sprinkler Installation",
    icon: "sprinkler.png",
    },	
    {name: "Pesticide Treatment",
    icon: "pesticide.png",
    },
    {name: "Design Services",
    icon: "sketch.png",
    },					
]

const serviceDiv=document.getElementById("services");

services.forEach(service => {
    let serviceCard=document.createElement("div");
    serviceCard.className="flex service";
    serviceCard.innerHTML=`<h2>${service.name}</h2><img src="./images/${service.icon}"></img>`
    serviceDiv.appendChild(serviceCard);    
});

//Scroll button to top
const scrollBtn = document.getElementById("scroll");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
}

scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

//Expand UL for Mobile Nav
const mobileNavBtn = document.getElementById("mobile-nav-icon");
const mobileLinks = document.querySelector(".mobile").firstElementChild;

mobileNavBtn.addEventListener("click", () => {
    mobileLinks.classList.toggle("mobile-show");
})