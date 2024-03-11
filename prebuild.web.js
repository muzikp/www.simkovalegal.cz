module.exports = async function(fileName, engine) {
    /* triggered when a file team.pug in /lab/templates subdirectory is changed/saved */
    if(fileName == "tym/template.pug") {
        const locals = await engine.locals();        
        for(let person of locals.team) {            
            var html = await engine.compilePug(fileName, {person: person}, `/tym/${person.id}.html`);
        }
        return true; /* prevents default compile behaviour; set to false if compilation should be run anyway */
    }    
    else {
        return false;
    }

}