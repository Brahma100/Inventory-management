const auth =require('./middleware/auth');
const fs = require('fs')
const bcrypt=require('bcryptjs');
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const config=require('config');
const crypto= require('crypto')

const server = jsonServer.create()

const router = jsonServer.router('./products.json')

const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
const productdb=JSON.parse(fs.readFileSync('./products.json','UTF-8'))
const categorydb=JSON.parse(fs.readFileSync('./categories.json','UTF-8'))
const orderdb=JSON.parse(fs.readFileSync('./orders.json','UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());


// JWT TOKEN DATA
const SECRET_KEY = config.get('jwtSecret')
const expiresIn = config.get('expiresIn')
// const expiresIn = '1h'


// -------------------- List of Functions-----------------------


// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database

function CheckUser({email}){
  console.log("Email",email);
  return userdb.users.findIndex(user => user.email === email) !== -1
}

function CheckProduct({name}){
  console.log("Product Name:",name);
  return productdb.products.findIndex(product => product.name === name) !== -1
}
function CheckCategory({name}){
  console.log("Category Name:",name);
  return categorydb.categories.findIndex(category => category.name === name) !== -1
}



//---------------------------------Products View Api--------------------------------------


server.get('/products',(req,res)=>{

  fs.readFile("./products.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());
    res.status(200).json(data.products)
    return

});
});



//----------------------Add New Product-----------------------------



server.post('/add_product', (req, res) => {
  const {name,description,manufacturer,price,stock,img,CategoryName,user} = req.body;

  if(!name || !description || !manufacturer || !stock || !CategoryName || !img || !price) return res.status(400).json({msg:'Please Enter all Fields'});
  // Check for Existence of Registering Product
  if(CheckProduct({name}) === true) {  
      return res.status(400).json({msg:'Product Already Exits'});
  }

fs.readFile("./products.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
      // Date of product Creation
      var dateTime = require('node-datetime');
      var dt = dateTime.create();
      var date = dt.format('Y-m-d H:M:S');
      var rating="";
      // Get current products data
      var data = JSON.parse(data.toString());
      const id=crypto.randomBytes(12).toString('hex');
          
                    data.products.push({id: id,name:name, description: description,manufacturer:manufacturer ,price:price,stock:stock,img:img,category:CategoryName,user:user,date:date,rank:0,rankUser:[],editUser:[]}); //add some data
                    console.log("Push Pass",data);
                    var writeData = fs.writeFile("./products.json", JSON.stringify(data), (err, result) => {  // WRITE
                      if (err) {
                        const status = 401
                        const message = err
                        res.status(status).json({status, message})
                        return
                      }
                  });
                  res.status(200).json(
                            
                            {
                            id:id,
                            name:name,
                            description:description,
                            manufacturer:manufacturer,
                            price:price,
                            stock:stock,
                            category:CategoryName,
                            rating:rating,
                            user:user,
                            date:date,
                            img:img,
                            rank:0,
                            rankUser:[],
                            editUser:[]
                            }
              
          );
}); 
})// End of Add Product Route





server.get('/categories',(req,res)=>{

  fs.readFile("./categories.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());
    res.status(200).json(data.categories)
    return

});
});



server.post('/add_category', (req, res) => {
  const {name,user} = req.body;

  if(!name) return res.status(400).json({msg:'Please Enter all Fields'});
  // Check for Existence of Registering Product
  if(CheckCategory({name}) === true) {  
      return res.status(400).json({msg:'Category Already Exits'});
  }

fs.readFile("./categories.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
      // Date of product Creation
      var dateTime = require('node-datetime');
      var dt = dateTime.create();
      var date = dt.format('Y-m-d H:M:S');

      // Get current products data
      var data = JSON.parse(data.toString());
      
      var id=data.categories[data.categories.length-1].id+1;
     
     
          
                    data.categories.push({id: id,name:name, user:user,date:date,products:[]}); //add some data
                    console.log("Push Pass",data);
                    var writeData = fs.writeFile("./categories.json", JSON.stringify(data), (err, result) => {  // WRITE
                      if (err) {
                        const status = 401
                        const message = err
                        res.status(status).json({status, message})
                        return
                      }
                  });
                  res.status(200).json(
                            
                            {
                            id:id,
                            name:name,
                            user:user,
                            date:date,
                            products:[]
                            }
              
          );
}); 
})// End of Add Categories Route




//----------------------------UPDATE USER DATA------------------------------------

  
server.post("/update_product",function(req,res){  
  // req==request from client || res=== Response that would be from Server

  const {id,name,description, manufacturer,price,stock,rating,user} = req.body;

  if(!name || !description || !manufacturer || !stock || !rating || !price) return res.status(400).json({msg:'Please Enter all Fields'});
  // Check for Existence of Registering User

  // Finding product by Id 
  const index=productdb.products.findIndex(product=>product.id===id);
  // Check for Existense of Product
  if(index==-1) return res.status(400).json({msg:'Server: Product Not Exits'});
  // Storing target Product in "product" from db
  const product=productdb.products[index];  
  // Matching new Entries with Previous Entries
  if(name===product.name && description===product.description && manufacturer===product.manufacturer && price===product.price && stock===product.stock && rating===product.rating) return res.status(400).json({msg:'Server: Entered Data is Same as Previous One'});
  // Reading Json DB
  fs.readFile("./products.json", (err, data) => {  
    if (err) {
      return res.status(400).json({msg:'Server: Error while Reading JSON DB'});
    };

    // Fetching Whole users data (JSON format to String)
    var data = JSON.parse(data.toString());
    // Updating only Target User data based on Index
    data.products[index].name=name;
    data.products[index].description=description;
    data.products[index].manufacturer=manufacturer;
    data.products[index].price=price;
    data.products[index].stock=stock;
    data.products[index].rating=rating;
    data.products[index].editUser.push(user)

    console.log(data.products[index].editUser,user);
    
    // Writing Updated data to Json DB
    var writeData = fs.writeFile("./products.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        return res.status(400).json({msg:'Server: Error while Writing into JSON DB'});
      };
    });// End of File Writing

    // Returing Response with 200 Status and Updated Data To the Client

  
    res.status(200).json({
      product:{
        id:data.products[index].id,
        name:data.products[index].name,
        description:data.products[index].description,
        manufacturer:data.products[index].manufacturer,
        price:data.products[index].price,
        stock:data.products[index].stock,
        rating:data.products[index].rating,
        rank:data.products[index].rank,
        rankUser:data.products[index].rankUser,
        editUser:data.products[index].editUser
      }  
      })
          
  }); // End of File Reading

});// End of Update API


server.post("/rank_product",function(req,res){  
  // req==request from client || res=== Response that would be from Server

  const {id,user} = req.body;

  // if() return res.status(400).json({msg:'Please Enter all Fields'});
  // Check for Existence of Registering User
  // Finding product by Id 

  const index=productdb.products.findIndex(product=>product.id===id.id);
  // Check for Existense of Product
  console.log("Id:",id.user);
  if(index==-1) return res.status(400).json({msg:'Server: Product Not Exits1'});
  // Storing target Product in "product" from db

  const product=productdb.products[index];  
  // Matching new Entries with Previous Entries
  // if(name===product.name && description===product.description && manufacturer===product.manufacturer && price===product.price && stock===product.stock && rating===product.rating) return res.status(400).json({msg:'Server: Entered Data is Same as Previous One'});
  // Reading Json DB
  fs.readFile("./products.json", (err, data) => {  
    if (err) {
      return res.status(400).json({msg:'Server: Error while Reading JSON DB'});
    };

    // Fetching Whole users data (JSON format to String)

    var data = JSON.parse(data.toString());

    data.products[index].rankUser.push(id.user);
    data.products[index].rank=data.products[index].rank+1;
    // Writing Updated data to Json DB
    var writeData = fs.writeFile("./products.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        return res.status(400).json({msg:'Server: Error while Writing into JSON DB'});
      };
    });// End of File Writing

    // Returing Response with 200 Status and Updated Data To the Client

  
    res.status(200).json({
      product:{
        id:data.products[index].id,
        name:data.products[index].name,
        description:data.products[index].description,
        manufacturer:data.products[index].manufacturer,
        price:data.products[index].price,
        stock:data.products[index].stock,
        rating:data.products[index].rating,
        rank:data.products[index].rank,
        rankUser:data.products[index].rankuser,
        editUser:data.products[index].editUser
      }  
      })
          
  }); // End of File Reading

});// End of Update API
//-------------------DELETE PRODUCT DATA----------------------------------------------


server.post("/delete_product",function(req,res){  
  // req==request from client || res=== Response that would be from Server

  const {id} = req.body;
  // Finding product by Id 
  console.log("id",id);
  const index=productdb.products.findIndex(product=>product.id===id);
  // Check for Existense of Product
  if(index==-1) return res.status(400).json({msg:'Server: Product Not Exits'});
  // Storing target Product in "product" from db
  const product=productdb.products[index];  
  // Matching new Entries with Previous Entries
  fs.readFile("./products.json", (err, data) => {  
    if (err) {
      return res.status(400).json({msg:'Server: Error while Reading JSON DB'});
    };

    // Fetching Whole users data (JSON format to String)
    var data = JSON.parse(data.toString()); // Object
    var products=data.products;
    data.products=products.filter(product=>product.id!==id)
    // Writing Updated data to Json DB
    var writeData = fs.writeFile("./products.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        return res.status(400).json({msg:'Server: Error while Writing into JSON DB'});
      };
    });// End of File Writing

    // Returing Response with 200 Status and Updated Data To the Client

  
    res.status(200).json({
      msg:"Product Deleted",
      product:product  
      })
          
  }); // End of File Reading

});// End of Dalete API



server.post("/delete_selected_product",function(req,res){  
  // req==request from client || res=== Response that would be from Server

  const {ids} = req.body;
  // Finding product by Id 
  console.log("ids",ids);
  // const index=productdb.products.findIndex(product=>product.id===id);
  // Check for Existense of Product
  // if(index==-1) return res.status(400).json({msg:'Server: Product Not Exits'});
  // Storing target Product in "product" from db
  // const product=productdb.products[index];  
  // Matching new Entries with Previous Entries
  fs.readFile("./products.json", (err, data) => {  
    if (err) {
      return res.status(400).json({msg:'Server: Error while Reading JSON DB'});
    };

    // Fetching Whole users data (JSON format to String)
    var data = JSON.parse(data.toString()); // Object
    var products=data.products;
    data.products=products.filter((product)=>  
        { 
                 for(var id in ids){
                    if(product.id!==id)return false;
              }
              return true;
      });                                            //product=>product.id!==id
    // Writing Updated data to Json DB
    var writeData = fs.writeFile("./products.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        return res.status(400).json({msg:'Server: Error while Writing into JSON DB'});
      };
    });// End of File Writing

    // Returing Response with 200 Status and Updated Data To the Client

  
    res.status(200).json({
      msg:"Product Deleted"
      })
          
  }); // End of File Reading

});// End of Dalete API



//-----------------------------------LOGIN API ROUTE-----------------------------------


// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  // req==request from client || res=== Response that would be Given from Server

  // Destructuring 'email,password' from Client Request
  const {email, password} = req.body;
  // Check for blank Entry
  if(!email || !password) return res.status(400).json({msg:'Please Enter all Fields'});
  // Finding Index of Target User from JSON DB 
  const index=userdb.users.findIndex(user => user.email === email);
  // Checking the Existense of User
  if(index==-1)return res.status(400).json({msg:'Server: User Not Exits'});
  // console.log("Index",index);

  // Storing Target User data to "user" using index from DB
  const user=userdb.users[index]
  let id=user.id;
  // Comparing User Entered password with Encrypted password
  bcrypt.compare(password,user.password)
  .then(isMatch=>{
    // Return Error as Response if password didn't match
    if(!isMatch) return res.status(400).json({msg:"Server: Invalid Credential"});
    // Creating JWT token using user (id & email)
    const token = createToken({id,email})
    // console.log("Access Token:" + access_token);

    //Response with token && User data
    res.status(200).json({
      token,
      user:{
        _id:user.id,
        name:user.name,
        email:user.email,
        password:user.password
    }  
    })
  })// End of Bcrypt
  

})// End of LOGIN API




//---------------------REGISTER API--------------------------------------


server.post('/auth/register', (req, res) => {
        const {name,email, password,img} = req.body;

        if(!name || !email || !password ) return res.status(400).json({msg:'Please Enter all Fields'});
        // Check for Existence of Registering User
        if(CheckUser({email}) === true) {  
            return res.status(400).json({msg:'User Already Exits'});
        }

      fs.readFile("./users.json", (err, data) => {  
            if (err) {
              const status = 401
              const message = err
              res.status(status).json({status, message})
              return
            };
            var dateTime = require('node-datetime');
            var dt = dateTime.create();
            var date = dt.format('Y-m-d H:M:S');
            // Get current users data
            var data = JSON.parse(data.toString());
            var newPassword;
            // Get the id of last user
            var last_item_id = data.users[data.users.length-1].id;
            // Create salt & hash
                   bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(password,salt,(err,hash)=>{
                        if(err) throw err;
                        newPassword=hash;
                        //Add new user
                        // console.log("New PAss",newPassword);
                        // console.log("Img:",img);
                          data.users.push({id: last_item_id + 1,name:name, email: email, password: newPassword,img:img,date:date}); //add some data
                          // console.log("Push Pass",data);
                          var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
                            if (err) {
                              const status = 401
                              const message = err
                              res.status(status).json({status, message})
                              return
                            }
                        });
                        console.log("WriteData",writeData);
                        console.log("User",userdb.users);
                          // Create token for new user
                        const id=last_item_id+1
                        const token = createToken({id,email})
                        console.log("Access Token:" + token);
                        res.status(200).json({
                                  token,
                                  user:{
                                  _id:last_item_id+1,
                                  name:name,
                                  email:email,
                                  password:newPassword,
                                  img:img,
                                  date:date
                      }})
                    });
                });
      }); 
})// End of Register Route




//----------------------------UPDATE USER DATA------------------------------------


  
server.post("/auth/update",auth,function(req,res){  
  // req==request from client || res=== Response that would be from Server

  // Destructuring User data from Request   
  const { id ,name, email }=req.body;
  // console.log("ID:",id," Name:",name," Email:",email);
  
  // Check Empty entries
  if(!email || !name) return res.status(400).json({msg:'Server: Please Enter all Fields'});

  // Finding user by Id 
  const index=userdb.users.findIndex(user=>user.id===id);
  // Check for Existense of User
  if(index==-1) return res.status(400).json({msg:'Server: User Not Exits'});
  // Stroing target User in "user" from db
  const user=userdb.users[index];  
  // Matching new Entries with Previous Entries
  if(name===user.name && email===user.email) return res.status(400).json({msg:'Server: Entered Data is Same as Previous One'});
  // Reading Json DB
  fs.readFile("./users.json", (err, data) => {  
    if (err) {
      return res.status(400).json({msg:'Server: Error while Reading JSON DB'});
    };

    // Fetching Whole users data (JSON format to String)
    var data = JSON.parse(data.toString());
    // Updating only Target User data based on Index
    data.users[index].name=name;
    data.users[index].email=email;
    // Writing Updated data to Json DB
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        return res.status(400).json({msg:'Server: Error while Writing into JSON DB'});
      };
    });// End of File Writing

    // Returing Response with 200 Status and Updated Data To the Client
    res.status(200).json({
      user:{
        _id:user.id,
        name:user.name,
        email:user.email,
        password:user.password,
        img:user.img
      }  
      })
          
  }); // End of File Reading

});// End of Update API



//----------------------- Verify User Using Token-----------------------------------

server.get("/auth/user",auth, (req,res)=>{
  // console.log("Request Update",req.user)

  // Here Data in Request "req" is coming from JWT(auth function[After verification with Secret Key])
  
  //Fetching target user using user id from Json DB
  const index=userdb.users.findIndex(user=>user.id===req.user.id)
  // console.log("UserLoad index:",index);
  // console.log(userdb.users[index]);

  // Check for Existense of User
  if(index==-1) return res.status(400).json({msg:'Server: User Not Exits[Authentication Index]'});
  
  const user=userdb.users[index];
  // console.log("User from Json:",user)
  // res.status(200).json(user);
  
  // Response with only User Data(except password)
  res.status(200).json(
    {
      _id:user.id,
      name:user.name,
      email:user.email,
      img:user.img,
      date:user.date
      // password:user.password
    
  })
});// End of Verify User using Token
















server.get('/orders',(req,res)=>{

  fs.readFile("./orders.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({status, message})
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());
    res.status(200).json(data.orders)
    return

});
});

server.post('/add_order', (req, res) => {
  // "product_id":1,
  //           "customer_name":"Raj",
  //           "customer_address":"41/A hello World street pin:700K",
  //           "by_user_id":1,
  //           "date":"12/07/2020",
  //           "time":"12:00 PM"
  const {product_id,customer_name, customer_address,by_user_id} = req.body;

  if(!product_id || !customer_name || !customer_address || !by_user_id) return res.status(400).json({msg:'Please Enter all Fields'});

fs.readFile("./orders.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };

      // Get current products data
      var data = JSON.parse(data.toString());
      const id=crypto.randomBytes(12).toString('hex');
      var dateTime = require('node-datetime');
      var dt = dateTime.create();
      var date = dt.format('Y-m-d H:M:S');
    
                    data.orders.push({id: id,product_id:product_id, customer_name: customer_name,customer_address:customer_address ,by_user_id:by_user_id,date:date}); //add some data
                    console.log("Push Pass",data);
                    var writeData = fs.writeFile("./orders.json", JSON.stringify(data), (err, result) => {  // WRITE
                      if (err) {
                        const status = 401
                        const message = err
                        res.status(status).json({status, message})
                        return
                      }
                  });
                  res.status(200).json({
                            
                            order:{
                            id:id,
                            product_id:product_id,
                            customer_name:customer_name,
                            customer_address:customer_address,
                            by_user_id:by_user_id,
                            date:date
                            }
              
          });
}); 
})// End of Add Product Route




// server.use(/^(?!\/auth).*$/,  (req, res, next) => {
//   if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
//     const status = 401
//     const message = 'Error in authorization format'
//     res.status(status).json({status, message})
//     return
//   }
//   try {
//     let verifyTokenResult;
//      verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

//      if (verifyTokenResult instanceof Error) {
//        const status = 401
//        const message = 'Access token not provided'
//        res.status(status).json({status, message})
//        return
//      }
//      next()
//   } catch (err) {
//     const status = 401
//     const message = 'Error access_token is revoked'
//     res.status(status).json({status, message})
//   }
// })

server.use(router)

const port=process.env.PORT || 8000;
// Server Listening at Port 8000
server.listen(port, () => {
  console.log('Server started on Port '+port)
})
