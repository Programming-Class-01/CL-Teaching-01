// Discrete location in memory for the storage of data for a specific period of time.
{
    let theName;

    {

        const ENORMOUS_FILE = { name: "Chris", age: 35 }
        const firstName = ENORMOUS_FILE.name;
        theName = firstName;

    }

    console.log(`Hello World's Dumbest ${theName}`);
}