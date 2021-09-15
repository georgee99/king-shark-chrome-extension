let kingShark = [    
    "https://upload.wikimedia.org/wikipedia/en/2/2b/King_Shark%2C_The_Suicide_Squad%2C_June_2021.jpg",
    "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/King-Shark-via-Warner-Bros.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5", 
    "https://bbts1.azureedge.net/images/p/full/2021/08/08f436fa-269a-47a1-98f6-1c60821c6922.jpg",
    "https://eprimefeed.com/wp-content/uploads/2021/07/Why-King-Shark-Was-A-Very-Very-Difficult-Suicide-Squad.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2021/05/King-Shark-in-The-Suicide-Squad.png?resize=768%2C432",
    "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/08/The-Suicide-Squad-King-Shark.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/4/2021/07/king-sharkeating-e14a18e.jpg?quality=90&resize=960%2C408",
    "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1626583520550-6O6ICGD8MZ2JTM9ZK0GK/james-gunn-shares-the-suicide-squad-king-shark-hot-toys-action-figure.jpg"
];

var r = confirm("King Shark will be activated")

if(r == true){
    setTimeout(() => { console.log("Waiting for page to now load"); }, 5000);

    const imgs = document.getElementsByTagName("img")
    const sauce = document.getElementsByTagName("source")

    for(let i = 0; i<imgs.length; i++){
        const randomNum = Math.floor(Math.random() * kingShark.length)
        imgs[i].src = kingShark[randomNum];
        imgs[i].srcset = kingShark[randomNum];

    }

    for(let i = 0; i<sauce.length; i++){
        const randomNum = Math.floor(Math.random() * kingShark.length)
        sauce[i].srcset = kingShark[randomNum];
    }

    const a = document.querySelectorAll('h1, h2, h3')

    for(let i = 0; i<a.length; i++){
        a[i].innerText = "NOM NOM"
    }
} else {
    console.log("King shark stopped")
}
