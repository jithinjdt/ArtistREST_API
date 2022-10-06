const sql= require('mssql/msnodesqlv8');
const number_of_artist = []
const name_of_artist = []
//database config
var config={
    user: 'root',
    password: 'pass',
    database: 'ArtistsDB',
    server :  'DESKTOP-GGNTM0V\\SQLEXPRESS',
    driver: 'msnodesqlv8',
    options:{
        trustedConnection:true
    }
};

//express
const express = require('express')
const api = express()
const HOST = 'localhost'
const PORT = 8888

//json dictionary
const dict = require('./jsondictionary');
const { Int, VarChar } = require('mssql/msnodesqlv8');
const { json } = require('express');
// const jsondic = require('./jsondictionary.js');

// const ejsLint = require('ejs-lint');

api.use(express.static("public"));

//ejs view engine
api.set('view-engine', 'ejs')
api.use(express.urlencoded({extended: false}))

//user_List
let art_list =[]
let response_List =[]
var search_name

//create sql conenction 
sql.connect(config,function(err)
{   
   

    if(err){
        console.log(err);
    } 
    //create the request object
    var request = new sql.Request();

    //api get function with all endpoints 
    api.get('/artist.search/:name',(req, res)=>{
        search_name = req.params.name
        art_list.push(search_name)
        request.query(`select * from artists where name='${search_name}'`, function(err,recordSet){
            if (recordSet.recordset && recordSet.recordset.length  ==0)
            {
            keys1 = Object.keys(dict)
            var item = keys1[Math.floor(Math.random() * keys1.length)];
            // `select * from artists1 where name='${dict[item]['name']}'`
            request.query(`select * from artists where name='${dict[item]['name']}'`, function(err,recordSetNew)
                {
            res.render('artist_page3.ejs',{name1:search_name,sampleData:recordSetNew.recordset})
            response_List.push(recordSetNew.recordset)
                })
            }
        else
            {
            res.render('artist_page3.ejs',{name1:search_name,sampleData:recordSet.recordset})
            response_List.push(recordSet.recordset)
            }    
    url = `http://localhost:8888/artist.search/${search_name}`
    })})

    api.get('/artist.search', async(req, res)=>{
        res.render('artistSearch.ejs')
    })

    // api.post('/artist.saved', async(req, res)=>{
    //     res.render('artistSearch.ejs')
    // })
    api.post('/artist.search', async(req, res)=>{
        res.redirect(`/artist.search/${search_name}`)
    })

    api.get('/', (req, res) => {
        res.send('Starting end point')
    })

    api.get('/artist/save/:filename', async(req, res)=>{
        // res.render('csvfile2.ejs', {response_List:response_List, url:url})
        
        //method to save the csv file 
        
                const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        const csvWriter = createCsvWriter({
            path: `${req.params.filename}.csv`,
            header: [
            {id: 'name', title: 'NAME'},
            {id: 'mbid', title: 'MBID'},
            {id: 'url', title: 'URL'},
            {id: 'image_small', title: 'IMAGE_SMALL'},
            {id: 'image', title:'image'}
            ]
        });
        let records = []
        // const records = [
        //     {name: 'Bob',  mbid: 1, url:'http://localhost1', image_small:'image_small1', image:'image1'},
        //     {name: 'Bob',  mbid: 1, url:'http://localhost23', image_small:'image_small2', image:'image2'}
        // ];
        let name_list = []
        console.log(response_List)
        response_List.forEach(function(value){
            if(name_list.indexOf(`${value[0]['name']}`) == -1)  
                {name_list.push(`${value[0]['name']}`)
                records.push({name: value[0]['name'],  mbid:value[0]['BID'], url:`http://localhost:8888/artist.search/${value[0]['name']}`, image_small:value[0]['image_small'], image:value[0]['image']})
                }
            });

        csvWriter.writeRecords(records)       
            .then(() => {
                console.log('...Done');
            });
            response_List=[]
            res.redirect(`/artist.search`)
    })
    
})
    
  
api.listen(PORT, () => console.log(`api running at ${HOST}:${PORT}`))

