function pomodoro (){
	var ct ;
	var brac;
	$('#comp').text(25)
	this.start = function() {
		if(ct>0){
		ct--,
		$('#comp').text(ct)
	} else {
		clearInterval(this.brac)
		console.log('Appuyer sur pause avant de relancer')
}}
	this.debut = function() {
		ct=25
		this.brac=setInterval(this.start,1000),
		setTimeout(this.break,25000)

	}
	this.break = function() {

		$('#test:last-child').css('text-decoration','line-through')
		ct=6
	}
	this.pause = function(){
		clearInterval(this.brac)
	}
}
pimi = new pomodoro()
$('#ok').click(function(){
	$('#list').append('<li id="test">'+$('#task').val()+'</li>')
	$('#list').css('text-decoration','none')
})