module.exports = {
    ArtistName1:{name:'Liam'},
    ArtistName2:{name:'Emma'},
    ArtistName3:{name:'Amelia'},
    ArtistName4:{name:'Mia'},
    ArtistName5:{name:'Sandy'},
    ArtistName6:{name:'Mary'},
    ArtistName7:{name:'William'},
    ArtistName8:{name:'Lucas'}
}

// database config

//getting value from the database 
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

let jsondic = {}
const sql= require('mssql/msnodesqlv8')


let list1 = []

function getnames(){sql.connect(config,function(err)
{   
    sql.query(
        `select name from artists`, function(err, namesOfArtists){
        list1 = namesOfArtists.recordset
        for (var i = 1; i < list1.length; i++) {
        jsondic[`ArtistName${i}`] = list1[i]
        }
        console.log(jsondic)
            }
            )   
})
};
getnames()