class Bag {
    // Include constructor Method with the following property: 
        // 1. Weight
            //1a. Should handle an exception in case user adds no weight and throw an error.
	constructor(weight = -256){
	
		try{
			if(weight == -256){
				throw new Error("bag needs weight");
			}
			
			this.weight = weight;


			
		}
		catch(err){
			throw err;
		}

	}
	
}

//Export the module
module.exports = Bag;
