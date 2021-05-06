import axios from "axios";

const search = "The Office";
// const searchA = "Armageddon";
const movies = {

  getMovies: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=" + search)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("error", error);
            reject(error);
        });
    });
  },
  getA: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=armageddon")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getB: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=back to the future")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getC: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=catch me if you can")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getD: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=dark knight")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getE: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=edge of tomorrow")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getF: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=fight club")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getG: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=godfather")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getH: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=hotel rwanda")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getI: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=ice age")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getJ: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=jurassic park")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getK: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=kindergarten cop")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getL: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=little miss sunshine")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getM: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=matrix")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getN: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=the number 23")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getO: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=ocean's eleven")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getP: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=pulp fiction")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getQ: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=quantum of solace")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getR: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=rocky iv")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getS: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=shawshank redemption")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getT: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=titanic")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getU: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=the usual suspects")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getV: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=v for vendetta")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getW: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=wizard of oz")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getX: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=x-men")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getY: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=yesterday")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getZ: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=zoolander")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },
  getNo: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=1917")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },

  getJuno: () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://www.omdbapi.com/?apikey=1b06fe82&type=movie&s=juno")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
                console.log("error", error);
                reject(error);
            });
    });
  },





};

export default movies;