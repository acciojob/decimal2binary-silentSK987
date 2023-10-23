function decimalToBinary(num) {
  //Write you code here
	let pv=1;
	let ans=0;
	while(num>0){
		let rem=num%2;
		ans=ans+rem*pv;
		num=num/2;
		pv*=10;
	}
	console.log(ans);
}
window.decimalToBinary = decimalToBinary;
