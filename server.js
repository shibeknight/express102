var express = require("express");

var app = express();

var PORT = 8080;

app.use(express.static("pages"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var dogs = [
  {
    name: "sora",
    breed: "shiba inu",
    age: 3,
  },
  {
    name: "Juno",
    breed: "golden retriever",
    age: 5,
  },
  {
    name: "koromaru",
    breed: "shiba inu",
    age: 5,
  },
];

app.get("/dogs", function (req, res) {
  console.log("We are in the endpoint for dogs!");
  res.json(dogs);
});

app.get("/dogs/:breed", function (req, res) {
  var chosenDog = req.params.breed;

  for (var i = 0; i < dogs.length; i++) {
    if (chosenDog === dogs[i].breed) {
      return res.json(dogs[i]);
    }
  }
  res.send("no dog found");
  console.log(chosenDog);
});

app.post("/dogs", function (req, res) {
  console.log(`here is the body from req.body, we are adding this dog: ${req.body}`);
  console.log(req.body);
  var newdog = req.body;
  dogs.push(newdog);
  res.send(dogs);
});

app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
