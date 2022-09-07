//Import the mongoose module
const mongoose = require('mongoose');

class Database { // Singleton
  connection = mongoose.connection;
  
  constructor() {
    try {
      
      this.connection
      .on('open', ()=>{console.log( 'Database connection: open')})
      .on('close', ()=>{console.log( 'Database connection: close')})
      .on('disconnected', ()=>{console.log( 'Database connection: disconnecting')})
      .on('disconnected', ()=>{console.log( 'Database connection: disconnected')})
      .on('reconnected', ()=>{console.log( 'Database connection: reconnected')})
      .on('fullsetup', ()=>{console.log( 'Database connection: fullsetup')})
      .on('all', ()=>{console.log( 'Database connection: all')})
      .on('error',()=>{console.log( 'MongoDB connection: error:')});
    } catch (error) {
      console.error(error);
    }
  }

  async connect(username, password,database) {
    try {
      await mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.nlqniy6.mongodb.net/?retryWrites=true&w=majority`,{"dbName" : database});
    } catch (error) {
      console.error(error);
    }
  }

  async close() {
    try {
      await this.connection.close();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Database();