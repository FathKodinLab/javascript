class smansaTime{

	constructor(t){
		this.msMinute = 60;
		this.msHour = this.msMinute * 60;
		this.msDay = this.msHour * 24;
		this.msMonth = this.msDay * 30;
		this.msYear = this.msDay * 365;
	}

	convertTime(t){
		var d = new Date(t*1000);
		var m = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return d.getDate()+' '+m[d.getMonth()]+' '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	}

	genTime(c,p){
		var el = c - p;
		if(el < this.msMinute){
			return el+' second';
		}else if(el < this.msHour){
			return Math.floor(el/this.msMinute)+' minute';
		}else if(el < this.msDay){
			return Math.floor(el/this.msHour)+' hour';
		}else if(el < this.msMonth){
			var d = Math.floor(el/this.msDay);
			if(d < 2){
				return 'yesterday';
			}else if(d > 1 && d < 4){
				return d+' day';
			}else{
				return this.convertTime(p);
			}
		}else{
			return this.convertTime(p);
		}
	}
}
