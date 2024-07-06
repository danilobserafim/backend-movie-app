
# Backend Movie App

Serviço criado para administrar uma aplicação que busca dados na api do <a href="https://www.omdbapi.com" target="_blank">OMDB</a>



  </br>

## Instalação
• Certique-se que tem a versão mais recente do node ou superior a versão do projeto.  
• Baixe esse repositorio para seu computador.  
• Execute o prompt de comando na pasta do projeto.   
 - npm install  
 - altere o arquivo ".env.example" para ".env"  
 - npx prisma migrate dev  
 - dê um nome para a migration (Init para inicialização)  
 - npm run dev (para iniciar o projeto)

  </br>

## Modo de uso
Após a inicialização a api estará rodando em <a href="http://localhost:3333" target="_blank">localhost:3333</a>.

  </br>
  
## Endpoints  
  

### [GET]/movies
 - Retorno da requisição:  
```json  
// 20240706083651  
// http://localhost:3333/movies  
  
[  
  {  
    "id": 16,  
    "Title": "Breaking Bad",  
    "Year": "2008–2013",  
    "Rated": "TV-MA",  
    "Released": "20 Jan 2008",  
    "Runtime": "49 min",  
    "Genre": "Crime, Drama, Thriller",  
    "Director": "N/A",  
    "Writer": "Vince Gilligan",  
    "Actors": "Bryan Cranston, Aaron Paul, Anna Gunn",  
    "Plot": "When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose• He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico• Determined to ensure that his family will have a secure future, Walt embarks on a career of drugs and crime• He proves to be remarkably proficient in this new world as he begins manufacturing and selling methamphetamine with one of his former students• The series tracks the impacts of a fatal diagnosis on a regular, hard working man, and explores how a fatal diagnosis affects his morality and transforms him into a major player of the drug trade.",  
    "Language": "English, Spanish",  
    "Country": "United States",  
    "Awards": "Won 16 Primetime Emmys• 157 wins & 247 nominations total",  
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",  
    "Metascore": "N/A",  
    "imdbRating": "9.5",  
    "imdbVotes": "2,159,536",  
    "imdbID": "tt0903747",  
    "Type": "series",  
    "totalSeasons": "5",  
    "Response": "True",  
    "Ratings": [  
      {  
        "Source": "Internet Movie Database",  
        "Value": "9.5/10"  
      },  
      {  
        "Source": "Rotten Tomatoes",  
        "Value": "96%"  
      }  
    ]  
  },  
  {  
    "id": 28,  
    "Title": "Game of Thrones",  
    "Year": "2011–2019",  
    "Rated": "TV-MA",  
    "Released": "17 Apr 2011",  
    "Runtime": "57 min",  
    "Genre": "Action, Adventure, Drama",  
    "Director": "N/A",  
    "Writer": "David Benioff, D.B• Weiss",  
    "Actors": "Emilia Clarke, Peter Dinklage, Kit Harington",  
    "Plot": "In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms• As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all• Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.",  
    "Language": "English",  
    "Country": "United States, United Kingdom",  
    "Awards": "Won 59 Primetime Emmys• 389 wins & 636 nominations total",  
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",  
    "Metascore": "N/A",  
    "imdbRating": "9.2",  
    "imdbVotes": "2,301,821",  
    "imdbID": "tt0944947",  
    "Type": "series",  
    "totalSeasons": "8",  
    "Response": "True",  
    "Ratings": [  
      {  
        "Source": "Internet Movie Database",  
        "Value": "9.2/10"  
      }  
    ]  
  }  
]  
  
```  
  
  </br>
  
### [GET]/movies/:id   
 - Retorno da requisição:  
```json  
// 20240706085745  
// http://localhost:3333/movies/tt2551516  
  
{  
  "id": 12,  
  "Title": "Google and the World Brain",  
  "Year": "2013",  
  "Rated": "N/A",  
  "Released": "18 Jan 2013",  
  "Runtime": "90 min",  
  "Genre": "Documentary, Drama",  
  "Director": "Ben Lewis",  
  "Writer": "N/A",  
  "Actors": "Brendan Price, Nicolas Chapman, Molly Malcolm",  
  "Plot": "The story of the most ambitious project ever conceived on the Internet, and the people who tried to stop it• In 1937 HG Wells predicted the creation of the \"World Brain\", a giant global library that contained all human knowledge which would lead to a new form of higher intelligence• Seventy year later the realization of that dream was underway, as Google scanned millions and millions of books for its Google Books website• But over half those books were still in copyright, and authors across the world launched a campaign to stop them, climaxing in a New York courtroom in 2011• A film about the dreams, dilemmas and dangers of the Internet, set in spectacular locations in China, USA, Europe and Latin America.",  
  "Language": "English, Spanish, Catalan, Japanese, German, French",  
  "Country": "Spain, United Kingdom, Germany, Greece",  
  "Awards": "1 win & 10 nominations",  
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTk1NjM4M15BMl5BanBnXkFtZTcwNDc3MDc4OA@@._V1_SX300.jpg",  
  "Metascore": "N/A",  
  "imdbRating": "6.7",  
  "imdbVotes": "944",  
  "imdbID": "tt2551516",  
  "Type": "movie",  
  "totalSeasons": null,  
  "Response": "True"  
}  
```  
  
  </br>
  
### [POST]/movies   

 - corpo da requisição  
```json  
{  
  "Title": "Bill & Ted's Excellent Adventure",  
  "Year": "1989",  
  "Rated": "PG",  
  "Released": "17 Feb 1989",  
  "Runtime": "90 min",  
  "Genre": "Adventure, Comedy, Music",  
  "Director": "Stephen Herek",  
  "Writer": "Chris Matheson, Ed Solomon",  
  "Actors": "Keanu Reeves, Alex Winter, George Carlin",  
  "Plot": "Two rock-'n-rolling teens, on the verge of failing their class, set out on a quest to make the ultimate school history report after being presented with a time machine.",  
  "Language": "English, French, German, Greek, Ancient (to 1453)",  
  "Country": "United States",  
  "Awards": "3 nominations",  
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg",  
  "Ratings": [  
    {  
      "Source": "Internet Movie Database",  
      "Value": "6.9/10"  
    },  
    {  
      "Source": "Rotten Tomatoes",  
      "Value": "82%"  
    },  
    {  
      "Source": "Metacritic",  
      "Value": "50/100"  
    }  
  ],  
  "Metascore": "50",  
  "imdbRating": "6.9",  
  "imdbVotes": "142,429",  
  "imdbID": "tt0096928",  
  "Type": "movie",  
  "DVD": "N/A",  
  "BoxOffice": "$40,485,039",  
  "Production": "N/A",  
  "Website": "N/A",  
  "Response": "True"  
}  
```  
 - Retorno da requisição:  
```json  
{  
  "id": 32,  
  "Title": "Bill & Ted's Excellent Adventure",  
  "Year": "1989",  
  "Rated": "PG",  
  "Released": "17 Feb 1989",  
  "Runtime": "90 min",  
  "Genre": "Adventure, Comedy, Music",  
  "Director": "Stephen Herek",  
  "Writer": "Chris Matheson, Ed Solomon",  
  "Actors": "Keanu Reeves, Alex Winter, George Carlin",  
  "Plot": "Two rock-'n-rolling teens, on the verge of failing their class, set out on a quest to make the ultimate school history report after being presented with a time machine.",  
  "Language": "English, French, German, Greek, Ancient (to 1453)",  
  "Country": "United States",  
  "Awards": "3 nominations",  
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg",  
  "Metascore": "50",  
  "imdbRating": "6.9",  
  "imdbVotes": "142,429",  
  "imdbID": "tt0096928",  
  "Type": "movie",  
  "totalSeasons": null,  
  "Response": "True"  
}  
```

## Tecnologías
• Node js  
• express  
• prisma
• Sqlite



## Licença
ISC



