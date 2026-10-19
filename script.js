function showMemberCard(name,age,email,phn,membership){

let sec=[
		"A",
		"B",
		"C",
		];
		for(let i=0;i<sec.length;i++)
		{
			console.log(sec[i]);
		}







	document.getElementById("output").innerHTML=
	"<h2>Members Information</h2>" +
	"Name: "+name+"<br>"+
	"Age: "+age+"<br>"+
	"Email: "+email+"<br>"+
	"Phone: "+phone+"<br>"+
	"Member Ship: "+membershp+"<br><br>"+
	"category: "+(age<13 ? "Junior" : "Regular")+"<br>"+
	/*"Applicable Fee: "+(
	if(mem="b")
	{
		console.log("500");
	}
	else if(membership="s")
	{
		console.log("1000");
	}
	else
	{
		console.log("1500");
	}
	)+*/
	sec.join("<br>");
	
}
document.addEventListener("submit",function (event){
	event.preventDefault();
	let name=
		document.getElementById("name").value;
		
	let age=
		document.getElementById("age").value;
		
	let email=
		document.getElementById("email").value;
		
	let phn=
		document.getElementById("phn").value;
		
	let mem=
		document.querySelector(
			'input[name="mem"]:checked'
				).value;
				
	showMemberCard(
		name,
		age,
		email,
		phn,
		mem
		);
});
		
		
		
		
		
		
		
		