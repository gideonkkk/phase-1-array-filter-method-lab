const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  console.log(findMatching(drivers, "bobby")); // returns ["Bobby"]
 
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  console.log(fuzzyMatch(drivers, "sam")); // returns ["Sammy", "Sally", "Sarah"]

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  