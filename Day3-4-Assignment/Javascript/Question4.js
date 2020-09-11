let ObjectsArray=[
    {
        name: "Ramesh",
        country: "India",
        age: 24,
        hobbies: ["painting","travelling","singing"],
    },
    {
        name: "edison",
        country: "america",
        age: 36,
        hobbies: ["swimming","travelling","singing"],
    },
    {
        name: "ellie",
        country: "Russia",
        age:29,
        hobbies: ["painting","singing"],
    },
];
function lessthan30()
{
    for(let k = 0; k < ObjectsArray.length; k++)
    {
        if(ObjectsArray[k].age<30)
        {
            console.log("object less than 30:");
            console.log("name is "+ObjectsArray[k].name);
            console.log("country is "+ObjectsArray[k].country);
            console.log("age is "+ObjectsArray[k].age);
            for(let j = 0; j<ObjectsArray[k].hobbies.length; j++)
            {
            console.log((j+1)+" hobbies are "+ObjectsArray[k].hobbies[j]);
            }
            console.log(" ");
        }
   }
}
function Indiacountry()
{
    for(let k = 0; k < ObjectsArray.length; k++)
    {
        if(ObjectsArray[k].country == "India")
        {
            console.log("object having country India:");
            console.log("name is "+ObjectsArray[k].name);
            console.log("country is "+ObjectsArray[k].country);
            console.log("age is "+ObjectsArray[k].age);
            for(let j = 0; j<ObjectsArray[k].hobbies.length; j++)
            {
            console.log((j+1)+" hobbies are "+ObjectsArray[k].hobbies[j]);
            }
            console.log(" ");
        }
   }
}
lessthan30();
Indiacountry();
