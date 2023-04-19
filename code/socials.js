const socials = [
    {
        icon: "fa-twitter",
        link: "https://twitter.com/LukynkaCze"
    },
    {
        icon: "fa-github",
        link: "https://https://github.com/LukynkaCZE/.com/LukynkaCze"
    },
    {
        icon: "fa-discord",
        link: "https://https://github.com/LukynkaCZE/.com/LukynkaCze"
    },
    {
        icon: "fa-linkedin",
        link: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-jir%C3%A1k-9b7680268/"
    },
    {
        icon: "fa-twitch",
        link: "https://www.twitch.tv/lukynkacze"
    },
    {
        icon: "fa-envelope",
        link: "mailto:contact@lukynka.cz "
    },
]


function appendSocials() {
    var socialsDiv = document.getElementById("socials")
    socials.forEach(social => {
        var newSocialSpan = document.createElement("div")
        var newSocialIcon = document.createElement("a")

        newSocialIcon.href = social.link

        if(social.icon.includes("envelope")) {
            newSocialIcon.classList.add("fa-solid")
        } else {
            newSocialIcon.classList.add("fa-brands")
        }
        newSocialIcon.classList.add(social.icon)

        newSocialSpan.appendChild(newSocialIcon)
 
        socialsDiv.appendChild(newSocialSpan)
    }) 
}