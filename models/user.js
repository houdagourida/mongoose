const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({name:{type:String,uppercase:true,required:true},email:{type:String,lowercase:true,required:true},adress:String,Age:Number,created:{type:Date,default:Date.now()}})

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = function(done) {
  const person = new Person({
    name:"ahmed",
    age: 22,
    favoriteFoods: ['sushi']
  });
  
  person.save((err, data)=> err ? done(err) : done(null, data));
};
const  findPeopleByName = function(personName, done) {

  const  query = Person.find( {name: personName})
      query.exec(function (err, data) {
       if(err) return done(err)
      return done(null,data);     
      }); 
   }
   const  findOneByFood = function(food, done) {
  
    Person.find({favoriteFoods:food},(err,data)=>{
    //  console.log(food);
    //  console.log(data);
      if(err) return done(err)
       done(null,data)
    }); 
  };
  const findPersonById = (personId, done) => {
    Person.findById(Person.personId, (err, data) => err ? done(err) : done(null, data)); 
  };

  const  findEditThenSave = function(personId, done) {
    const foodToAdd = 'hamburger';
    Person.findById(personId, function(err, data) {
      this.favoriteFoods.push(foodToAdd).save();
      if (err) {
        return done(err);
      }
      else {
        done(null, data);
      }
    });
  };

  const findAndUpdate = function(personName, done) {
    const ageToSet = 20;
    
    //console.log("person name  : ", personName);
    Person.findOneAndUpdate(
      {"name": personName},
      {$set: {"age":ageToSet}},{returnNewDocument : true}, 
      function(err, doc){
                      if(err){
                          console.log("Something wrong when updating record!");
                      }
                      console.log(doc);
  })};

  router.post('/delete', function(req, res, next) {
    let id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
   });

   const removeManyPeople = function(done) {
    const nameToRemove = "Mary";
    Person.deleteMany({name: nameToRemove}, (err, data)=> {
    err ? done(err) : done(null,data)
  }
  )};

  const  queryChain = function(done) {
    const foodToSearch = "burrito";
    Person.find({favoriteFoods:foodToSearch}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
       if(err)
         done(err);
      done(null, data);
    })
  };
module.exports=User=mongoose.model("user",userSchema)