let users = [ "Pape", "Manolo", "Borja"];
let blackListed = ["Arnau", "Fran", "David"];

  let filt = a.filter(a=> !blackListed.includes(a))
  console.log(filt)