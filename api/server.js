const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyK6OVfXMAmNkzYU'}).base('appuW1YdhrtU5HaZU');

server.use(helmet());
server.use(cors());
server.use(express.json());
const getRecords= ()=>{
    return new Promise((resolve, reject) => {
        // Setup empty array to store results
        
        const chaptersRecord = []
    
        // Query
        const apiQuery = {
          pageSize: 100,
        }
    
        // Go get it!
        base('Chapters').select(apiQuery).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          // The properties here would correspond to your records

          records.forEach(record=> {
            const post = {
              Chapters: record.fields.Chapters,
              Services: record.fields.ServiceName,

            }
    
            // Store each result in our empty array
            chaptersRecord.push(post)
          })
    
          fetchNextPage()
        }, function done(error) {
          // Throw error if exists
          if (error) reject({ error })
    
          // Finish
          resolve(chaptersRecord)
        })
      })
}
const getChapterName= ()=>{
    
    return new Promise((resolve, reject) => {
        // Setup empty array to store results
        
        const chaptersRecord = []
    
        // Query
        const apiQuery = {
          pageSize: 100,
        }
    
        // Go get it!
        base('Chapters').select(apiQuery).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          // The properties here would correspond to your records

          records.forEach(record=> {
           
    
            // Store each result in our empty array
            chaptersRecord.push(record.fields.Chapters)
          })
    
          fetchNextPage()
        }, function done(error) {
          // Throw error if exists
          if (error) reject({ error })
    
          // Finish
          resolve(chaptersRecord)
        })
      })
}
const getCategories= ()=>{
    
    return new Promise((resolve, reject) => {
        // Setup empty array to store results
        
        const chaptersRecord = []
    
        // Query
        const apiQuery = {
          pageSize: 100,
        }
    
        // Go get it!
        base('Categories').select(apiQuery).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          // The properties here would correspond to your records

          records.forEach(record=> {
            const post ={
                Name: record.fields.Name,
                Service: record.fields.ServiceName
            }
    
            // Store each result in our empty array
            chaptersRecord.push(post)
          })
    
          fetchNextPage()
        }, function done(error) {
          // Throw error if exists
          if (error) reject({ error })
    
          // Finish
          resolve(chaptersRecord)
        })
      })
}
server.get('/', (req, res) => {
    res.send("YWCA");
});
server.get('/chapters', (req, res) => {
    Promise.resolve(getRecords()).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"Can't fetch"})
    })
})
server.get('/chapters/name', (req, res) => {
    Promise.resolve(getChapterName()).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"Can't fetch"})
    })
})
server.get('/categories', (req, res) => {
    Promise.resolve(getCategories()).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message:"Can't fetch"})
    })
})


module.exports = server;
