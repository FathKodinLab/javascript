class smansaTime{

	constructor(t){
		this.msMinute = 60;
		this.msHour = this.msMinute * 60;
		this.msDay = this.msHour * 24;
		this.msMonth = this.msDay * 30;
		this.msYear = this.msDay * 365;
	}

	/*
	* Conversion to another time format
	* You can change the return value with time format that you want
	*/
	convertTime(t){
		var d = new Date(t*1000); // Object date
		var m = ['January','February','March','April','May','June','July','August','September','October','November','December']; //list the month
		return d.getDate()+' '+m[d.getMonth()]+' '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	}
	
	/*
	* Split UNIX Time
	*/
	genTime(c,p){
		var el = c - p; //ellapse
		var a; //temp
		if(el < this.msMinute){
			if(el < 2){
				return 'just now';
			else if(el > 1){
				return el+' seconds';
			}
		}else if(el < this.msHour){
			a = Math.floor(el/this.msMinute);
			if(a > 1){
				return a+' minutes';
			}else{
				return a+' minute';
			}
		}else if(el < this.msDay){
			a = Math.floor(el/this.msHour);
			if(a > 1){
				return a+' hours';
			}else{
				return a+' hour';
			}
		}else if(el < this.msMonth){
			a = Math.floor(el/this.msDay);
			if(a < 2){
				return 'yesterday';
			}else if(a > 1 && a < 4){
				return a+' days';
			}else{
				return this.convertTime(p);
			}
		}else{
			return this.convertTime(p);
		}
	}
}
