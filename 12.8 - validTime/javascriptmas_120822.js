function validTime(str) {

	let dividedTime = str.split(':');
	let minutes = parseInt(dividedTime[1]);
	let hours = parseInt(dividedTime[0]);

	//Hours
	if (hours > 23 || hours < 0)
		return false;

	//Minutes
    if (minutes > 59 || minutes < 0)
    	return false;
        
    return true;
}
