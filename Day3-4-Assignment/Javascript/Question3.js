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
for(let i = 0; i < ObjectsArray.length; i++)
{
    console.log("name is "+ObjectsArray[i].name);
    console.log("country is "+ObjectsArray[i].country);
    console.log("age is "+ObjectsArray[i].age);
    for(let j = 0; j<ObjectsArray[i].hobbies.length; j++)
    {
        console.log((j+1)+" hobbies are "+ObjectsArray[i].hobbies[j]);
    }
    console.log(" ");
}