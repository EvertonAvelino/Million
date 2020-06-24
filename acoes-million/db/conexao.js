const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/acoes-million';
mongoose.connect(uri,
 {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = mongoose;