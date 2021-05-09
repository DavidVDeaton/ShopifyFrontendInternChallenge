import axios from "axios";

const movies =  {

    movieSearch: () => {

        const search = localStorage.getItem("movieSearch");

        return new Promise((resolve, reject) => {
          axios
            .get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=" + search)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
    },

  getMovies: () => {
    return new Promise((resolve, reject) => {
      axios
        .all([
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=armageddon"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=little miss sunshine"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=v for vendetta"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=dark knight"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=fight club"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=quantum of solace"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=wizard of oz"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=jaws"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=yesterday"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=ice age"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=raging bull"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=pulp fiction"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=zoolander"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=hotel rwanda"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=titanic"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=1917"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=matrix"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the help"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=juno"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=edge of tomorrow"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=kindergarten cop"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=catch me if you can"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=princess bride"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=13 going on 30"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=mean girls"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=x-men"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=number 23"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=saw"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=lion king"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=toy story"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=legally blonde"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=50 first dates"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=tropic thunder"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=kill the messenger"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=congo"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=rocky iv"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=airplane"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=red"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=king kong"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=inception"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=barbershop"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=cocoon"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=christmas story"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=die hard"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=fighter"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=hitch"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=mud"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=open range"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=lake placid"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movs=life of pi"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=speed"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=twilight"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the green mile"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=stardust"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=race"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=truman show"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=rocketman"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=mary poppins"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=jungle book"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=queen of katwe"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=1984"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=sphere"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=ransom"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the sixth sense"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the x files"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=iron giant"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=power of one"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=friday night lights"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=gladiator"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the ugly truth"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=training day"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=undercover brother"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=rambo"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the fugitive"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=october sky"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=hook"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=fracture"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the patriot"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=jurassic park"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=pitch perfect"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=bad boys"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the hurt locker"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=ghostbusters"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=what about bob"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=kill bill"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=500 days of summer"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=moonlight"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=caddyshack"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=what lies beneath"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=i am sam"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=saving private ryan"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=school of rock"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=godfather"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=behind enemy lines"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=cool runnings"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=home alone"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=apollo 13"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=get out"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=forrest gump"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=inside out"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=about time"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the avengers"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=cloverfield"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=anger management"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=crazy stupid love"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=game night"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=date night"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the queen"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=erin brockovich"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=godzilla"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=cinderella story"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=a knight's tale"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=invictus"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=bourne identity"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=yes man"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=eddie the eagle"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=just cause"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=a few good men"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=final destination"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=march of the penguins"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=cinderella man"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=seabiscuit"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=coach carter"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=megamind"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=american beauty"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=million dollar baby"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=field of dreams"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=robin hood"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the artist"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=braveheart"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=chicago"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=lincoln"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=crash"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the departed"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=patton"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=jfk"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the simpsons"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the goonies"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the prestige"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the illusionist"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=love actually"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=shakespeare in love"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=a beautiful mind"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=kramer vs. kramer"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=wedding singer"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=moonrise kingdom"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=pretty woman"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=the switch"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=dan in real life"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=rain man")

        ])
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("error", error);
            reject(error);
        });
    });
  }

};

export default movies;