var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Rat's Nest",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1350&q=80",
        description: "Leedle beedle wingardium leviosa loo lee"
    },
    {
        name: "Valhalla",
        image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?auto=format&fit=crop&w=1350&q=80",
        description: "Leedle beedle wingardium leviosa loo lee"
    },
    {
        name: "High Ground",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=1350&q=80",
        description: "Leedle beedle wingardium leviosa loo lee"
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
            //add few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great",
                                author: "Homer"
                                
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        }
        
    });

    
    //add a few comments
}

module.exports = seedDB;