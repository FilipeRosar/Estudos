class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card__right"); // Fix: use setAttribute for cardRight

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || 'assets/img/photo_default.webp';
        newsImage.alt = 'Darth Vader';
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
        .card{
            width: 720px;
            border: 1px solid black;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.61);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .card__left, .card__right{
            border: 1px solid blue;
        }
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card__left > a{
            margin-top: 15px;
            font-size: 1.7rem;
            color: black;
            font-weight: 500;
            text-decoration: none;
        }
        .card__left > span{
           font-weight: 600;
        }
        .card__left > p{
            color: gray;
        }
        .card img{
            width: 300px;
        }
        `;

        return style;
    }
}

customElements.define("card-news", cardNews);
