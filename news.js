class News {
    constructor(titre, desc) {
        this.titre = titre;
        this.desc = desc;
        this.Afficher();
        this.render();
        this.template();
    }
    Afficher() {
        console.log(this.titre + " : " + this.desc);
    }

    render()
    {
        let actu = document.getElementById("actu");
        actu.innerHTML += this.template();
    }

    template()
    {
        return ` <div class="news"> <h1> titre : ${this.titre} </h1> <p> description : ${this.desc} </p> </div> `;
    }
}