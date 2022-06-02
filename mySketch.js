var txts =[]//宣告陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("")
	inputElement.position(50,50)
	inputElement.input(userInput)
	inputElement.style("font-size",'30px')
	
}

function userInput(){
//print(this.value())
txts.push({
	text:this.value(),
	x:width/2,
	y:50,
	vx: random(1,-1),//字往X掉下來的速率，正數:往右；負數:往左
	vy: 1
	
	
})
	this.value('')
	//print(txts)
}

function draw(){
	background(0)
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
		let txt = txts[i]
		text(txt.text,txt.x,txt.y)//把文字內容顯示在座標上
		txt.x = txt.x + txt.vx
		txt.y = txt.y + txt.vy
		txt.vy = txt.vy +0.1//產生自由落體
		txt.vy = txt.vy *0.999//增加摩擦力
		txt.vx = txt.vx *0.999//增加摩擦力
		
		if(txt.y>height){//字母降到最底下會往上跳
			txt.vy = -abs(txt.vy)//字母降到最底下會往上跳
		}
}
	}