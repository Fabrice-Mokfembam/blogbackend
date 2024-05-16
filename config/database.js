import mongoose from 'mongoose'

const connection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ThiagoFabrice:Thiago+123.@blogcluster.oorq86r.mongodb.net/blogdb`);
        console.log('connnected to db');
    } catch (error) {
        console.log('error connecting to db', error);
    }   
}
 
export {connection}