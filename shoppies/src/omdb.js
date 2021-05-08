import axios from "axios";

// const search = "office space";

const movies =  {

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
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=shawshank redemption"),
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
                axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=life of pi"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=fast and furious"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=eclipse"),
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
                axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=terminator"),
            axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=rogue one"),
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
                axios.get("https://www.omdbapi.com/?apikey=89a3b51e&type=movie&s=march of the penguins")
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
//   getA: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=armageddon")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getB: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=back to the future")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getC: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=cloverfield")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getD: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=dark knight")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getE: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=edge of tomorrow")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getF: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=fight club")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getG: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=godfather")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getH: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=hotel rwanda")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getI: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=ice age")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getJ: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=jurassic park")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getK: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=kill the messenger")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getL: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=life of pi")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getM: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=matrix")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getN: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=nacho libre")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getO: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=ocean's eleven")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getP: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=pulp fiction")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getQ: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=quantum of solace")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getR: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=raging bull")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getS: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=the sandlot")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getT: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=titanic")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getU: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=the usual suspects")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getV: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=v for vendetta")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getW: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=wizard of oz")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getX: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=x-men:apocalypse")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getY: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=yesterday")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getZ: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=zoolander")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },
//   getNo: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=1917")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },

//   getJuno: () => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=13 going on 30")
//             .then((response) => {
//               resolve(response);
//             })
//             .catch((error) => {
//                 console.log("error", error);
//                 reject(error);
//             });
//     });
//   },





};

export default movies;