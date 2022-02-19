const mongoose = require('mongoose')

module.exports = async () => {

    try {
        const connectionParams = {
            useNewUrlParser: true,
            
            useUnifiedTopology: true
        };
        await mongoose.connect(
          "mongodb+srv://terence:terence@cluster0.tw3du.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          connectionParams
        );
        console.log("Connected to the Database")
    } catch (error) {
        console.log(error)
    }
}