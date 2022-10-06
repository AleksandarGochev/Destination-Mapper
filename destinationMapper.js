function destinationMapper(input){
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g
    let equip = []
    let points = 0;
    let match = pattern.exec(input);

    while(match != null){
        equip.push(match[2]);
        points += match[2].length



            match = pattern.exec(input);
    }
    console.log(`Destinations: ${equip.join(', ')}`);
    console.log('Travel Points: ' + points)

    
    

}
destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='])	

