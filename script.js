function decimalToBinary(num) {
  //Write you code here
	let pv=1;
	let ans=0;
	while(num>0){
		let rem=num%2;
		num=num/2;
		ans=ans+rem*pv;
		pv*=10;
	}
	return ans;
	
  
}

window.decimalToBinary = decimalToBinary;
